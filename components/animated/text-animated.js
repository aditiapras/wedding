"use client";
import { Zoom, Fade, Slide } from "react-awesome-reveal";
import { twMerge } from "tailwind-merge";
import { Onest } from "next/font/google";

const onest = Onest({
  subsets: ["latin"],
});

export default function AnimeText({
  children,
  animate,
  duration,
  delay,
  direction,
  className,
}) {
  if (animate == "zoom") {
    return (
      <Zoom
        duration={duration}
        delay={delay}
        className={twMerge(
          `${onest.className} font-extralight text-wedding-100`,
          className,
        )}
      >
        {children}
      </Zoom>
    );
  } else if (animate == "fade") {
    return (
      <Fade
        duration={duration}
        delay={delay}
        direction={direction}
        className={twMerge(
          `${onest.className} font-extralight text-wedding-100`,
          className,
        )}
      >
        {children}
      </Fade>
    );
  } else if (animate == "slide") {
    return (
      <Slide
        duration={duration}
        delay={delay}
        direction={direction}
        className={twMerge(
          `${onest.className} font-extralight text-wedding-100`,
          className,
        )}
      >
        {children}
      </Slide>
    );
  } else {
    return (
      <Fade
        duration={duration}
        delay={delay}
        direction={direction}
        className={twMerge(
          `${onest.className} font-extralight text-wedding-100`,
          className,
        )}
      >
        {children}
      </Fade>
    );
  }
}
