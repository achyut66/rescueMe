"use client";

import { useEffect, useState } from "react";
import { FaPhone, FaMapMarkerAlt, FaClock, FaHelicopter, FaUserMd, FaShieldAlt, FaMountain, FaHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import HowItWorks from "@/components/Howitworks";
import FAQS from "@/components/FAQ";
import MapCoverage from "@/components/Map";

export default function HomePage() {
  useEffect(() => {
    document.title = "BaseCamp Trip | Home";
  }, []);
  const [stats, setStats] = useState({
    totalRescues: 0,
    livesSaved: 0,
    helicoptersDeployed: 0,
    responseTime: 0
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        console.error('Error:', data.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animated counter effect
  useEffect(() => {
    const animateCounters = () => {
      const targetStats = {
        totalRescues: 1247,
        livesSaved: 2156,
        helicoptersDeployed: 89,
        responseTime: 15
      };

      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          totalRescues: Math.floor(targetStats.totalRescues * progress),
          livesSaved: Math.floor(targetStats.livesSaved * progress),
          helicoptersDeployed: Math.floor(targetStats.helicoptersDeployed * progress),
          responseTime: Math.floor(targetStats.responseTime * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    };

    animateCounters();
  }, []);


  

  return (
    <>
    <Head>
        <title>BaseCamp Trip</title>
      </Head>
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/menu/heli2.jpeg"
            alt="Himalayan Mountains"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <div className="space-y-8">
            {/* Main Heading with Animation */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block animate-fade-in-up">Rescue</span>
                <span className="block text-green-400 animate-fade-in-up-delay">Missions</span>
                <span className="block animate-fade-in-up-delay-2">24/7</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-3">
                Saving lives in the world&apos;s highest peaks with rapid helicopter response, 
                expert medical teams, and unwavering commitment to traveler safety.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-4">
              <Link 
                href="/contact" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Emergency Contact
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Our Services
              </Link>
            </div>

            {/* Emergency Alert */}
            <div className="bg-red-600/90 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto animate-pulse">
              <div className="flex items-center justify-center space-x-2">
                <FaPhone className="text-white" />
                <span className="font-semibold">Emergency Hotline: +977 1234 5678</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Live Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-gray-400 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Real-time statistics of our rescue operations across the Himalayas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <FaHelicopter className="text-4xl mx-auto mb-4 text-green-300 group-hover:text-white transition-colors" />
                <div className="text-4xl md:text-5xl font-bold mb-2">{stats.totalRescues.toLocaleString()}</div>
                <div className="text-green-200 font-medium">Total Rescues</div>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <FaHeart className="text-4xl mx-auto mb-4 text-red-300 group-hover:text-white transition-colors" />
                <div className="text-4xl md:text-5xl font-bold mb-2">{stats.livesSaved.toLocaleString()}</div>
                <div className="text-green-200 font-medium">Lives Saved</div>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <FaMountain className="text-4xl mx-auto mb-4 text-blue-300 group-hover:text-white transition-colors" />
                <div className="text-4xl md:text-5xl font-bold mb-2">{stats.helicoptersDeployed}</div>
                <div className="text-green-200 font-medium">Helicopters Active</div>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <FaClock className="text-4xl mx-auto mb-4 text-yellow-300 group-hover:text-white transition-colors" />
                <div className="text-4xl md:text-5xl font-bold mb-2">{stats.responseTime}</div>
                <div className="text-green-200 font-medium">Avg Response (min)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Rescue Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive emergency response services for travelers in distress across Nepal&apos;s challenging terrain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Medical Evacuation */}
            <div className="group bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-red-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaUserMd className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Medical Evacuation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Rapid medical evacuation from remote mountain areas with trained paramedics, 
                oxygen support, and specialized equipment for altitude-related emergencies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>Altitude sickness treatment</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>Trauma and injury care</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>Emergency oxygen delivery</li>
              </ul>
            </div>

            {/* Mountain Rescue */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaMountain className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mountain Rescue</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Expert mountain rescue operations for stranded climbers and trekkers, 
                including technical rope work, crevasse rescue, and extreme weather operations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Technical climbing rescue</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Crevasse extraction</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Storm evacuation</li>
              </ul>
            </div>

            {/* Search & Rescue */}
            <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaShieldAlt className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Search & Rescue</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive search operations using advanced technology, local guides, 
                and coordinated efforts to locate missing travelers in vast mountain regions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Drone-assisted search</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Local guide coordination</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Satellite communication</li>
              </ul>
            </div>

            {/* Emergency Evacuation */}
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaHelicopter className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Evacuation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Immediate evacuation services from accommodation, camps, and remote locations 
                with weather-resistant helicopters and experienced pilots.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>24/7 availability</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>Weather monitoring</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>Insurance coordination</li>
              </ul>
            </div>

            {/* Natural Disaster Response */}
            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaShieldAlt className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Disaster Response</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Specialized response to natural disasters including avalanches, landslides, 
                floods, and earthquakes with coordinated relief efforts.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>Avalanche rescue</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>Flood evacuation</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>Earthquake response</li>
              </ul>
            </div>

            {/* Helicopter Tours */}
            <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaHelicopter className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Helicopter Tours</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Breathtaking helicopter tours across the Himalayas with experienced pilots, 
                offering unique perspectives of Everest, Annapurna, and Langtang regions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>Everest base camp tours</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>Photography packages</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>Private charters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* how it works */}
      <HowItWorks/>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-gray-400 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Ready to help or need assistance? Contact us 24/7 for emergency services or general inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Emergency Hotline</h3>
                  <p className="text-gray-600">+977 1234 5678</p>
                  <p className="text-sm text-gray-50">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-gray-600">Kathmandu, Nepal</p>
                  <p className="text-sm text-gray-50">Base Camp Trip Pvt. Ltd.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <FaClock className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Response Time</h3>
                  <p className="text-gray-600">Average 15 minutes</p>
                  <p className="text-sm text-gray-50">From call to deployment</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl">
                    Your message has been sent successfully! We&apos;ll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl">
                    Failed to send message. Please try again later.
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-green-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-green-500"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-green-500"
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-green-500 resize-none"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* map */}
      <MapCoverage/>

      {/* FAQ */}
      <FAQS/>


      {/* Backend Message Display */}
      {/* {message && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg z-50">
          <p className="text-sm">Backend: {message}</p>
        </div>
      )} */}
    </div>
    </>
  );
}
