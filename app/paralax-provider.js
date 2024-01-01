"use client";

import { ParallaxProvider } from "react-scroll-parallax";

export function ParallaxProviders({ children }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
