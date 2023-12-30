"use client";
import Image from "next/image";
import { Onest } from "next/font/google";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const onest = Onest({
  subsets: ["latin"],
});

export default function Invitation({ id }) {
  useEffect(() => {
    Aos.init({
      duration: 500,
      delay: 200,
      easing: "ease-in-out",
    });
  });

  return (
    <div
      id={id}
      className={`${onest.className} relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-wedding-800`}
    >
      <div className="absolute">
        <Image
          src={"/bg/11_2.png"}
          alt="background"
          width={1080}
          height={1920}
          className="rotate-180 opacity-40"
        />
      </div>
      <p
        className={`${onest.className} mt-10 text-xl tracking-widest text-wedding-100`}
        data-aos="zoom-in"
        data-aos-once="true"
      >
        WEDDING INVITATION
      </p>
      <p
        className={`${onest.className} text-xl tracking-widest text-wedding-100`}
        data-aos="zoom-in"
        data-aos-once="true"
      >
        OF
      </p>

      <Image
        src={"/portrait/2.png"}
        alt="flowers"
        width={900}
        height={900}
        className="relative mt-5"
        data-aos="zoom-in"
      />

      <p
        className={`my-10 font-samudera text-4xl text-wedding-100 `}
        data-aos="zoom-in"
        data-aos-anchor-placement="top-bottom"
        // data-aos-once="true"
      >
        Aning & Adit
      </p>
    </div>
  );
}
