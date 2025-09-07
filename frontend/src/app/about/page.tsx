"use client";

import React from "react";
import { useEffect } from "react";
import Image from "next/image";
// import Head from "next/head";


export default function AboutUs() {
  useEffect(() => {
    document.title = "BaseCamp Trip | About Us";
  }, []);
  return (
    <>
      {/* <Head>
        <title>BaseCamp Trip | About Us</title>
      </Head> */}
    <section className="py-24 bg-gradient-to-r from-gray-50 to-gray-80 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-gray-900">
            About Heli Rescue Nepal
          </h2>
          <p className="text-xl md:text-xl text-gray-900 max-w-3xl mx-auto">
            Providing emergency evacuation, mountain rescue, and MedEvac services across the Himalayas. Our mission is to save lives through rapid response, skilled professionals, and state-of-the-art equipment.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-gray-900 text-lg">
              Heli Rescue Nepal is dedicated to ensuring the safety of trekkers, climbers, and local communities in the Himalayan region. Our team of highly trained pilots, paramedics, and rescue specialists operate around the clock to provide rapid emergency response, including medical evacuation, search and rescue, and natural disaster support.
            </p>
            <p className="text-gray-900 text-lg">
              With extensive knowledge of the challenging Himalayan terrain, we utilize advanced helicopters, medical equipment, and navigation technology to reach even the most remote locations. Our mission is to reduce response times, improve patient outcomes, and offer reliable rescue solutions for all emergencies in Nepal’s mountains.
            </p>
            <p className="text-gray-900 text-lg">
              Safety, efficiency, and compassion drive our operations. Through collaboration with local authorities, trekking agencies, and international organizations, Heli Rescue Nepal ensures that every emergency is handled professionally and every life is valued.
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 gap-6">
            <Image
              src="/menu/heli.jpeg"
              width={200}
              height={100}
              alt="Helicopter Rescue"
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
              loading="lazy"
            />
            <Image
              src="/menu/eva3.jpg"
              width={200}
              height={100}
              alt="Rescue Team"
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
              loading="lazy"
            />
            <Image
              src="/menu/eva1.jpg"
              width={200}
              height={100}
              alt="Medical Evacuation"
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mission / Values */}
        <div className="mt-20 text-center space-y-6">
          <h3 className="text-3xl font-bold bg-clip-text text-gray-900">
            Our Mission
          </h3>
          <p className="text-gray-900 max-w-3xl mx-auto text-lg">
            To provide rapid and reliable helicopter rescue services across Nepal, ensuring the safety of adventurers, locals, and communities in remote Himalayan regions. We strive to reduce emergency response times, improve medical outcomes, and operate with the highest standards of professionalism and care.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
