# Usage Guide - react-animated-bg-masonry

Comprehensive guide on how to use the react-animated-bg-masonry package in your projects.

## Table of Contents

1. [Installation](#installation)
2. [Quick Start](#quick-start)
3. [Props Reference](#props-reference)
4. [Common Patterns](#common-patterns)
5. [TypeScript Support](#typescript-support)
6. [Styling & Customization](#styling--customization)
7. [Performance Tips](#performance-tips)
8. [Troubleshooting](#troubleshooting)

## Installation

### Install the Package

```bash
# Using npm
npm install react-animated-bg-masonry gsap

# Using yarn
yarn add react-animated-bg-masonry gsap

# Using pnpm
pnpm add react-animated-bg-masonry gsap
```

### Additional Dependencies

For **Next.js projects**, you'll also need:

```bash
npm install next
```

For **Tailwind CSS** (recommended for best styling):

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Quick Start

### React Application

```tsx
// src/App.tsx
import React from "react";
import AnimatedMasonryBackground from "react-animated-bg-masonry";

function App() {
  return (
    <div className="min-h-screen">
      <AnimatedMasonryBackground />

      <div style={{ position: "relative", zIndex: 1 }}>
        <h1>Your Content Here</h1>
      </div>
    </div>
  );
}

export default App;
```

### Next.js Application (App Router)

```tsx
// app/page.tsx
"use client";

import AnimatedMasonryBackground from "react-animated-bg-masonry";

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedMasonryBackground useNextImage />

      <div className="relative z-10">
        <h1>Your Content Here</h1>
      </div>
    </main>
  );
}
```

### Next.js (Pages Router)

```tsx
// pages/index.tsx
import AnimatedMasonryBackground from "react-animated-bg-masonry";

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedMasonryBackground useNextImage />

      <div className="relative z-10">
        <h1>Your Content Here</h1>
      </div>
    </div>
  );
}
```

## Props Reference

### Complete Props List

```tsx
interface AnimatedMasonryBackgroundProps {
  images?: MasonryImage[];
  animationSpeed?: number;
  rotationAngle?: number;
  gap?: number;
  defaultTileWidth?: number;
  zIndex?: number;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
  enableHoverEffects?: boolean;
  fadeInDuration?: number;
  useNextImage?: boolean;
  ImageComponent?: React.ComponentType<any>;
  responsiveColumns?: [number, number, number];
}
```

### Detailed Props

#### `images` (optional)

- **Type**: `MasonryImage[]`
- **Default**: Default image set
- **Description**: Array of images to display

```tsx
const images = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Comparison_of_display_aspect_ratios.png/330px-Comparison_of_display_aspect_ratios.png",
    alt: "Description",
    aspectRatio: "16:9",
    width: 300,
  },
];
```

#### `animationSpeed` (optional)

- **Type**: `number`
- **Default**: `120`
- **Description**: Animation duration in seconds
- **Examples**:
  - `60` - Fast animation
  - `120` - Medium (default)
  - `180` - Slow, calm animation

#### `rotationAngle` (optional)

- **Type**: `number`
- **Default**: `40`
- **Description**: Tile rotation angle in degrees
- **Range**: `0` to `360`

#### `gap` (optional)

- **Type**: `number`
- **Default**: `30`
- **Description**: Space between tiles in pixels

#### `defaultTileWidth` (optional)

- **Type**: `number`
- **Default**: `250`
- **Description**: Default tile width in pixels

#### `zIndex` (optional)

- **Type**: `number`
- **Default**: `-10`
- **Description**: CSS z-index for layering

#### `className` (optional)

- **Type**: `string`
- **Default**: `''`
- **Description**: Additional CSS classes

#### `gradientFrom` / `gradientTo` (optional)

- **Type**: `string`
- **Default**: `'from-purple-50'` / `'to-blue-50'`
- **Description**: Tailwind CSS gradient classes

#### `enableHoverEffects` (optional)

- **Type**: `boolean`
- **Default**: `true`
- **Description**: Enable tile hover animations

#### `fadeInDuration` (optional)

- **Type**: `number`
- **Default**: `1`
- **Description**: Fade-in duration in seconds

#### `useNextImage` (optional)

- **Type**: `boolean`
- **Default**: Auto-detect
- **Description**: Use Next.js Image component

#### `responsiveColumns` (optional)

- **Type**: `[number, number, number]`
- **Default**: `[2, 3, 4]`
- **Description**: Columns for [mobile, tablet, desktop]

## Common Patterns

### Pattern 1: Custom Images

```tsx
import AnimatedMasonryBackground, {
  MasonryImage,
} from "react-animated-bg-masonry";

const myImages: MasonryImage[] = [
  {
    url: "/images/1.jpg",
    alt: "Image 1",
    aspectRatio: "16:9",
  },
  {
    url: "/images/2.jpg",
    alt: "Image 2",
    aspectRatio: "1:1",
    width: 350,
  },
];

<AnimatedMasonryBackground images={myImages} />;
```

### Pattern 2: Login Page

```tsx
<div className="min-h-screen flex items-center justify-center">
  <AnimatedMasonryBackground
    animationSpeed={120}
    gradientFrom="from-blue-50"
    gradientTo="to-indigo-50"
  />

  <div className="relative z-10 bg-white p-8 rounded-xl shadow-2xl">
    {/* Login form */}
  </div>
</div>
```

### Pattern 3: Hero Section

```tsx
<section className="relative min-h-screen">
  <AnimatedMasonryBackground animationSpeed={90} enableHoverEffects={false} />

  <div className="relative z-10 container mx-auto flex items-center h-screen">
    <div>
      <h1 className="text-6xl font-bold">Welcome</h1>
      <p className="text-xl">Subtitle here</p>
    </div>
  </div>
</section>
```

### Pattern 4: Custom Colors

```tsx
<AnimatedMasonryBackground
  gradientFrom="from-rose-50"
  gradientTo="from-amber-50"
  className="opacity-80"
/>
```

## TypeScript Support

The package includes full TypeScript definitions:

```tsx
import AnimatedMasonryBackground, {
  MasonryImage,
  AnimatedMasonryBackgroundProps,
} from "react-animated-bg-masonry";

// Type-safe image array
const images: MasonryImage[] = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/PAR-1to1.svg/1200px-PAR-1to1.svg.png",
    alt: "Description",
    aspectRatio: "16:9",
    width: 300,
  },
];

// Type-safe props
const props: AnimatedMasonryBackgroundProps = {
  images,
  animationSpeed: 90,
  rotationAngle: 45,
};

<AnimatedMasonryBackground {...props} />;
```

## Styling & Customization

### With Tailwind CSS

```tsx
<AnimatedMasonryBackground
  className="blur-sm opacity-70"
  gradientFrom="from-indigo-100"
  gradientTo="to-purple-100"
/>
```

### With Custom CSS

```tsx
<AnimatedMasonryBackground className="my-background" />
```

```css
.my-background {
  filter: brightness(0.9) saturate(1.2);
  opacity: 0.8;
}
```

### Layering Content

```tsx
<div className="relative">
  <AnimatedMasonryBackground zIndex={-10} />

  <div className="relative z-10">
    {/* Your content - will be above the background */}
  </div>

  <div className="relative z-20">{/* Even higher layer */}</div>
</div>
```

## Performance Tips

1. **Optimize Images**

   ```tsx
   // Use compressed images
   // WebP format recommended
   // Appropriate sizes (not too large)
   ```

2. **Limit Image Count**

   ```tsx
   // 10-20 images is optimal
   const images = myImages.slice(0, 15);
   ```

3. **Adjust Animation Speed**

   ```tsx
   // Slower = better performance
   <AnimatedMasonryBackground animationSpeed={180} />
   ```

4. **Disable Hover Effects**

   ```tsx
   <AnimatedMasonryBackground enableHoverEffects={false} />
   ```

5. **Use Appropriate Tile Sizes**
   ```tsx
   <AnimatedMasonryBackground defaultTileWidth={200} />
   ```

## Troubleshooting

### Images Not Showing

**Problem**: Background appears but no images visible

**Solutions**:

```tsx
// 1. Check GSAP is installed
npm install gsap

// 2. Verify image URLs are accessible
console.log(images);

// 3. Check z-index layering
<AnimatedMasonryBackground zIndex={-5} />
<div style={{ position: 'relative', zIndex: 1 }}>Content</div>
```

### Animations Laggy

**Problem**: Animation is stuttering or slow

**Solutions**:

```tsx
// 1. Reduce image count
images={images.slice(0, 10)}

// 2. Increase animation speed
animationSpeed={200}

// 3. Disable hover effects
enableHoverEffects={false}

// 4. Optimize image sizes
```

### Next.js "use client" Error

**Problem**: `Error: useState only works in Client Components`

**Solution**:

```tsx
"use client"; // Add this at the top of your file

import AnimatedMasonryBackground from "react-animated-bg-masonry";
```

### TypeScript Errors

**Problem**: Type errors with image props

**Solution**:

```tsx
import type { MasonryImage } from "react-animated-bg-masonry";

const images: MasonryImage[] = [
  {
    url: "string",
    alt: "string",
    aspectRatio: "16:9", // optional
    width: 300, // optional
  },
];
```

### CORS Errors

**Problem**: Images from external domains blocked

**Solutions**:

1. Use images from your own domain
2. Configure CORS on image server
3. Use a proxy service
4. Download and host images locally

## Need Help?

- 📖 [Full Documentation](./README.md)
- 🐛 [Report Issues](#)
- 💬 [Discussions](#)
- ✨ [Request Features](#)

---

Happy coding! 🎨
