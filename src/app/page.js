"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Navbar */}
      <Navbar />

      {/* Background Image Section */}
      <div
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/images/background-home-desktop.jpg')" }}
      >
        {/* Form Overlay */}
        <div className="p-6 bg-white text-black rounded-lg shadow-lg w-full max-w-lg">
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
            <Button type="submit" className="w-full bg-black text-white">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
