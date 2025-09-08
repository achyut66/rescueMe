"use client";

import React, { useEffect } from "react";
import Image from "next/image";

type ContentPair = {
  text: string;
  image: { src: string; alt: string };
};

const contentPairs: ContentPair[] = [
  {
    text: "Heli Rescue Nepal is dedicated to ensuring the safety of trekkers, climbers, and local communities in the Himalayan region. Our team of highly trained pilots, paramedics, and rescue specialists operate around the clock to provide rapid emergency response, including medical evacuation, search and rescue, and natural disaster support.",
    image: { src: "/menu/heli.jpeg", alt: "Helicopter Rescue" }
  },
  {
    text: "With extensive knowledge of the challenging Himalayan terrain, we utilize advanced helicopters, medical equipment, and navigation technology to reach even the most remote locations. Our mission is to reduce response times, improve patient outcomes, and offer reliable rescue solutions for all emergencies in Nepal’s mountains.",
    image: { src: "/menu/eva3.jpg", alt: "Rescue Team" }
  },
  {
    text: "Safety, efficiency, and compassion drive our operations. Through collaboration with local authorities, trekking agencies, and international organizations, Heli Rescue Nepal ensures that every emergency is handled professionally and every life is valued.",
    image: { src: "/menu/eva1.jpg", alt: "Medical Evacuation" }
  }
];

export default function AboutUs() {
  useEffect(() => {
    document.title = "BaseCamp Trip | About Us";
  }, []);

  return (
    <section className="py-24 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            About Heli Rescue Nepal
          </h2>
          <p className="text-xl md:text-xl max-w-3xl mx-auto">
            Providing emergency evacuation, mountain rescue, and MedEvac services across the Himalayas. Our mission is to save lives through rapid response, skilled professionals, and state-of-the-art equipment.
          </p>
        </div>

        {/* Zig-Zag Content */}
        <div className="space-y-16">
          {contentPairs.map((pair, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="lg:w-1/2 space-y-6">
                <p className="text-gray-900 text-lg">{pair.text}</p>
              </div>

              {/* Image */}
              <div className="lg:w-1/2">
                <Image
                  src={pair.image.src}
                  alt={pair.image.alt}
                  width={400}
                  height={250}
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mission / Values */}
        <div className="mt-20 text-center space-y-6">
          <h3 className="text-3xl font-bold">Our Mission</h3>
          <p className="max-w-3xl mx-auto text-lg">
            To provide rapid and reliable helicopter rescue services across Nepal, ensuring the safety of adventurers, locals, and communities in remote Himalayan regions. We strive to reduce emergency response times, improve medical outcomes, and operate with the highest standards of professionalism and care.
          </p>
        </div>
      </div>
    </section>
  );
}
