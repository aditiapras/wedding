"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Onest } from "next/font/google";

const onest = Onest({
  subsets: ["latin"],
});

export default function Text({
  className,
  children,
  style,
  animate,
  animation,
  duration,
  delay,
}) {
  useEffect(() => {
    AOS.init({
      duration: duration || 500,
      easing: "ease-in-out",
      delay: delay || 200,
    });
    AOS.refresh();
  });

  const textStyle = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
    h3: "scroll-m-20 text-2xl font-medium tracking-tight",
    h4: "scroll-m-20 text-xl font-normal tracking-tight",
    paragraph: "leading-7 font-light [&:not(:first-child)]:mt-6",
  };

  const defaults = "fade-up";

  return (
    <p
      className={twMerge(
        `${onest.className} text-wedding-100`,
        style == "h1"
          ? textStyle.h1
          : style == "h2"
          ? textStyle.h2
          : style == "h3"
          ? textStyle.h3
          : style == "h4"
          ? textStyle.h4
          : style == "paragraph"
          ? textStyle.paragraph
          : "font-extralight",
        className,
      )}
      data-aos={animate == true ? animation || defaults : ""}
    >
      {children}
    </p>
  );
}
