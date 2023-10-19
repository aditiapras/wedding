"use client";
import React from "react";
import Image from "next/image";
import flowers from "../../public/flowers.png";
import { Fade } from "react-awesome-reveal";

export default function ImageComp() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Fade duration={1000} delay={1000}>
        <Image src={flowers} alt="flowers" width={500} height={500} />
      </Fade>
    </div>
  );
}
