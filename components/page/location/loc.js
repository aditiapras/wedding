"use client";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Onest } from "next/font/google";

const onest = Onest({
  subsets: ["latin"],
  display: "swap",
});

export default function Locations() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-out",
    });
    Aos.refresh();
  });

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center gap-5 bg-wedding-800">
      <div className="absolute w-full">
        <Image src={"/bg/3.png"} alt="background" width={1080} height={1920} />
      </div>

      <div
        className="relative mt-10 w-[300px] sm:w-[400px]"
        data-aos="zoom-in"
        data-aos-once="true"
      >
        <Image src={"/frame/8.png"} alt="flowers" width={400} height={700} />
      </div>

      <p
        className="font-samudera text-3xl text-wedding-100"
        data-aos="zoom-in"
        data-aos-once="true"
      >
        Save the Date
      </p>

      <div
        className="relative mb-5 w-[400px] sm:mt-5 sm:w-[550px]"
        data-aos="zoom-in"
        data-aos-once="true"
      >
        <Image src={"/frame/10.png"} alt="flowers" width={1200} height={1600} />
        <div className="absolute top-1/2 z-10 flex w-full -translate-y-1/2 flex-col items-center">
          <div className="flex flex-col items-center">
            <p
              className="text-center font-samudera text-xl text-wedding-100 sm:text-2xl"
              data-aos="zoom-in"
              data-aos-once="true"
            >
              Akad Nikah
            </p>
            <p
              className={`${onest.className} text-center text-sm font-light text-wedding-100 sm:text-base`}
              data-aos="zoom-in"
              data-aos-once="true"
            >
              08:00 ~ 10:00
            </p>
            <p
              className={`${onest.className} text-center text-sm font-light text-wedding-100 sm:text-base`}
              data-aos="zoom-in"
              data-aos-once="true"
            >
              Friday, 19th January 2024
            </p>
            <p
              className={`${onest.className} text-center text-sm font-light text-wedding-100 sm:text-base`}
              data-aos="zoom-in"
              data-aos-once="true"
            >
              Masjid Riyadhul Jannah Al Maunah
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center sm:mt-20">
            <p
              className="text-center font-samudera text-xl text-wedding-100 sm:text-2xl"
              data-aos="zoom-in"
              data-aos-once="true"
            >
              Resepsi
            </p>
            <p
              className={`${onest.className} text-center text-sm font-light text-wedding-100 sm:text-base`}
              data-aos="zoom-in"
              data-aos-once="true"
            >
              09:30 ~ 10:00
            </p>
            <p
              className={`${onest.className} text-center text-sm font-light text-wedding-100 sm:text-base`}
              data-aos="zoom-in"
              data-aos-once="true"
            >
              Saturday, 20th January 2024
            </p>
            <p
              className={`${onest.className} text-center text-sm font-light text-wedding-100 sm:text-base`}
              data-aos="zoom-in"
              data-aos-once="true"
            >
              SDIT Rejis
            </p>
            <p
              className={`${onest.className} text-center text-sm font-light text-wedding-100 sm:text-base`}
              data-aos="zoom-in"
              data-aos-once="true"
            >
              Jalan Perum Kodam Blok A No. 27
            </p>
          </div>
          <a
            href="https://maps.app.goo.gl/XjHMawkcmQvMRJGZ7"
            target="_blank"
            className="mt-16 w-fit rounded-full bg-wedding-100/90 px-4 py-2 font-garet text-sm text-white transition transition duration-200 duration-200 hover:bg-wedding-100 sm:mt-20 sm:text-base"
            data-aos="zoom-in"
            data-aos-once="true"
          >
            View on maps
          </a>
        </div>
      </div>
    </div>
  );
}
