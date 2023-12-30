"use client";
import Image from "next/image";
import Text from "@/components/animated/animated-text";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import useSound from "use-sound";

export default function Opening({ data }) {
  const [mount, setMount] = useState(false);

  const [play, { duration }] = useSound("/song.mp3");
  useEffect(() => {
    setTimeout(() => {
      setMount(true);
    }, 2000);

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 500,
    });
  }, [duration]);

  if (!mount)
    return (
      <div
        className={`flex min-h-screen w-full items-center justify-center gap-3 bg-wedding-800 font-garet text-wedding-100`}
      >
        <Loader className="animate-spin" />
        Please wait...
      </div>
    );

  return (
    <div
      className={`relative flex min-h-screen w-full flex-col items-center justify-center gap-10 overflow-hidden bg-wedding-800 font-garet font-light`}
    >
      {/* <div className="absolute"> */}
      <Image
        src={"/bg/11.png"}
        alt="background"
        width={1080}
        height={1920}
        className="absolute opacity-40"
      />
      {/* </div> */}

      <Image
        src={"/frame/1.png"}
        alt="flowers"
        width={1080}
        height={1920}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="absolute left-0 top-0"
        data-aos="fade-down"
        data-aos-once="true"
      />

      <Image
        src={"/frame/2.png"}
        alt="flowers"
        width={1080}
        height={1920}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="absolute bottom-0"
        data-aos="fade-up"
        data-aos-once="true"
      />

      <div className="relative -mt-20 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <p
            className="font-garet text-2xl text-wedding-100"
            data-aos="zoom-in"
          >
            Dear, <span className="font-normal">{data.name}.</span>
          </p>
          <p
            className={"font-garet text-xl text-wedding-100"}
            data-aos="zoom-in"
          >
            you are invited to
          </p>
        </div>

        <Text
          className={"relative mt-7 text-2xl tracking-widest"}
          animate={true}
          animation={"zoom-in"}
        >
          THE WEDDING OF
        </Text>
      </div>
      <p
        className={`relative  text-center font-samudera text-4xl text-wedding-100 md:text-5xl`}
        data-aos="zoom-in"
      >
        Aning & Adit
      </p>
      <p className="font-garet text-sm text-wedding-100" data-aos="zoom-in">
        January 20th, 2024
      </p>
      <button
        className={
          "relative -mt-5 rounded-full bg-wedding-100 px-4 py-2 text-white transition hover:bg-wedding-100/90"
        }
        data-aos="zoom-in"
      >
        Open Invitation
      </button>
    </div>
  );
}
