// WhyChooseUs.tsx
"use client";
import React from "react";
import { FaShieldAlt, FaClock, FaUsers, FaMapMarkedAlt } from "react-icons/fa";

const features = [
  {
    title: "Trusted & Reliable",
    description: "We have a proven track record of quick and safe rescues in the Himalayas.",
    icon: <FaShieldAlt className="text-white w-8 h-8" />,
    bgColor: "bg-blue-500",
  },
  {
    title: "Rapid Response",
    description: "Our helicopters are equipped for fast deployment to any emergency location.",
    icon: <FaClock className="text-white w-8 h-8" />,
    bgColor: "bg-green-500",
  },
  {
    title: "Expert Team",
    description: "Trained pilots and medical staff ensure professional assistance every time.",
    icon: <FaUsers className="text-white w-8 h-8" />,
    bgColor: "bg-yellow-500",
  },
  {
    title: "Nationwide Coverage",
    description: "We can reach remote and difficult-to-access locations across Nepal.",
    icon: <FaMapMarkedAlt className="text-white w-8 h-8" />,
    bgColor: "bg-red-500",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Why Choose Us
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          When it comes to rescue operations, experience, speed, and trust matter. Here’s why we are the top choice:
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`p-4 rounded-full mb-4 ${feature.bgColor}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
