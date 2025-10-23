/**
 * Example: Advanced Custom Configuration
 *
 * Shows all available customization options
 */

"use client";

import React from "react";
import AnimatedMasonryBackground, {
  MasonryImage,
} from "react-animated-bg-masonry";

// Custom high-quality images with various aspect ratios
const customImages: MasonryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
    alt: "Abstract blue gradient",
    aspectRatio: "21:9",
    width: 400,
  },
  {
    url: "https://images.unsplash.com/photo-1557683316-973673baf926",
    alt: "Gradient mesh",
    aspectRatio: "1:1",
    width: 280,
  },
  {
    url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853",
    alt: "Colorful background",
    aspectRatio: "4:3",
    width: 320,
  },
  {
    url: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead",
    alt: "Purple abstract",
    aspectRatio: "16:9",
    width: 350,
  },
  {
    url: "https://images.unsplash.com/photo-1557682250-33bd709cbe85",
    alt: "Orange gradient",
    aspectRatio: "3:4",
    width: 250,
  },
  {
    url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
    alt: "Blue wave",
    aspectRatio: "2:3",
    width: 300,
  },
];

export default function CustomConfigExample() {
  return (
    <div className="min-h-screen">
      <AnimatedMasonryBackground
        // Image configuration
        images={customImages}
        // Animation settings
        animationSpeed={90} // Faster animation (90 seconds)
        fadeInDuration={2} // Longer fade-in (2 seconds)
        // Layout settings
        rotationAngle={45} // 45-degree rotation
        gap={50} // Larger gap between tiles
        defaultTileWidth={300} // Larger default width
        responsiveColumns={[1, 2, 3]} // Fewer columns on mobile
        // Styling
        zIndex={-5} // Higher z-index
        gradientFrom="from-pink-50" // Pink gradient
        gradientTo="to-orange-50" // Orange gradient
        className="custom-background" // Custom CSS class
        // Features
        enableHoverEffects={true} // Enable hover animations
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
            Custom Configuration
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            This example demonstrates all available customization options for
            the AnimatedMasonryBackground component.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div>✅ Custom images with varied aspect ratios</div>
            <div>✅ Fast 90-second animation</div>
            <div>✅ 45-degree rotation angle</div>
            <div>✅ Pink to orange gradient</div>
            <div>✅ Large 50px gaps</div>
            <div>✅ Custom responsive columns</div>
            <div>✅ Hover effects enabled</div>
            <div>✅ 2-second fade duration</div>
          </div>
        </div>
      </div>
    </div>
  );
}
