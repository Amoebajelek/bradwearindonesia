"use client";

import Image from "next/image";
import Hero from "@/public/HeroBanner.jpg";

export default function HeroBanner() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
      {/* Background Image */}
      <Image
        src={Hero}
        alt="Professional Uniform"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center px-4">
        <h2 className="text-white text-xl md:text-3xl font-bold">
          Experience Professional Uniform
        </h2>
        <p className="text-gray-200 text-sm md:text-base mt-2 max-w-2xl">
          Discover uniforms designed with precision, combining durability,
          comfort, and elegance to represent your company&apos;s identity with
          excellence.
        </p>
      </div>
    </div>
  );
}
