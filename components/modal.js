"use client";
import { useEffect, useState, useRef } from "react";
import useSound from "use-sound";
import { Loader } from "lucide-react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

export default function Modal() {
  const [play, { duration }] = useSound("/song.mp3");
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setMounted(true);
      // disableBodyScroll(ref.current);
    }, 2000);
    Aos.init({
      duration: 1000,
      once: true,
    });
  });

  if (!mounted)
    return (
      <div
        className={`fixed sticky top-0 z-20 flex min-h-screen w-full flex-col items-center justify-center bg-wedding-800 font-garet text-wedding-100`}
      >
        <Loader className="animate-spin" />
        Please wait...
      </div>
    );

  return (
    <>
      <div
        className={`${
          show
            ? "absolute h-0 -translate-y-full transition duration-1000 ease-in-out "
            : "fixed"
        } z-20 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-wedding-100`}
        // ref={ref}
      >
        {/* <Image src={"/bg/1.png"} alt="bg" fill /> */}
        <div
          className="absolute mb-10 flex w-[350px] items-center justify-center sm:w-[450px]"
          data-aos="zoom-in"
        >
          <Image src={"/frame/23.png"} alt="frame" width={600} height={1040} />
        </div>
        <p className="font-garet text-white" data-aos="zoom-in">
          Wedding invitation of
        </p>
        <p
          className="mt-10 font-samudera text-4xl text-white sm:text-5xl"
          data-aos="zoom-in"
        >
          Aning & Adit
        </p>
        <button
          onClick={() => {
            play();
            setShow(true);
            // enableBodyScroll(ref);
          }}
          className="relative mt-10 rounded-full border bg-white px-5 py-3 font-garet text-wedding-100 transition duration-200 hover:bg-zinc-100"
          data-aos="fade-up"
        >
          Open Invitation
        </button>
      </div>
    </>
  );
}
