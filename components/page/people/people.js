"use client";
import { Petit_Formal_Script } from "next/font/google";
import aning from "../../../public/portrait/4.png";
import adit from "../../../public/portrait/3.png";
import Image from "next/image";
import Text from "@/components/animated/animated-text";
import { Onest } from "next/font/google";
import fw1 from "../../../public/flowers/1.png";
import fw2 from "../../../public/flowers/2.png";
import fw4 from "../../../public/flowers/4.png";
import fw5 from "../../../public/flowers/5.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const petit = Petit_Formal_Script({ subsets: ["latin"], weight: "400" });
const onest = Onest({
  subsets: ["latin"],
});

export default function People() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-out",
      // delay: 200,
    });
    Aos.refresh();
  });

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center gap-10 bg-wedding-800">
      {/* BACKGROUND */}
      <div className="absolute w-full">
        <Image
          src={"/bg/11.png"}
          alt="background"
          // width={1600}
          // height={2560}
          fill
          className="absolute opacity-[35%]"
        />
      </div>
      <div className="mt-10 h-16 w-64">
        <Image
          src={"/frame/19.png"}
          alt="flowers"
          width={400}
          height={400}
          data-aos="zoom-in"
          data-aos-once="true"
        />
      </div>

      <p
        className={`${onest.className} mt-10 text-base font-extralight text-wedding-100`}
        data-aos="zoom-in"
        data-aos-anchor-placement="center-bottom"
      >
        Bismillahirrahmanirrahim
      </p>

      <p
        className={`${onest.className} -mt-5 px-5 text-center text-base font-extralight text-wedding-100`}
        data-aos="zoom-in"
        data-aos-anchor-placement="center-bottom"
      >
        Assalamualaikum Warahmatullahi Wabarakatuh, with the blessing and mercy
        from Allah SWT We cordially invite you to the wedding of
      </p>

      {/* ANING */}
      <div className="flex w-full flex-col items-end gap-2">
        <div className="relative flex w-full justify-end  ">
          <div className="relative px-5">
            <div data-aos="zoom-in">
              <Image src={aning} alt="flowers" width={250} height={250}></Image>
            </div>

            <div className={"absolute -left-5 bottom-0"} data-aos="fade-right">
              <Image src={fw1} alt="flowers" width={150} height={150} />
            </div>
            <div
              className={"absolute -bottom-5 -right-5 -mr-5"}
              data-aos="fade-left"
            >
              <Image
                src={fw2}
                alt="flowers"
                width={225}
                height={225}
                className="-rotate-[15deg]"
              />
            </div>
          </div>
        </div>

        <Text
          className={`z-10 px-5 text-3xl md:text-4xl ${petit.className}`}
          animate={true}
          animation={"fade-right"}
        >
          <span className={"font-samudera"}>Masning Maunah S.P</span>
        </Text>
        <Text
          className={"px-5 text-sm"}
          animate={true}
          animation={"fade-right"}
        >
          The Daugther of Mr. Drs. H. M Mulyono and
        </Text>
        <Text
          className={"z-10 -mt-2 px-5 text-sm"}
          animate={true}
          animation={"fade-right"}
        >
          Mrs. Hj. Nining Raniah
        </Text>
      </div>

      <div className="relative flex w-full items-center justify-center">
        <div className="absolute -right-60 -top-10 h-[300px] w-[300px] opacity-60 sm:-right-72 sm:-top-10 sm:h-[400px] sm:w-[400px]">
          <Image
            src={"/flowers/6.png"}
            alt="flowers"
            width={400}
            height={400}
            className=""
            data-aos="fade-left"
          />
        </div>
        <p className={`relative text-5xl text-wedding-100 ${petit.className}`}>
          &
        </p>
      </div>

      {/* ADIT */}
      <div className="flex w-full flex-col items-start gap-2">
        <div className="relative flex w-full justify-start">
          <div className="relative px-5">
            <div data-aos="zoom-in">
              <Image src={adit} alt="flowers" width={250} height={250}></Image>
            </div>
            <div
              className={"absolute bottom-0 left-0 -mr-5"}
              data-aos="fade-right"
            >
              <Image src={fw5} alt="flowers" width={235} height={235} />
            </div>
            <div className={"absolute -right-7 bottom-0"} data-aos="fade-left">
              <Image
                src={fw4}
                alt="flowers"
                width={150}
                height={150}
                className=""
              />
            </div>
          </div>
        </div>

        <Text
          className={`z-10 px-5 text-3xl md:text-4xl ${petit.className}`}
          animate={true}
          animation={"fade-right"}
        >
          <span className={"font-samudera"}>Aditia Prasetian S.T</span>
        </Text>
        <Text
          className={"px-5 text-sm"}
          animate={true}
          animation={"fade-right"}
        >
          The Son of Mr. Cece Rustandi and
        </Text>
        <Text
          className={"-mt-2 mb-10 px-5 text-sm"}
          animate={true}
          animation={"fade-right"}
        >
          Mrs. (Almh) Setia Komala
        </Text>
      </div>
    </div>
  );
}
