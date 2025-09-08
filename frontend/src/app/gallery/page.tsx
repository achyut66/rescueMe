// Gallery.tsx
"use client";

import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";


type GalleryImage = {
  src: string;
  alt: string;
  desc: string[];
};

const images: GalleryImage[] = [
  {
    src: "/menu/1.webp",
    alt: "Helicopter Rescue in Himalayas",
    desc: [
      "This helicopter is part of a high-altitude rescue mission in the Himalayas, where climbers needed immediate evacuation due to harsh weather.",
      "The team demonstrates precision flying skills, navigating narrow mountain passes to ensure safety and timely assistance."
    ]
  },
  {
    src: "/menu/2.webp",
    alt: "Mountain Rescue Team in Action",
    desc: [
      "The rescue team prepares their gear and coordinates the mission before heading into the treacherous mountain terrain.",
      "Communication and teamwork are critical to ensure a smooth and safe rescue operation under extreme conditions."
    ]
  },
  {
    src: "/menu/3.jpeg",
    alt: "Emergency MedEvac Helicopter",
    desc: [
      "A rapid medical evacuation helicopter is ready to transport patients from remote areas to hospitals in record time.",
      "Equipped with life-saving medical equipment, the crew ensures continuous care during flight."
    ]
  },
  {
    src: "/menu/4.webp",
    alt: "Helicopter Landing in Valley",
    desc: [
      "Landing in narrow valleys requires precision and focus, as space is limited and terrain is unpredictable.",
      "The crew carefully positions the helicopter to avoid obstacles and ensure a safe touchdown."
    ]
  },
  {
    src: "/menu/5.jpg",
    alt: "Rescue Team Coordinating Mission",
    desc: [
      "Before every mission, the team coordinates logistics and evaluates potential hazards to optimize safety.",
      "This step is vital to successfully carry out operations in remote or dangerous locations."
    ]
  },
  {
    src: "/menu/eva1.jpg",
    alt: "Helicopter Over Snowy Peaks",
    desc: [
      "Flying over snow-covered peaks requires skill to manage altitude, wind, and visibility challenges.",
      "The team maintains constant communication to ensure the mission proceeds without incident."
    ]
  },
  {
    src: "/menu/eva2.jpg",
    alt: "Helicopter Approaching Mountain Ridge",
    desc: [
      "As the helicopter approaches a steep mountain ridge, careful navigation is required to avoid turbulence and sudden drops.",
      "The crew continuously monitors the environment, adjusting the flight path as needed for safety."
    ]
  },
  {
    src: "/menu/eva3.jpg",
    alt: "Helicopter Hovering in Cold Weather",
    desc: [
      "Hovering over climbers in cold weather demands precise control to maintain stability in high winds.",
      "This allows the team to safely pick up stranded individuals without endangering the mission."
    ]
  },
  {
    src: "/menu/guide1.webp",
    alt: "Heli Guide Team on Mission",
    desc: [
      "Guiding the helicopter to the correct landing spot requires expert local knowledge and teamwork.",
      "This ensures that every rescue operation is efficient and safe for both crew and rescued individuals."
    ]
  },
  {
    src: "/menu/guide2.webp",
    alt: "Rescue Team Landing Assistance",
    desc: [
      "The team assists the helicopter in landing safely, particularly in areas with limited visibility and difficult terrain.",
      "Their experience helps prevent accidents and ensures a smooth operation under pressure."
    ]
  },
  {
    src: "/menu/guide3.webp",
    alt: "Heli Team Preparing Gear",
    desc: [
      "Prior to every flight, the crew meticulously checks and prepares all equipment for the mission.",
      "This step is critical to ensure nothing is missed and the operation runs seamlessly."
    ]
  },
  {
    src: "/menu/heli1.jpeg",
    alt: "Helicopter Ready for Takeoff",
    desc: [
      "The helicopter is prepped and ready for a new mission, highlighting the importance of maintenance and readiness.",
      "Every mission starts with thorough checks to guarantee safety and efficiency throughout the flight."
    ]
  },
];

const spans = [
  { col: "col-span-2", row: "row-span-2" },
  { col: "col-span-2", row: "row-span-3" },
  { col: "col-span-1", row: "row-span-1" },
  { col: "col-span-1", row: "row-span-2" },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 md:px-8">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-10">
        Our Heli Rescue Gallery
      </h1>

      {/* Collage Grid */}
      <div className="grid grid-cols-4 grid-rows-6 gap-4">
  {(showAll ? images : images.slice(0, 5)).map((image, idx) => {
    const size = spans[idx % spans.length];
    return (
      <div
        key={idx}
        className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer ${size.col} ${size.row}`}
        onClick={() => setSelectedImage(image)}
      >
        <Image
        width={300}
        height={300}
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
          quality={100}
          sizes="100vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gray-400 bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300 flex flex-col items-center justify-center p-4 text-center">
          <p className="text-white font-semibold underline mb-2">{image.alt}</p>
          {image.desc.map((paragraph, idx) => (
            <p key={idx} className="text-white text-sm">{paragraph}</p>
          ))}
        </div>
      </div>
    );
  })}
</div>

{/* See More / See Less Button */}
<div className="flex justify-center mt-6">
  <button
    onClick={() => setShowAll(!showAll)}
    className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
  >
    {showAll ? "See Less" : "See More"}
  </button>
</div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          ></div>

          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 text-white text-3xl hover:text-orange-500 transition z-10"
            >
              <FaTimes />
            </button>
            <Image
                width={300}
                height={300}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg shadow-xl z-10"
              quality={100}
            />
            <p className="text-white text-center mt-4 underline text-lg z-10">{selectedImage.alt}</p>
            {selectedImage.desc.map((paragraph, idx) => (
              <p key={idx} className="text-white text-center mt-2 text-sm z-10">{paragraph}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
