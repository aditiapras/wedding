"use client";
import React from "react";
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import Image from "next/image";

export default function Images({
  src,
  alt,
  width,
  height,
  objectFit,
  className,
  animate,
  direction,
  duration,
  delay,
}) {
  if (animate == "fade") {
    return (
      <Fade direction={direction} duration={duration} delay={delay}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          // objectFit={objectFit}
          className={className}
        ></Image>
      </Fade>
    );
  } else if (animate == "zoom") {
    return (
      <Zoom direction={direction} duration={duration} delay={delay}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          objectFit={objectFit}
          className={className}
        ></Image>
      </Zoom>
    );
  } else if (animate == "slide") {
    return (
      <Slide direction={direction} duration={duration} delay={delay}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          objectFit={objectFit}
          className={className}
        ></Image>
      </Slide>
    );
  } else {
    return (
      <Fade direction={direction} duration={duration} delay={delay}>
        <img
          src={src}
          alt={alt}
          height={height}
          width={width}
          className={className}
        />
      </Fade>
    );
  }
}
