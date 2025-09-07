"use client";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-2 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
            <Image alt= "company logo" src="/base.jpg" width={200} height={40} loading="lazy" />
        <div className="font-bold text-sans uppercase text-white mt-2">base Camp Trip pvt.ltd</div>
          <p className="text-gray-300 mt-4">
            Rescuing and assisting travelers with safe helicopter services. Available 24/7.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {/* <li><Link href="/" className="hover:text-green-500">Home</Link></li> */}
            <li><Link href="/about" className="hover:text-green-500">About</Link></li>
            <li><Link href="/services" className="hover:text-green-500">Services</Link></li>
            <li><Link href="/rescue" className="hover:text-green-500">Rescue</Link></li>
            <li><Link href="/contact" className="hover:text-green-500">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Phone: +977 1234 5678</li>
            <li>Email: info@basecampadventure.com</li>
            <li>Location: Kathmandu, Nepal</li>
          </ul>
        </div>

        {/* Social / Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 mb-4 text-gray-300">
            <a href="#"><FaFacebook className="hover:text-blue-600" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
            <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
            <a href="#"><FaYoutube className="hover:text-red-600" /></a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Base Camp Trip Adventure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
