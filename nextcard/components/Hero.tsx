"use client";

import { useEffect, useState } from "react";

function getTimeLeft(targetHoursFromNow: number) {
  const target = Date.now() + targetHoursFromNow * 60 * 60 * 1000;
  const diff = Math.max(0, target - Date.now());
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { hours, minutes, seconds };
}

export default function Hero() {
  const [time, setTime] = useState(() => getTimeLeft(6));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <section className="bg-ink">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14 grid sm:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-brand font-semibold text-sm mb-2 tracking-wide">
            Today only
          </p>
          <h1 className="font-display font-800 text-4xl sm:text-5xl text-cream leading-tight">
            Up to 60% off on daily essentials
          </h1>
          <p className="text-cream/70 mt-4 text-sm sm:text-base max-w-md">
            Electronics, fashion and home goods, delivered to your door across
            the country. New deals drop every day.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-cream/70 text-sm">Deal ends in</span>
            <div className="flex gap-1.5">
              {[time.hours, time.minutes, time.seconds].map((unit, i) => (
                <span
                  key={i}
                  className="bg-brand text-cream font-display font-700 text-sm rounded px-2 py-1 min-w-[2.25rem] text-center"
                >
                  {pad(unit)}
                </span>
              ))}
            </div>
          </div>

          <button className="mt-7 bg-brand text-cream font-semibold px-6 py-3 rounded-card hover:bg-brand-dark transition-colors">
            Shop the sale
          </button>
        </div>

        <div className="hidden sm:block">
          <div className="bg-brand-light rounded-card aspect-square flex items-center justify-center">
            <span className="font-display font-800 text-brand text-6xl">
              60%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
