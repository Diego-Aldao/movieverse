"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  alt: string;
  src: string;
  customClases?: string;
  priority?: boolean;
  errorImage: StaticImageData | string;
  noAnimation?: boolean;
  width?: number;
  height?: number;
  triggerOnce?: boolean;
}

export default function CustomImage({
  alt,
  errorImage,
  priority,
  customClases,
  src,
  noAnimation,
  width,
  height,
  triggerOnce,
}: Props) {
  const [currentSrc, setCurrentSrc] = useState<string | StaticImageData>(src);
  const [ref, inView] = useInView({ threshold: 0, triggerOnce: triggerOnce });

  useEffect(() => {
    if (currentSrc !== src) {
      setCurrentSrc(src);
    }
  }, [src]);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width || 0}
      height={height || 0}
      sizes="100vw"
      ref={ref}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      onError={() => {
        setCurrentSrc(errorImage);
      }}
      priority={priority}
      className={`${customClases} ${
        !noAnimation && (inView ? "opacity-100 top-0" : "opacity-0 top-2")
      } transition-all relative`}
    />
  );
}
