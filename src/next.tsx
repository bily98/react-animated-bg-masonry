"use client";

import React from "react";
import Image, { ImageProps } from "next/image";
import {
  AnimatedMasonryBackground,
  AnimatedMasonryBackgroundProps,
  MasonryImage,
} from "./index";

type NextImgProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: ImageProps["src"];
  width?: number;
  height?: number;
  alt?: string;
};

function NextImg(props: NextImgProps) {
  const { src, alt = "", width, height, ...rest } = props;
  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      {...rest}
    />
  );
}

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

export const NextAnimatedMasonryBackground: React.FC<
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
  responsiveColumns = [2, 3, 4],
}) => {
  return (
    <AnimatedMasonryBackground
      ImageComponent={NextImg as any}
      images={images}
      animationSpeed={animationSpeed}
      rotationAngle={rotationAngle}
      gap={gap}
      defaultTileWidth={defaultTileWidth}
      zIndex={zIndex}
      className={className}
      gradientFrom={gradientFrom}
      gradientTo={gradientTo}
      enableHoverEffects={enableHoverEffects}
      fadeInDuration={fadeInDuration}
      responsiveColumns={responsiveColumns}
    />
  );
};

export * from "./index";
export default NextAnimatedMasonryBackground;
