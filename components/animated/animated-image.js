"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AnimatedImage({
  src,
  alt,
  width,
  height,
  objectFit,
  className,
  animation,
}) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      delay: 200,
    });
    AOS.refresh();
  }, []);

  return (
    <div data-aos={animation}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        objectFit={objectFit}
        className={className}
      />
    </div>
  );
}
