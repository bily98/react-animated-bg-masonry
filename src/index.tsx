"use client";

import React, { useEffect, useRef, useState, CSSProperties } from "react";
import { gsap } from "gsap";

/**
 * Type definition for masonry images
 */
export interface MasonryImage {
  url: string;
  aspectRatio?: string; // e.g., "16:9", "4:3", "1:1" - defaults to "4:3"
  width?: number; // desired width in pixels - defaults to 250px
  alt: string;
}

interface MasonryTile {
  id: number;
  image: MasonryImage;
  rotation: number;
  row: number;
  column: number;
  initialX: number;
  initialY: number;
  element?: HTMLDivElement;
}

/**
 * Props for AnimatedMasonryBackground component
 */
export interface AnimatedMasonryBackgroundProps {
  /** Array of images to display in the masonry layout */
  images?: MasonryImage[];

  /** Animation speed in seconds (default: 120) */
  animationSpeed?: number;

  /** Container rotation angle in degrees (default: 40) */
  rotationAngle?: number;

  /** Gap between tiles in pixels (default: 30) */
  gap?: number;

  /** Default tile width in pixels (default: 250) */
  defaultTileWidth?: number;

  /** Z-index for the background (default: -10) */
  zIndex?: number;

  /** Additional CSS classes */
  className?: string;

  /** Background gradient colors (default: from-purple-50 to-blue-50) */
  gradientFrom?: string;
  gradientTo?: string;

  /** Enable/disable hover effects (default: true) */
  enableHoverEffects?: boolean;

  /** Fade in duration in seconds (default: 1) */
  fadeInDuration?: number;

  /** Custom Image component (optional) */
  ImageComponent?: React.ComponentType<any>;

  /** Number of columns for mobile/tablet/desktop (default: [2, 3, 4]) */
  responsiveColumns?: [number, number, number];
}

// Default images if none provided
const DEFAULT_IMAGES: MasonryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
    aspectRatio: "1:1",
    alt: "Abstract gradient background",
  },
  {
    url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1",
    aspectRatio: "16:9",
    alt: "Modern architecture",
  },
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    aspectRatio: "3:2",
    alt: "Mountain landscape",
  },
  {
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    aspectRatio: "4:3",
    alt: "Space and stars",
  },
  {
    url: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d",
    aspectRatio: "1:1",
    alt: "Colorful abstract art",
  },
];

/**
 * Standard HTML Image component wrapper
 */
const StandardImage: React.FC<{
  src: string;
  alt: string;
  style?: CSSProperties;
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}> = ({ src, alt, style, className, onError }) => (
  <img
    src={src}
    alt={alt}
    style={{
      ...style,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      position: "absolute",
      top: 0,
      left: 0,
    }}
    className={className}
    onError={onError}
    loading="lazy"
  />
);

/**
 * AnimatedMasonryBackground Component
 *
 * A beautiful animated masonry background with GSAP-powered smooth animations.
 * Perfect for hero sections, login pages, and modern web applications.
 *
 * Features:
 * - Customizable images, speed, rotation, and styling
 * - Responsive masonry layout
 * - GPU-accelerated smooth animations
 * - Support for both React and Next.js
 * - TypeScript support with full type definitions
 *
 * @example
 * ```tsx
 * import AnimatedMasonryBackground from 'react-animated-bg-masonry';
 *
 * // Basic usage with defaults
 * <AnimatedMasonryBackground />
 *
 * // Custom configuration
 * <AnimatedMasonryBackground
 *   images={myImages}
 *   animationSpeed={90}
 *   rotationAngle={45}
 *   gap={40}
 * />
 * ```
 */
export const AnimatedMasonryBackground: React.FC<
  AnimatedMasonryBackgroundProps
