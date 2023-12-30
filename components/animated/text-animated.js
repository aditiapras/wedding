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
        // triggerOnce={true}
        className={twMerge(
          `${onest.className} text-wedding-100 font-extralight`,
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
        // triggerOnce={true}
        className={twMerge(
          `${onest.className} text-wedding-100 font-extralight`,
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
        // triggerOnce={true}
        className={twMerge(
          `${onest.className} text-wedding-100 font-extralight`,
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
        // triggerOnce={true}
        className={twMerge(
          `${onest.className} text-wedding-100 font-extralight`,
          className,
        )}
      >
        {children}
      </Fade>
    );
  }
}
