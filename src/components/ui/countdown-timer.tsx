"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  // Pad single digits with a leading zero (e.g., "5" -> "05")
  const formattedValue = value < 10 ? `0${value}` : value;

  return (
    <div className="flex flex-col items-center">
      <div 
        className={cn(
          "relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-2xl",
          "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl", // Glassmorphism container
          "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/10 before:to-transparent before:opacity-50" // Shine effect
        )}
      >
        <span className="text-3xl sm:text-4xl font-black tracking-tight text-foreground bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text">
          {formattedValue}
        </span>
      </div>
      <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
        {label}
      </span>
    </div>
  );
}