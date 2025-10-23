/**
 * Example: React App Usage
 *
 * Basic usage of AnimatedMasonryBackground in a React application
 */

import React from "react";
import AnimatedMasonryBackground, {
  MasonryImage,
} from "react-animated-bg-masonry";

// Custom images (optional)
const customImages: MasonryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
    alt: "Abstract gradient background",
    aspectRatio: "16:9",
    width: 300,
  },
  {
    url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1",
    alt: "Modern architecture",
    aspectRatio: "4:3",
    width: 250,
  },
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    alt: "Mountain landscape",
    aspectRatio: "3:2",
    width: 350,
  },
  {
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    alt: "Space and stars",
    aspectRatio: "1:1",
    width: 280,
  },
  {
    url: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d",
    alt: "Colorful abstract art",
    aspectRatio: "9:16",
    width: 200,
  },
];

function App() {
  return (
    <div className="min-h-screen">
      {/* Animated Background */}
      <AnimatedMasonryBackground
        images={customImages}
        animationSpeed={120}
        rotationAngle={40}
        gap={30}
        gradientFrom="from-purple-50"
        gradientTo="to-blue-50"
        enableHoverEffects={true}
      />

      {/* Your Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-center mb-8">
            Welcome to My App
          </h1>
          <p className="text-xl text-center text-gray-600">
            Beautiful animated masonry background
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
