"use client";
import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  date: z.string(),
  message: z.string().optional(),
});

export default function BookingForm({ selectedDate }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", date: selectedDate, message: "" },
  });

  function onSubmit(data) {
    console.log("Form Data:", data);
    alert("Your space travel booking request has been submitted!");
  }

  return (
    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-[400px] bg-white p-6 rounded-lg shadow-lg text-black">
      <h2 className="text-2xl font-bold mb-4 text-center">Book Your Space Trip</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Enter your name" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input type="email" placeholder="Enter your email" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="date" render={({ field }) => (
            <FormItem><FormLabel>Travel Date</FormLabel><FormControl><Input type="text" disabled value={selectedDate} {...field} /></FormControl></FormItem>
          )} />
          <FormField control={form.control} name="message" render={({ field }) => (
            <FormItem><FormLabel>Message (Optional)</FormLabel><FormControl><Textarea placeholder="Any special requests?" {...field} /></FormControl></FormItem>
          )} />
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
