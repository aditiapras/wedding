"use client";
import { Petit_Formal_Script } from "next/font/google";
import aning from "../../../public/portrait/4.png";
import adit from "../../../public/portrait/3.png";
import Image from "next/image";
import AnimatedImage from "../../animated/animated-image";
import Text from "@/components/animated/animated-text";
import { Onest } from "next/font/google";
import bg from "../../../public/bg/1.png";
import fw1 from "../../../public/flowers/1.png";
import fw2 from "../../../public/flowers/2.png";
import fw3 from "../../../public/flowers/3.png";
import fw4 from "../../../public/flowers/4.png";
import fw5 from "../../../public/flowers/5.png";
import fw6 from "../../../public/flowers/6.png";
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
      delay: 200,
    });
    Aos.refresh();
  });
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center gap-10 bg-wedding-800">
      <Image
        src={bg}
        alt="background"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        width={1080}
        height={1920}
        className="absolute"
      />
      <Text
        className={"mt-10 px-5 text-center"}
        animate={true}
        animation={"zoom-in"}
      >
        Assalamualaikum Warahmatullahi Wabarakatuh, with the blessing and mercy
        from Allah SWT We cordially invite you to the wedding of
      </Text>

      <div className="flex w-full flex-col items-end gap-2">
        <div className="relative flex w-full justify-end ">
          <div className="">
            <div className="absolute -inset-x-20 bottom-0 left-0">
              {/* <Image
                src={fw3}
                alt="flowers"
                width={400}
                height={400}
                className={""}
              ></Image> */}
            </div>
          </div>
          <div className="relative px-5">
            <div data-aos="zoom-in">
              <Image src={aning} alt="flowers" width={200} height={200}></Image>
            </div>
            <div
              className={"absolute -left-5 bottom-0 -mr-5"}
              data-aos="fade-right"
            >
              <Image src={fw1} alt="flowers" width={100} height={100} />
            </div>
            <div
              className={"absolute -right-16 bottom-0 -mr-5"}
              data-aos="fade-left"
            >
              <Image
                src={fw2}
                alt="flowers"
                width={250}
                height={250}
                className="-rotate-45"
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
          The Daugther of Mr. Drs. H. Mulyono and
        </Text>
        <Text
          className={"-mt-2 px-5 text-sm"}
          animate={true}
          animation={"fade-right"}
        >
          Mrs. Hj. Nining Raniah
        </Text>
      </div>
      <p className={`text-5xl text-wedding-100 ${petit.className}`}>&</p>
      <div className="flex w-full flex-col items-start gap-2">
        <div className="relative flex w-full justify-start">
          <div className="relative border border-black px-5">
            <div data-aos="zoom-in">
              <Image src={adit} alt="flowers" width={200} height={200}></Image>
            </div>
            <div
              className={"absolute bottom-0 left-0 -mr-5"}
              data-aos="fade-right"
            >
              <Image src={fw5} alt="flowers" width={200} height={200} />
            </div>
            <div className={"absolute bottom-0 right-0"} data-aos="fade-left">
              <Image
                src={fw4}
                alt="flowers"
                width={100}
                height={100}
                className=""
              />
            </div>
          </div>
          <div className="absolute right-0 top-0">
            <div className="relative right-0 top-0" data-aos="fade-left">
              <Image
                src={fw6}
                alt="flowers"
                width={300}
                height={300}
                className={"-rotate-45 opacity-70"}
              ></Image>
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
          className={"-mt-2 px-5 text-sm"}
          animate={true}
          animation={"fade-right"}
        >
          Mrs. (Almh) Setia Komala
        </Text>
      </div>
    </div>
  );
}