> = ({
  images = DEFAULT_IMAGES,
  animationSpeed = 120,
  rotationAngle = 40,
  gap = 30,
  defaultTileWidth = 250,
  zIndex = -10,
  className = "",
  gradientFrom = "from-purple-50",
  gradientTo = "to-blue-50",
  enableHoverEffects = true,
  fadeInDuration = 1,
  ImageComponent,
  responsiveColumns = [2, 3, 4],
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tilesRef = useRef<MasonryTile[]>([]);
  const [tiles, setTiles] = useState<MasonryTile[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Determine which Image component to use
  let FinalImageComponent: any = ImageComponent || StandardImage;

  // Responsive column calculation
  const getColumnCount = () => {
    if (typeof window === "undefined") return responsiveColumns[2];
    const width = window.innerWidth;
    if (width < 640) return responsiveColumns[0]; // Mobile
    if (width < 1024) return responsiveColumns[1]; // Tablet
    return responsiveColumns[2]; // Desktop
  };

  /**
   * Parse aspect ratio from string format
   */
  const parseAspectRatio = (aspectRatio?: string): number => {
    if (!aspectRatio) return 4 / 3;

    const parts = aspectRatio.split(":").map(Number);
    if (parts.length !== 2 || parts[0] <= 0 || parts[1] <= 0) {
      return 4 / 3;
    }

    return parts[0] / parts[1];
  };

  /**
   * Calculate masonry positioning for each tile
   */
  const calculateMasonryPositions = (columns: number): MasonryTile[] => {
    const tiles: MasonryTile[] = [];
    const columnHeights = new Array(columns).fill(0);
    const columnXPositions = new Array(columns)
      .fill(0)
      .map((_, i) => i * (defaultTileWidth + gap));

    images.forEach((image, index) => {
      const minHeight = Math.min(...columnHeights);
      const column = columnHeights.indexOf(minHeight);

      const tileWidth = image.width || defaultTileWidth;
      const aspectRatio = parseAspectRatio(image.aspectRatio);
      const tileHeight = Math.round(tileWidth / aspectRatio);

      const tile: MasonryTile = {
        id: index,
        image,
        rotation: rotationAngle,
        row: Math.floor(columnHeights[column] / 300),
        column,
        initialX: columnXPositions[column],
        initialY: columnHeights[column],
      };

      tiles.push(tile);
      columnHeights[column] += tileHeight + gap;
      columnXPositions[column] = Math.max(
        columnXPositions[column],
        tile.initialX + tileWidth + gap
      );
    });

    return tiles;
  };

  /**
   * Initialize GSAP animation
   */
  const initializeAnimation = () => {
    if (!containerRef.current || tilesRef.current.length === 0) return;

    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    const diagonalDistance = Math.sqrt(
      containerWidth ** 2 + containerHeight ** 2
    );
    const travelDistance = diagonalDistance * 1.5;
    const staggerTime = animationSpeed / tilesRef.current.length;

    tilesRef.current.forEach((tile, index) => {
      if (!tile.element) return;

      const delay = index * staggerTime;
      const startX = tile.initialX - travelDistance;
      const startY = tile.initialY - travelDistance;
      const endX = tile.initialX + travelDistance;
      const endY = tile.initialY + travelDistance;

      gsap.set(tile.element, {
        x: startX,
        y: startY,
        transformOrigin: "center center",
        force3D: true,
        willChange: "transform",
        opacity: 0,
      });

      gsap.to(tile.element, {
        x: endX,
        y: endY,
        opacity: 1,
        duration: animationSpeed,
        delay: delay,
        ease: "none",
        repeat: -1,
        repeatDelay: 0,
        onStart: () => {
          if (tile.element) {
            gsap.to(tile.element, {
              opacity: 1,
              duration: fadeInDuration,
              ease: "power2.out",
            });
          }
        },
        onRepeat: () => {
          if (tile.element) {
            gsap.set(tile.element, {
              x: startX,
              y: startY,
              opacity: 0,
              force3D: true,
            });
            gsap.to(tile.element, {
              opacity: 1,
              duration: fadeInDuration,
              ease: "power2.out",
            });
          }
        },
      });
    });
  };

  /**
   * Handle responsive layout changes
   */
  const handleResize = () => {
    const newColumns = getColumnCount();
    const newTiles = calculateMasonryPositions(newColumns);

    tilesRef.current = newTiles.map((newTile, index) => ({
      ...newTile,
      element: tilesRef.current[index]?.element,
    }));

    setTiles([...newTiles]);
    setTimeout(initializeAnimation, 100);
  };

  // Initialize component
  useEffect(() => {
    setIsMounted(true);

    const columns = getColumnCount();
    const initialTiles = calculateMasonryPositions(columns);
    tilesRef.current = initialTiles;
    setTiles(initialTiles);

    const animationTimer = setTimeout(() => {
      initializeAnimation();
    }, 100);

    const handleResizeEvent = () => handleResize();
    window.addEventListener("resize", handleResizeEvent);

    return () => {
      clearTimeout(animationTimer);
      gsap.killTweensOf(tilesRef.current.map((t) => t.element));
      window.removeEventListener("resize", handleResizeEvent);
    };
  }, [animationSpeed, images]);

  if (!isMounted) {
    return (
      <div
        className={`fixed inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo}`}
        style={{ zIndex }}
      />
    );
  }

  const isNextJSImage = FinalImageComponent !== StandardImage;

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex }}
      role="img"
      aria-label="Animated masonry background"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientFrom}/30 via-blue-50/20 ${gradientTo}/30`}
      />

      {tiles.map((tile, index) => {
        const aspectRatio = parseAspectRatio(tile.image.aspectRatio);
        const tileWidth = tile.image.width || defaultTileWidth;
        const tileHeight = Math.round(tileWidth / aspectRatio);

        return (
          <div
            key={tile.id}
            ref={(el) => {
              if (el) {
                tilesRef.current[index].element = el;
              }
            }}
            className="absolute will-change-transform"
            style={{
              left: "0px",
              top: "0px",
              width: `${tileWidth}px`,
              height: `${tileHeight}px`,
            }}
          >
            <div
              className={`relative w-full h-full ${
                enableHoverEffects ? "group" : ""
              }`}
              style={{
                transform: `rotate(${tile.rotation}deg)`,
                transformOrigin: "center center",
              }}
            >
              <div
                className={`relative w-full h-full overflow-hidden rounded-lg shadow-lg ${
                  enableHoverEffects
                    ? "transition-all duration-300 group-hover:shadow-xl"
                    : ""
                }`}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
                  transform: `rotate(${-tile.rotation}deg)`,
                  transformOrigin: "center center",
                }}
              >
                {isNextJSImage ? (
                  <FinalImageComponent
                    src={tile.image.url}
                    alt={tile.image.alt}
                    fill
                    className={`object-cover ${
                      enableHoverEffects
                        ? "transition-transform duration-500 group-hover:scale-105"
                        : ""
                    }`}
                    sizes={`${tileWidth}px`}
                    loading="lazy"
                    unoptimized
                  />
                ) : (
                  <FinalImageComponent
                    src={tile.image.url}
                    alt={tile.image.alt}
                    className={`object-cover ${
                      enableHoverEffects
                        ? "transition-transform duration-500 group-hover:scale-105"
                        : ""
                    }`}
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-60" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedMasonryBackground;
