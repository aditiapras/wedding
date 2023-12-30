"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Onest } from "next/font/google";

const onest = Onest({
  subsets: ["latin"],
  display: "swap",
});

export default function Ending() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      //   delay: 200,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-5 overflow-hidden bg-wedding-800">
      <div className="absolute top-10 w-[300px]">
        <Image
          src={"/frame/19.png"}
          alt="flowers"
          width={600}
          height={700}
          className="relative"
        />
      </div>
      <div className="absolute w-full">
        <Image src={"/bg/3.png"} alt="background" width={1080} height={1920} />
      </div>

      <p
        className={`${onest.className} px-5 text-center font-garet font-light text-wedding-100`}
        data-aos="fade-up"
        data-aos-once="true"
      >
        &quot;And of His signs is that He created for you from yourselves mates
        that you may find tranquility in them; and He placed between you
        affection and mercy. Indeed in that are signs for a people who give
        thought.&quot;
      </p>

      <p
        className={`relative mt-0 px-5 text-center font-samudera text-wedding-100`}
        data-aos="fade-up"
        data-aos-once="true"
      >
        (QS. Ar-Ruum : 21)
      </p>

      <div className="flex flex-col items-center gap-3 sm:gap-5">
        <p
          className={`${onest.className} relative mt-10 px-5 text-center font-extralight text-wedding-100`}
          data-aos="fade-up"
          data-aos-once="true"
        >
          Wedding Invitation of
        </p>
        <p
          className="font-samudera text-3xl text-wedding-100"
          data-aos="fade-up"
          data-aos-once="true"
        >
          Aning & Adit
        </p>
        <p
          className="font-samudera text-lg text-wedding-100"
          data-aos="fade-up"
          data-aos-once="true"
        >
          Saturday, 20th January 2024
        </p>
      </div>
      <div className="absolute bottom-0 w-full">
        <Image
          src={"/flowers/12.png"}
          alt="flowers"
          width={600}
          height={700}
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        />
      </div>
    </div>
  );
}
