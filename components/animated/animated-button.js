"use client";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import AOS from "aos";
import "aos/dist/aos.css";
import { Onest } from "next/font/google";

const onest = Onest({
  subsets: ["latin"],
});

export default function AnimatedButton({
  children,
  animate,
  animation,
  className,
  variant,
  duration,
  delay,
  ...props
}) {
  useEffect(() => {
    AOS.init({
      duration: duration || 500,
      easing: "ease-in-out",
      delay: delay || 200,
    });
  });

  const defaults = "fade-up";

  return (
    <button
      className={twMerge(
        `${onest.className} bg-wedding-100/90 px-5 py-2 font-extralight text-white transition duration-200 hover:bg-wedding-100 active:scale-95`,
        `${variant == "round" ? "rounded-md" : "rounded-full"}`,
        className,
      )}
      data-aos={animate == true ? animation || defaults : ""}
      {...props}
    >
      {children}
    </button>
  );
}
