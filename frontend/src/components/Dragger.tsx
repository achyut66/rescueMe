// DragUpButton.tsx
"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const DragUpButton: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300); // show button after scrolling 300px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 bg-pink-800 text-white rounded-full shadow-lg flex items-center justify-center transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      } hover:bg-gray-700`}
      title="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default DragUpButton;
