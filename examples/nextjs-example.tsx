/**
 * Example: Next.js Page Usage
 *
 * Usage of AnimatedMasonryBackground in a Next.js application
 * Works with both App Router and Pages Router
 */

"use client"; // Required for Next.js App Router

import React from "react";
import AnimatedMasonryBackground, {
  MasonryImage,
} from "react-animated-bg-masonry/next";

const images: MasonryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
    alt: "Abstract gradient",
    aspectRatio: "1:1",
  },
  {
    url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1",
    alt: "Architecture",
    aspectRatio: "16:9",
  },
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    alt: "Mountain",
    aspectRatio: "3:2",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Animated Background with Next.js Image optimization */}
      <AnimatedMasonryBackground images={images} animationSpeed={90} />

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">Next.js App</h1>
          <p className="text-xl text-gray-600">
            With Animated Masonry Background
          </p>
        </div>
      </div>
    </main>
  );
}
