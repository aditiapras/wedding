"use client";
import Image from "next/image";
import Link from "next/link";
import { Albert_Sans } from "next/font/google";
import { guestLists } from "@/lib/serverFetch";
import Wish from "@/components/page/wishes/wish";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { Fade, Zoom } from "react-reveal";
import { Loader2 } from "lucide-react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const albertSans = Albert_Sans({ subsets: ["latin"] });
const lenis = new Lenis();

export default function AnimatedPage({ data, id, name }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 2000);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  if (!mounted)
    return (
      <div className="bg-wedding-50 text-wedding-75 relative flex min-h-screen items-center justify-center">
        <Image
          src={"/bg/6.png"}
          alt="wedding"
          width={500}
          height={500}
          className="absolute right-0"
        />
        <Image
          src={"/bg/5.png"}
          alt="wedding"
          width={500}
          height={500}
          className="absolute left-0"
        />
        <div className="relative flex items-center gap-2">
          <Loader2 className=" animate-spin" />
          <p className="font-garet text-2xl">Please wait...</p>
        </div>
      </div>
    );

  return (
    <main className="text-wedding-75 bg-wedding-50">
      <section className="bg-wedding-50 text-wedding-75 flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <div className="absolute right-10 top-10 z-10 flex flex-col items-center">
          <p className="font-hilsfiger text-xl">20</p>
          <p className="font-hilsfiger text-xl">/</p>
          <p className="font-hilsfiger text-xl">01</p>
        </div>
        <Fade bottom>
          <div className="absolute right-0 h-[500px] w-[1166px]  overflow-hidden">
            <Image
              src={"/bg/0.png"}
              alt="background"
              width={1748}
              height={750}
              className={"absolute right-0"}
            />
          </div>
        </Fade>
        <Fade bottom cascade>
          <div className="relative flex w-full flex-col items-start justify-start px-5 sm:w-3/4 md:mt-20 md:w-2/3 lg:w-1/2">
            <p className="font-hilsfiger text-4xl md:text-7xl">wedding</p>
            <p className="font-hilsfiger text-4xl md:text-7xl">invitation</p>
            {/* <Fade bottom> */}
            {/* </Fade> */}

            {/* <Link
        href={"/wedding#wedding"}
        className="bg-wedding-50/80 border-wedding-75 hover:bg-wedding-75 hover:text-wedding-50 mt-5 rounded-full border px-4 py-1 font-garet transition duration-200"
        >
        View Invitation
    </Link> */}
          </div>
        </Fade>
      </section>

      <section className="bg-wedding-50 flex flex-col">
        <div className="relative mx-auto flex w-full flex-col sm:w-3/4 md:w-2/3 lg:w-1/2">
          <div className="absolute right-0 top-0 flex flex-col gap-2">
            <p className="font-hilsfiger text-wedding-75 mr-5 text-lg">20</p>
            <p className="font-hilsfiger text-wedding-75 text-lg">01</p>
            <p className="font-hilsfiger text-wedding-75 text-lg">24</p>
          </div>
          <div className="flex w-full flex-col px-5 md:px-0">
            <Fade bottom>
              <p className="mb-2 font-garet text-sm md:px-0">
                HELLO, <span className="uppercase">{name}</span>
              </p>
            </Fade>
            <Fade bottom>
              <div className="mb-3 h-0.5 w-10 bg-zinc-400"></div>
            </Fade>
          </div>
          <div className="flex w-full flex-col">
            <div className="w-2/3 items-start">
              <ParallaxBanner
                layers={[{ image: "/portrait/collage/10.jpg", speed: -5 }]}
                className="aspect-square grayscale"
              />
            </div>
          </div>
          <div className="grid -translate-y-16 justify-items-end">
            <div className="w-2/3">
              <ParallaxBanner
                layers={[
                  { image: "/portrait/collage/IMG_2802.JPG", speed: -5 },
                ]}
                className="aspect-square grayscale"
              />
            </div>
            <p
              className={`text-wedding-25 mt-5 px-5 font-garet italic md:w-1/3 md:px-0`}
            >
              &quot;From stranger to lovers, looking forward to a lifetime of
              years together with you&quot;
            </p>
          </div>
        </div>
      </section>

      {/* <Fade bottom>
        <div className="relative mx-auto mt-16 flex w-full flex-col items-center justify-center sm:w-3/4 md:w-2/3 lg:w-1/2">
          <Image
            src={"/wedding/29.png"}
            alt="wedding"
            width={200}
            height={200}
            className="absolute right-0"
          />
        </div>
      </Fade> */}

      <section className="bg-wedding-50 flex min-h-screen flex-col p-5 sm:items-center sm:justify-center sm:p-5">
        <div className="relative flex w-full flex-col items-start gap-3 sm:w-3/4 md:w-2/3 lg:w-1/2">
          <Fade bottom>
            <p className="mb-2 font-garet text-sm">THE INVITE</p>
          </Fade>
          <Fade bottom>
            <div className="mb-3 h-0.5 w-10 bg-zinc-400 "></div>
          </Fade>

          <Fade bottom>
            <p
              className={`${albertSans.className} text-wedding-25 text-lg font-light`}
            >
              Bismillahirrahmanirrahim
            </p>
          </Fade>
          <Fade bottom>
            <p
              className={`${albertSans.className} text-wedding-25 w-4/3 text-lg font-light md:w-1/3`}
            >
              Assalamualaikum Warahmatullahi Wabarakatuh, with the blessing and
              mercy from Allah SWT We cordially invite you to the wedding of
              Aning & Adit as they exchange vows and start their journey
              together as one.
            </p>
          </Fade>
          <div className="flex w-full flex-col items-end">
            <p className="relative mb-2 mt-10 font-garet text-sm">
              THE BRIDE AND THE GROOM
            </p>
            <div className="mb-3 h-0.5 w-10 bg-zinc-400 "></div>
          </div>

          <div className="flex w-full flex-col gap-5">
            <div className="flex w-full flex-col">
              <p className="font-hilsfiger text-left text-2xl md:text-3xl">
                Masning Maunah S.P.
              </p>
              <p
                className={`${albertSans.className} text-wedding-25 mt-2 text-sm`}
              >
                The Daughter of Mr. Drs. H. M Mulyono and
              </p>
              <p className={`${albertSans.className} text-wedding-25 text-sm`}>
                Mrs. Hj. Nining Raniah S.E.
              </p>
            </div>
            <Fade bottom>
              <ParallaxBanner
                layers={[{ image: "/portrait/collage/15.jpeg", speed: -10 }]}
                className="aspect-video"
              />
            </Fade>

            {/* <Zoom>
              <div className="flex w-full justify-center">
                <Image
                  src={"/portrait/collage/3.jpeg"}
                  alt="background"
                  height={800}
                  width={800}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </Zoom> */}

            <div className="flex w-full flex-col">
              <p className="font-hilsfiger text-right text-2xl md:text-3xl">
                Aditia Prasetian S.T.
              </p>
              <p
                className={`${albertSans.className} text-wedding-25 mt-2 text-right text-sm`}
              >
                The Son of Mr. Cece Rustandi and
              </p>
              <p
                className={`${albertSans.className} text-wedding-25 text-right text-sm`}
              >
                Mrs. (Almh) Setia Komala
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-wedding-50 relative flex min-h-screen flex-col p-5 sm:items-center sm:justify-center sm:p-5">
        <div className="relative mt-10 flex w-full flex-col items-start gap-3 sm:w-3/4 md:w-2/3 lg:w-1/2">
          <div className="absolute right-0 top-0 hidden h-[250px] w-[250px]">
            <Image
              src={"/wedding/25.png"}
              alt="background"
              width={500}
              height={500}
              className={"grayscale"}
            />
          </div>
          <p className="relative mb-2 font-garet text-sm">THE DATE</p>
          <div className="relative mb-3 h-0.5 w-10 bg-zinc-400 "></div>
          <div className="flex w-full flex-col items-start gap-3">
            <p className="font-hilsfiger relative text-2xl md:text-4xl">
              Religious Ceremony
            </p>
            <p
              className={`${albertSans.className} font-hilsfiger relative text-xl md:text-2xl`}
            >
              Friday, 19th January 2024
            </p>
            <p
              className={`${albertSans.className} font-hilsfiger relative text-xl md:text-2xl`}
            >
              09:00~10:30
            </p>
            {/* <p className="font-hilsfiger relative text-xl md:text-3xl">
              January 19<span className="font-hilsfiger text-sm">th</span>
            </p>
            <p className="font-hilsfiger relative text-xl md:text-3xl">2024</p>

            <p className={"font-hilsfiger text-wedding-25 relative text-xl"}>
              09:00~10.30
            </p> */}
          </div>

          <div className="mt-10 flex w-full flex-col gap-3 md:items-end">
            <div className="absolute left-0 hidden h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:block">
              <Image
                src={"/wedding/27.png"}
                alt="background"
                width={500}
                height={500}
                className={" "}
              />
            </div>
            <div className="absolute right-0 h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:hidden">
              <Image
                src={"/wedding/27.png"}
                alt="background"
                width={500}
                height={500}
                className={" "}
              />
            </div>
            <p className="font-hilsfiger relative text-2xl md:text-4xl">
              Wedding Celebration
            </p>
            <p
              className={`${albertSans.className} font-hilsfiger relative text-xl md:text-2xl`}
            >
              Saturday, 20th January 2024
            </p>
            <p
              className={`${albertSans.className} font-hilsfiger relative text-xl md:text-2xl`}
            >
              09:00~15:00
            </p>
            {/* <p className="font-hilsfiger relative text-xl md:text-3xl">
              Saturday
            </p>
            <p className="font-hilsfiger relative text-xl md:text-3xl">
              January 20<span className="font-hilsfiger text-sm">th</span>
            </p>
            <p className="font-hilsfiger relative text-xl md:text-3xl">2024</p>

            <p className={"font-hilsfiger text-wedding-25 relative text-xl"}>
              09:30~15:00
            </p> */}
          </div>

          <div className="mt-5 flex w-full md:justify-end">
            <a
              href="#"
              className={`${albertSans.className} text-wedding-75 hover:text-wedding-75 relative text-lg font-light font-medium underline transition duration-200`}
            >
              Add to calendar
            </a>
          </div>
        </div>

        <div className="relative mt-20 flex w-full flex-col items-end gap-3 sm:w-3/4 md:w-2/3 lg:w-1/2">
          <p className="relative mb-2 font-garet text-sm">THE VENUE</p>
          <div className="relative mb-3 h-0.5 w-10 bg-zinc-400 "></div>
          <div className="flex w-full justify-end">
            <div className="h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
              <Image
                src={"/wedding/17.png"}
                alt="background"
                width={500}
                height={500}
                className={" "}
              />
            </div>
          </div>
          <p className="font-hilsfiger relative w-full text-left text-2xl md:text-4xl">
            Religious Ceremony
          </p>
          <p
            className={`${albertSans.className} font-hilsfiger relative w-full text-left text-xl md:text-2xl`}
          >
            Masjid Riyadhul Jannah Al Ma&apos;unah
          </p>
          <p className="font-hilsfiger relative mt-5 w-full text-left text-2xl md:text-4xl">
            Wedding Celebration
          </p>
          <div className="w-full">
            <p
              className={`${albertSans.className} font-hilsfiger relative w-full text-left text-xl md:text-2xl`}
            >
              SDIT Rejis,
            </p>
            <p
              className={`${albertSans.className} font-hilsfiger relative w-full text-left text-xl md:text-2xl`}
            >
              Perum Kodam Blok A No. 27
            </p>
            <p
              className={`${albertSans.className} font-hilsfiger text-wedding-25 relative w-full text-left text-lg md:text-xl`}
            >
              Kec. Mustikajaya, Kota Bekasi, Jawa Barat. 17158. Indonesia.
            </p>
          </div>
          {/* <p className="font-hilsfiger relative w-full text-left text-3xl md:text-4xl">
            SDIT Rejis,
          </p> */}

          {/* <p className="font-hilsfiger relative w-full text-left text-xl md:text-4xl">
            Perum Kodam Blok A No. 27
          </p>
          <p
            className={`${albertSans.className} font-hilsfiger text-wedding-25 relative relative w-full text-left text-lg md:text-xl`}
          >
            Kec. Mustikajaya, Kota Bekasi, Jawa Barat. 17158. Indonesia.
          </p> */}
          <div className="mt-5 w-full items-start">
            <a
              href="https://maps.app.goo.gl/Zv5AiFmqf1cuAAKy5"
              target="_blank"
              className={`${albertSans.className} text-wedding-75 hover:text-wedding-75 w-fit text-left text-lg font-light font-medium underline transition duration-200`}
            >
              View on Maps
            </a>
          </div>
        </div>
        <div className="mt-10 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
          <p
            className={`${albertSans.className} text-wedding-25 w-4/3 text-lg font-light md:w-1/3`}
          >
            Please join us as we celebrate our wedding.
          </p>
        </div>
      </section>

      <section className="bg-wedding-50 mt-10 flex flex-col">
        <div className="relative mx-auto flex w-full flex-col sm:w-3/4 md:w-2/3 lg:w-1/2">
          <div className="flex w-full flex-col px-5 md:px-0">
            <Fade bottom>
              <p className="mb-2 font-garet text-sm md:px-0">THE PORTRAITS</p>
            </Fade>
            <Fade bottom>
              <div className="mb-3 h-0.5 w-10 bg-zinc-400"></div>
            </Fade>
          </div>
          <div className="flex w-full flex-col">
            <div className="w-2/3 items-start">
              <ParallaxBanner
                layers={[{ image: "/portrait/collage/11.jpeg", speed: -5 }]}
                className="aspect-square"
              />
            </div>
          </div>
          <div className="grid -translate-y-16 justify-items-end">
            <div className="w-2/3">
              <ParallaxBanner
                layers={[{ image: "/portrait/collage/13.jpeg", speed: -5 }]}
                className="aspect-square"
              />
            </div>
            <p
              className={`text-wedding-25 mt-5 px-5 font-garet italic md:w-1/3 md:px-0`}
            >
              &quot;May the true love you share today, grow stronger as you grow
              together.&quot;
            </p>
          </div>
          <div className="flex w-full flex-col">
            <div className="z-10 w-2/3 items-start">
              <ParallaxBanner
                layers={[{ image: "/portrait/collage/16.jpeg", speed: -5 }]}
                className="aspect-square"
              />
            </div>
          </div>
          <div className="relative grid -translate-y-10 justify-items-end">
            <div className="w-2/3">
              <ParallaxBanner
                layers={[{ image: "/portrait/collage/14.jpeg", speed: -5 }]}
                className="aspect-square"
              />
            </div>
            <div className="absolute bottom-0 left-0 ml-5 flex flex-col gap-2">
              <p className="font-hilsfiger text-wedding-75 text-lg">20</p>
              <p className="font-hilsfiger text-wedding-75 text-lg">01</p>
              <p className="font-hilsfiger text-wedding-75 text-lg">24</p>
              <p className="font-hilsfiger text-wedding-75 text-lg">/</p>
            </div>
          </div>
        </div>
      </section>

      <Wish id={id} name={data.name} />

      <section className="bg-wedding-50 flex h-full flex-col p-10 sm:items-center sm:justify-center sm:p-5">
        <div className="relative flex w-full flex-col items-end gap-3 sm:w-3/4 md:w-2/3 lg:w-1/2">
          <div className="h-[250px] w-[250px]">
            <Image
              src={"/wedding/24.png"}
              alt="background"
              width={500}
              height={500}
              className={""}
            />
          </div>
          <p className="relative mb-2 font-garet text-sm">
            WEDDING INVITATION OF
          </p>
          <div className="relative mb-3 h-0.5 w-10 bg-zinc-400 "></div>
          <p className="font-hilsfiger relative text-4xl">Aning & Adit</p>

          <p className="relative mb-2 font-garet text-sm">
            Saturday, January 20th 2024.
          </p>
        </div>
      </section>
    </main>
  );
}
