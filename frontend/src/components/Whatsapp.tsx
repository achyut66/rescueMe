// SocialStack.tsx
"use client";
import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

type SocialStackProps = {
  whatsappNumber?: string;
  whatsappMessage?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  email?: string;
};

const SocialStack: React.FC<SocialStackProps> = ({
  whatsappNumber = "9779861023479",
  whatsappMessage,
  facebookUrl = "#",
  instagramUrl = "#",
  email = "example@email.com",
}) => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  const handleWhatsApp = () => {
    const encodedMessage = whatsappMessage ? encodeURIComponent(whatsappMessage) : "";
    const url = `https://wa.me/${whatsappNumber}${encodedMessage ? `?text=${encodedMessage}` : ""}`;
    openLink(url);
  };

  const socials = [
    { icon: <FaWhatsapp />, name: "WhatsApp", action: handleWhatsApp, color: "text-green-500" },
    { icon: <FaFacebookF />, name: "Facebook", action: () => openLink(facebookUrl), color: "text-blue-600" },
    { icon: <FaInstagram />, name: "Instagram", action: () => openLink(instagramUrl), color: "text-pink-500" },
    { icon: <FaEnvelope />, name: "Email", action: () => openLink(`mailto:${email}`), color: "text-gray-800" },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
      {socials.map((social) => (
        <div key={social.name} className="group relative">
          <button
            onClick={social.action}
            className={`flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-10 backdrop-blur-sm shadow-md hover:scale-120 transition-transform duration-300`}
          >
            {React.cloneElement(social.icon, { className: `text-2xl ${social.color}` })}
          </button>

          {/* Tooltip */}
          <span className="absolute left-16 bottom-1/2 translate-y-1/2 px-3 py-1 text-sm text-white bg-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {social.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SocialStack;
