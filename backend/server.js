const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/api/message", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT content FROM messages LIMIT 1");
    res.json({ message: rows[0].content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
