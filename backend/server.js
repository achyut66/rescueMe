require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Sequelize, DataTypes } = require("sequelize");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to your preferred email service
  auth: {
    user: process.env.EMAIL_USER || 'ayt.neupane@gmail.com', // Replace with your email
    pass: process.env.EMAIL_PASS || 'qycj zarc uvij xdnh' // Replace with your app password
  }
});

// Verify email configuration
transporter.verify((error, success) => {
  if (error) {
    console.log('Email configuration error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// --- MySQL / Sequelize setup ---
const sequelize = new Sequelize("nextjs", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// --- Models ---

// User model
const User = sequelize.define("User", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
});

// Message model
const Message = sequelize.define("Message", {
  content: { type: DataTypes.STRING, allowNull: false },
});

// ContactMessage model
const ContactMessage = sequelize.define("ContactMessage", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  subject: { type: DataTypes.STRING, allowNull: false },
  message: { type: DataTypes.TEXT, allowNull: false },
  status: { type: DataTypes.ENUM('pending', 'sent', 'failed'), defaultValue: 'pending' }
});

// Sync DB
sequelize
  .sync()
  .then(() => console.log("Database & tables synced"))
  .catch((err) => console.error("DB sync error:", err));

// --- Middleware for JWT authentication ---
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (!token) return res.status(401).json({ error: "Token required" });

  jwt.verify(token, "SECRET_KEY", (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = user;
    next();
  });
};

// --- Routes ---

// Register
app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    res.json({ message: "User registered", user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "User already exists or invalid data" });
  }
});

// Login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Protected route example
app.get("/api/message", authenticateToken, async (req, res) => {
  try {
    const message = await Message.findOne();
    if (!message) return res.json({ message: "No message found" });
    res.json({ message: message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  try {
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to database
    const contactMessage = await ContactMessage.create({
      name,
      email,
      subject,
      message,
      status: 'pending'
    });

    // Email configuration
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: process.env.CONTACT_EMAIL || 'contact@rescueme.com', // Replace with your desired email
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This message was sent from the RescueMe contact form.</em></p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    // Update status to sent
    await contactMessage.update({ status: 'sent' });

    res.json({ 
      success: true, 
      message: "Your message has been sent successfully!" 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Update status to failed if we have a contact message
    if (contactMessage) {
      await contactMessage.update({ status: 'failed' });
    }
    
    res.status(500).json({ 
      error: "Failed to send message. Please try again later." 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
