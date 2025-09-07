"use client";

import React from "react";
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="py-24 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-0">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text bg-gray-900">
            Get In Touch
          </h2>
          {/* <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Ready to help or need assistance? Contact us 24/7 for emergency services or general inquiries.
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info Cards */}
          <div className="space-y-8">
            {/* Card */}
            <div className="flex items-start space-x-5 bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-green-500 p-4 rounded-lg text-white text-2xl animate-pulse">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Emergency Hotline</h3>
                <p className="text-gray-900 text-lg">+977 1234 5678</p>
                <p className="text-sm text-gray-400">Available 24/7 for emergencies</p>
              </div>
            </div>

            <div className="flex items-start space-x-5 bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-green-500 p-4 rounded-lg text-white text-2xl animate-bounce">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Location</h3>
                <p className="text-gray-900 text-lg">Kathmandu, Nepal</p>
                <p className="text-sm text-gray-400">Base Camp Trip Pvt. Ltd.</p>
              </div>
            </div>

            <div className="flex items-start space-x-5 bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-green-500 p-4 rounded-lg text-white text-2xl animate-pulse">
                <FaClock />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Response Time</h3>
                <p className="text-gray-900 text-lg">Average 15 minutes</p>
                <p className="text-sm text-gray-400">From call to deployment</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-xl">
            <h3 className="text-3xl font-bold mb-8 bg-clip-text bg-gray-900">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3 bg-gray/10 border border-gray-900 rounded-xl text-gray-900 placeholder-gray-900 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-3 bg-white/10 border border-gray-900 rounded-xl text-gray-900 placeholder-gray-900 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-5 py-3 bg-white/10 border border-gray-900 rounded-xl text-gray-900 placeholder-gray-900 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-5 py-3 bg-white/10 border border-gray-900 rounded-xl text-gray-900 placeholder-gray-900 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 resize-none transition"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
