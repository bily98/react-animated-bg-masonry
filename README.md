# React Animated Masonry Background

A beautiful animated masonry background component for React and Next.js with GSAP-powered smooth animations. Perfect for hero sections, login pages, and modern web applications.

![npm version](https://img.shields.io/npm/v/react-animated-bg-masonry)
![license](https://img.shields.io/npm/l/react-animated-bg-masonry)

## ✨ Features

- 🎨 **Customizable**: Full control over images, speed, rotation, colors, and layout
- 📱 **Responsive**: Automatic column adjustment for mobile, tablet, and desktop
- ⚡ **Performance**: GPU-accelerated GSAP animations for smooth 60fps playback
- 🎯 **TypeScript**: Full type definitions included
- 🖼️ **Flexible Images**: Support for any image size with custom aspect ratios
- 🔧 **Framework Agnostic**: Works with React and Next.js
- 🎭 **Modern Design**: Gradient overlays, shadows, and hover effects
- ♿ **Accessible**: Proper ARIA labels and semantic HTML

## 📦 Installation

```bash
npm install react-animated-bg-masonry gsap
# or
yarn add react-animated-bg-masonry gsap
# or
pnpm add react-animated-bg-masonry gsap
```

**Note**: `gsap` is a peer dependency and must be installed separately.

For Next.js projects, you'll also need:

```bash
npm install next
```

## 🚀 Quick Start

### Basic Usage (React)

```tsx
import AnimatedMasonryBackground from "react-animated-bg-masonry";

function App() {
  return (
    <div>
      <AnimatedMasonryBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1>Your Content Here</h1>
      </div>
    </div>
  );
}
```

### Basic Usage (Next.js)

```tsx
"use client"; // Required for Next.js App Router

import AnimatedMasonryBackground from "react-animated-bg-masonry";

export default function HomePage() {
  return (
    <div>
      <AnimatedMasonryBackground useNextImage />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1>Your Content Here</h1>
      </div>
    </div>
  );
}
```

### Custom Images

```tsx
import AnimatedMasonryBackground, {
  MasonryImage,
} from "react-animated-bg-masonry";

const myImages: MasonryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
    alt: "Abstract gradient",
    aspectRatio: "16:9",
    width: 300,
  },
  {
    url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1",
    alt: "Architecture",
    aspectRatio: "4:3",
  },
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    alt: "Mountain",
    aspectRatio: "1:1",
    width: 400,
  },
];

function App() {
  return (
    <AnimatedMasonryBackground
      images={myImages}
      animationSpeed={90}
      rotationAngle={45}
      gap={40}
    />
  );
}
```

## 📖 API Reference

### Props

| Prop                 | Type                       | Default            | Description                         |
| -------------------- | -------------------------- | ------------------ | ----------------------------------- |
| `images`             | `MasonryImage[]`           | Default set        | Array of images to display          |
| `animationSpeed`     | `number`                   | `120`              | Animation cycle duration in seconds |
| `rotationAngle`      | `number`                   | `40`               | Container rotation angle in degrees |
| `gap`                | `number`                   | `30`               | Space between tiles in pixels       |
| `defaultTileWidth`   | `number`                   | `250`              | Default tile width in pixels        |
| `zIndex`             | `number`                   | `-10`              | CSS z-index for the background      |
| `className`          | `string`                   | `''`               | Additional CSS classes              |
| `gradientFrom`       | `string`                   | `'from-purple-50'` | Tailwind gradient start color       |
| `gradientTo`         | `string`                   | `'to-blue-50'`     | Tailwind gradient end color         |
| `enableHoverEffects` | `boolean`                  | `true`             | Enable/disable hover animations     |
| `fadeInDuration`     | `number`                   | `1`                | Fade-in duration in seconds         |
| `useNextImage`       | `boolean`                  | Auto-detect        | Force Next.js Image component       |
| `ImageComponent`     | `React.ComponentType`      | Auto               | Custom image component              |
| `responsiveColumns`  | `[number, number, number]` | `[2, 3, 4]`        | Columns for mobile/tablet/desktop   |

### MasonryImage Type

```typescript
interface MasonryImage {
  url: string; // Image URL (required)
  alt: string; // Alt text for accessibility (required)
  aspectRatio?: string; // Format: "16:9", "4:3", "1:1", etc. (default: "4:3")
  width?: number; // Tile width in pixels (default: 250)
}
```

## 🎨 Examples

### Fast Animation

```tsx
<AnimatedMasonryBackground animationSpeed={60} />
```

### Custom Colors

```tsx
<AnimatedMasonryBackground
  gradientFrom="from-pink-50"
  gradientTo="to-orange-50"
/>
```

### Custom Layout

```tsx
<AnimatedMasonryBackground
  gap={50}
  defaultTileWidth={300}
  responsiveColumns={[1, 2, 3]}
  rotationAngle={30}
/>
```

### Disable Hover Effects

```tsx
<AnimatedMasonryBackground enableHoverEffects={false} />
```

### Custom Image Component

```tsx
import CustomImage from "./CustomImage";

<AnimatedMasonryBackground ImageComponent={CustomImage} />;
```

## 🎯 Common Use Cases

### Login Page Background

```tsx
"use client";

import AnimatedMasonryBackground from "react-animated-bg-masonry";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <AnimatedMasonryBackground
        animationSpeed={120}
        gradientFrom="from-blue-50"
        gradientTo="to-indigo-50"
      />

      <div className="relative z-10 bg-white p-8 rounded-lg shadow-xl">
        <h1>Welcome Back</h1>
        <form>{/* Your login form */}</form>
      </div>
    </div>
  );
}
```

### Hero Section

```tsx
<section className="relative min-h-screen">
  <AnimatedMasonryBackground animationSpeed={90} fadeInDuration={2} />

  <div className="relative z-10 container mx-auto">
    <h1 className="text-6xl font-bold">Welcome</h1>
    <p className="text-xl">Your amazing content</p>
  </div>
</section>
```

## 🎭 Styling

The component uses Tailwind CSS classes by default, but you can customize with regular CSS:

```tsx
<AnimatedMasonryBackground className="my-custom-background" />
```

```css
.my-custom-background {
  filter: blur(2px);
  opacity: 0.8;
}
```

## ⚙️ Performance Tips

1. **Optimize images**: Use compressed images (WebP, optimized JPEGs)
2. **Limit image count**: 10-20 images work best
3. **Use appropriate sizes**: Keep tile widths reasonable (200-400px)
4. **Aspect ratios**: Provide accurate aspect ratios for better layout
5. **CDN**: Host images on a CDN for faster loading

## 🔧 Troubleshooting

### Images not showing

- Ensure `gsap` is installed: `npm install gsap`
- Check image URLs are accessible
- Verify CORS settings for external images

### Animations laggy

- Reduce number of images
- Increase `animationSpeed` value
- Disable `enableHoverEffects`
- Optimize image file sizes

### Next.js "use client" error

Add `'use client'` directive at the top of your component file:

```tsx
"use client";

import AnimatedMasonryBackground from "react-animated-bg-masonry";
```

### TypeScript errors

Ensure you're using TypeScript 5.0+ and have proper type definitions:

```bash
npm install --save-dev @types/react @types/react-dom
```

## 📝 License

MIT © [Your Name]

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💖 Support

If you find this package helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📖 Improving documentation

## 🔗 Links

- [GitHub Repository](#)
- [NPM Package](#)
- [Live Demo](#)
- [Report Bug](#)
- [Request Feature](#)

---

Made with ❤️ for the React community
