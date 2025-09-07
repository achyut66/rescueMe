// FAQ.tsx
"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I request a helicopter rescue?",
    answer: "You can request a rescue via our mobile app or call our emergency helpline. Provide your location and details of your situation.",
  },
  {
    question: "Which areas do you cover?",
    answer: "We provide nationwide coverage across Nepal, including remote and hard-to-reach locations in the Himalayas.",
  },
  {
    question: "What is the average response time?",
    answer: "Our average response time depends on the location, but we strive to reach emergency sites as quickly as possible with real-time navigation.",
  },
  {
    question: "Are the medical staff trained?",
    answer: "Yes, all our pilots and medical staff are highly trained for rescue operations and emergency medical care.",
  },
  {
    question: "How much does a rescue operation cost?",
    answer: "Costs vary depending on distance, location, and resources needed. You can contact us directly for a detailed estimate.",
  },
  {
    question: "Can I track the helicopter in real-time?",
    answer: "Yes, our app provides live tracking for every rescue mission so you know the estimated arrival time.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-5xl font-bold text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are answers to the most common questions about our Heli Rescue services.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                {activeIndex === index ? (
                  <FaChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <FaChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </div>
              {activeIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
