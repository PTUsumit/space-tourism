"use client";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import BookingForm from "./BookingForm";

export default function CalendarComponent() {
  const [date, setDate] = React.useState(new Date());
  const formattedDate = date ? format(date, "PPP") : "Pick a Date";

  return (
    <>
      <div className="absolute bottom-24 left-24 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-60 text-lg">{formattedDate}</Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-2 bg-white text-black rounded-lg shadow-lg">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
      </div>
      <BookingForm selectedDate={formattedDate} />
    </>
  );
}
