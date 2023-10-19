"use client";
import { Petit_Formal_Script } from "next/font/google";
import Image from "next/image";
import { Onest } from "next/font/google";
import bg from "../../../public/bg/1.png";
import frame from "../../../public/frame/3.png";
import us from "../../../public/portrait/2.png";
import AnimatedImage from "@/components/animated/animated-image";
import Text from "@/components/animated/animated-text";
import { Fade, Zoom } from "react-awesome-reveal";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const petit = Petit_Formal_Script({ subsets: ["latin"], weight: "400" });
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
      className={`${onest.className} relative flex min-h-screen w-full flex-col items-center bg-wedding-800 `}
    >
      <Image
        src={bg}
        alt="background"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        width={1080}
        height={1920}
        className="absolute"
      />
      <Text
        className={`text-wedding-100 ${petit.className} mt-16 text-xl tracking-widest text-wedding-100`}
        animate={true}
        animation={"zoom-in"}
      >
        WEDDING INVITATION
      </Text>
      <Text
        className={`text-wedding-100 ${petit.className} text-xl tracking-widest text-wedding-100`}
        animate={true}
        animation={"zoom-in"}
      >
        OF
      </Text>

      <AnimatedImage
        src={us}
        alt="flowers"
        width={900}
        height={900}
        className="mt-5 p-5"
        animation={"zoom-in"}
      />

      <p
        className={`font-samudera mb-10 text-4xl text-wedding-100 `}
        data-aos="zoom-in"
      >
        Aning & Adit
      </p>
    </div>
  );
}
