// import type { Metadata } from "next";
"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import WhatsAppButton from "@/components/Whatsapp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DragUpButton from "@/components/Dragger";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  useEffect(() => {
    document.title = "BaseCamp Trip | Home";
  }, []);
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
          <div className="px-6 lg:px-[80px]">
          <main>{children}</main>
          </div>
        <Footer />
        <WhatsAppButton />
        <DragUpButton/>
      </body>
    </html>
  );
}
