// MapCoverage.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// ✅ TypeScript-safe default icon
const DefaultIcon = new L.Icon({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Apply default icon globally
L.Marker.prototype.options.icon = DefaultIcon;

// Dynamic imports to prevent SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);
const Circle = dynamic(
  () => import("react-leaflet").then((mod) => mod.Circle),
  { ssr: false }
);

// Coverage area type
interface CoverageArea {
  name: string;
  position: [number, number];
  radius: number; // meters
}

// Coverage areas
const coverageAreas: CoverageArea[] = [
  { name: "Kathmandu Base", position: [27.7172, 85.3240], radius: 50000 },
  { name: "Pokhara Base", position: [28.2096, 83.9856], radius: 40000 },
  { name: "Everest Region", position: [27.9881, 86.9250], radius: 60000 },
];

const MapCoverage: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-5xl font-bold text-gray-800 mb-6">
          Our Coverage Areas
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          We provide helicopter rescue coverage across key regions in Nepal,
          including remote and high-altitude areas.
        </p>

        <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
          <MapContainer
            center={[28.3949, 84.1240]} // center of Nepal
            zoom={7}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {coverageAreas.map((area, index) => (
              <React.Fragment key={index}>
                <Marker position={area.position}>
                  <Popup>{area.name}</Popup>
                </Marker>
                <Circle
                  center={area.position}
                  radius={area.radius}
                  pathOptions={{
                    color: "#3b82f6",
                    fillColor: "#3b82f6",
                    fillOpacity: 0.2,
                  }}
                />
              </React.Fragment>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default MapCoverage;
