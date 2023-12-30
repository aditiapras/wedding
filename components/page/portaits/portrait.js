"use client";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import image1 from "../../../public/portrait/collage/3.jpeg";

export default function Portaits() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      delay: 200,
      easing: "ease-in-out",
    });
    Aos.refresh();
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center gap-5 bg-wedding-800">
      <div className="absolute w-full">
        <Image src={"/bg/3.png"} alt="background" width={1080} height={1920} />
      </div>
      <div className="mt-10 w-[300px]">
        <Image
          src={"/frame/18.png"}
          alt="flowers"
          width={400}
          height={700}
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        />
      </div>
      <p
        className="relative mt-5 px-5 text-center font-samudera text-3xl text-wedding-100"
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      >
        Portraits of Us
      </p>

      {/* PHOTO GRID */}
      <div className="grid w-full grid-cols-2 gap-2 px-10">
        <div
          className="col-span-2 aspect-video overflow-hidden rounded-lg shadow-sm"
          data-aos="zoom-in"
          //   data-aos-once="true"
        >
          <Image
            src={image1}
            alt="flowers"
            width={1920}
            height={1080}
            placeholder="blur"
          />
        </div>
        <div
          className="aspect-square overflow-hidden rounded-lg shadow-sm"
          data-aos="zoom-in"
          //   data-aos-once="true"
        >
          <Image
            src={"/portrait/collage/IMG_2914.JPG"}
            alt="flowers"
            width={1920}
            height={1920}
          />
        </div>
        <div className="">
          <div className="grid grid-rows-2 gap-2">
            <div
              className="aspect-video overflow-hidden rounded-lg shadow-sm"
              data-aos="zoom-in"
              //   data-aos-once="true"
            >
              <Image
                src={"/portrait/collage/IMG_2392.JPG"}
                alt="flowers"
                width={1920}
                height={1080}
              />
            </div>
            <div
              className="aspect-video overflow-hidden rounded-lg shadow-sm"
              data-aos="zoom-in"
              //   data-aos-once="true"
            >
              <Image
                src={"/portrait/collage/IMG_2383.JPG"}
                alt="flowers"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
        <div
          className="-mt-6 aspect-square overflow-hidden rounded-lg shadow-sm sm:-mt-9"
          data-aos="zoom-in"
          //   data-aos-once="true"
        >
          <Image
            src={"/portrait/collage/IMG_2422.JPG"}
            alt="flowers"
            width={1920}
            height={1080}
          />
        </div>
        <div
          className="aspect-square overflow-hidden rounded-lg shadow-sm"
          data-aos="zoom-in"
          //   data-aos-once="true"
        >
          <Image
            src={"/portrait/collage/IMG_2382.JPG"}
            alt="flowers"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
}
