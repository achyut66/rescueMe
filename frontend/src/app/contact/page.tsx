"use client"; // Required if using hooks like useState or useEffect
import ContactUs from "@/components/ContactUs";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    document.title = "BaseCamp Trip | Contact Us";
  }, []);
  return (
    <div style={{ textAlign: "center"}}>
      <ContactUs/>
    </div>
  );
}
