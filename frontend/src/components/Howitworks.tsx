// HowItWorks.tsx
"use client";
import React from "react";
import { FaHelicopter, FaMapMarkerAlt, FaClock, FaUserShield } from "react-icons/fa";

const steps = [
  {
    title: "Request Rescue",
    description:
      "Report your emergency via our app or helpline. Provide your location and situation details.",
    icon: <FaMapMarkerAlt className="text-white w-8 h-8" />,
    bgColor: "bg-blue-500",
  },
  {
    title: "Dispatch Helicopter",
    description:
      "Our team immediately dispatches the nearest available helicopter with trained medical staff.",
    icon: <FaHelicopter className="text-white w-8 h-8" />,
    bgColor: "bg-green-500",
  },
  {
    title: "Rapid Response",
    description:
      "Helicopter reaches your location quickly with real-time navigation and monitoring.",
    icon: <FaClock className="text-white w-8 h-8" />,
    bgColor: "bg-yellow-500",
  },
  {
    title: "Safe Evacuation",
    description:
      "Patients are safely transported to the nearest hospital or rescue center with medical supervision.",
    icon: <FaUserShield className="text-white w-8 h-8" />,
    bgColor: "bg-red-500",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-5xl font-bold text-gray-800 mb-6">
          How Heli Rescue Works
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Our rescue operation is fast, efficient, and designed to save lives. Here’s how we ensure your safety in emergencies:
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`p-4 rounded-full mb-4 ${step.bgColor}`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
