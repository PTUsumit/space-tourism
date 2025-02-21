"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CalendarComponent from "@/components/CalendarComponent";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Page() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = window.innerHeight * 0.7; // Trigger after 70% scrolling
      if (scrollPosition > triggerPoint) {
        setShowContent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      {/* Navbar */}
      <Navbar />

      {/* Background Section */}
      <div 
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/background-home-desktop.jpg')" }}
      >
        <h1 className="text-5xl font-bold text-white text-center drop-shadow-lg">
          Welcome to Our Page
        </h1>
      </div>

      {/* Scroll Section */}
      <div className="h-[120vh] bg-gray-900"></div> {/* Adds scroll space */}

      {/* Sliding Content (Single Form, No Duplicates) */}
      {showContent && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black text-white p-6 transition-all duration-700 opacity-100 translate-y-0"
        >
          <div className="p-6 bg-white text-black rounded-lg shadow-lg w-full max-w-lg z-10">
            <h2 className="text-2xl font-semibold mb-4 text-center">Book Your Space Trip</h2>
            <form className="space-y-4">
              <div>
                <Label>Full Name</Label>
                <Input type="text" placeholder="Enter your name" />
              </div>
              <div>
                <Label>Email Address</Label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label>Travel Date</Label>
                <Input type="text" value="February 22nd, 2025" readOnly />
              </div>
              <div>
                <Label>Message (Optional)</Label>
                <Input type="text" placeholder="Any special requests?" />
              </div>
              <Button type="submit" className="w-full bg-black text-white">Submit</Button>
            </form>
          </div>
        </div>
      )}

      {/* Extra space to enable scrolling */}
      <div className="h-[50vh] bg-gray-900"></div>
    </div>
  );
}
