import Image from "next/image";
import Link from "next/link";
import { Albert_Sans } from "next/font/google";
import { guestLists } from "@/lib/serverFetch";
import Wish from "@/components/page/wishes/wish";

const albertSans = Albert_Sans({ subsets: ["latin"] });

export default async function Page({ params }) {
  const id = params.id;
  const data = await guestLists(id);
  return (
    <main className="text-wedding-75 bg-wedding-50">
      <section className="bg-wedding-50 text-wedding-75 flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <div className="absolute right-10 top-10 z-10 flex flex-col items-center">
          <p className="font-hilsfiger text-xl">20</p>
          <p className="font-hilsfiger text-xl">/</p>
          <p className="font-hilsfiger text-xl">01</p>
        </div>
        <div className="absolute right-0 h-[500px] w-[1166px]  overflow-hidden">
          <Image
            src={"/bg/0.png"}
            alt="background"
            width={1748}
            height={750}
            className={"absolute right-0"}
          />
        </div>
        <div className="relative flex w-full flex-col items-start justify-start px-5 sm:w-3/4 md:mt-20 md:w-2/3 lg:w-1/2">
          <p className="font-hilsfiger text-4xl md:text-7xl">wedding</p>
          <p className="font-hilsfiger text-4xl md:text-7xl">invitation</p>

          {/* <Link
            href={"/wedding#wedding"}
            className="bg-wedding-50/80 border-wedding-75 hover:bg-wedding-75 hover:text-wedding-50 mt-5 rounded-full border px-4 py-1 font-garet transition duration-200"
          >
            View Invitation
          </Link> */}
        </div>
      </section>
      <div className="relative mx-auto flex w-full flex-col items-center justify-center sm:w-3/4 md:w-2/3 lg:w-1/2">
        <Image
          src={"/wedding/29.png"}
          alt="wedding"
          width={200}
          height={200}
          className="absolute right-0 "
        />
      </div>

      <section className="bg-wedding-50 flex min-h-screen flex-col p-5 sm:items-center sm:justify-center sm:p-5">
        <div className="relative flex w-full flex-col items-start gap-3 sm:w-3/4 md:w-2/3 lg:w-1/2">
          <p className="mb-2 font-garet text-sm">THE INVITE</p>
          <div className="mb-3 h-0.5 w-10 bg-zinc-400 "></div>
          <p
            className={`${albertSans.className} text-wedding-25 text-lg font-light`}
          >
            Bismillahirrahmanirrahim
          </p>
          <p
            className={`${albertSans.className} text-wedding-25 w-4/3 text-lg font-light md:w-1/3`}
          >
            Assalamualaikum Warahmatullahi Wabarakatuh, with the blessing and
            mercy from Allah SWT We cordially invite you to the wedding of Aning
            & Adit as they exchange vows and start their journey together as
            one.
          </p>
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
            {/* <div className="my-10 flex w-full justify-center">
              <Image
                src={"/wedding/29.png"}
                alt="ring"
                height={100}
                width={100}
              />
            </div> */}
            <div className="flex w-full justify-center">
              <Image
                src={"/portrait/collage/3.jpeg"}
                alt="background"
                height={800}
                width={800}
                className="rounded-lg shadow-lg"
              />
            </div>
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

          {/* <div className="mt-5 flex w-full flex-col">
            <div className="h-[250px] w-[250px] overflow-hidden rounded-lg md:h-[500px] md:w-[500px]">
              <Image
                src={"/portrait/collage/12_2.jpeg"}
                alt="background"
                height={1000}
                width={1000}
                quality={100}
                className="shadow-lg"
              />
              <p className={`${albertSans.className} mt-3 text-right `}>
                Masning Maunah S.P.
              </p>
              <p
                className={`${albertSans.className}  text-wedding-25 text-right text-sm font-light`}
              >
                The Daughter of Drs. H. M Mulyono and
              </p>
              <p
                className={`${albertSans.className}  text-wedding-25 text-right text-sm font-light`}
              >
                Hj. Nining Raniah S.E.
              </p>
            </div>
            <div className="h-[250px] w-[250px] justify-end overflow-hidden rounded-lg md:h-[500px] md:w-[500px]">
              <Image
                src={"/portrait/collage/13_2.jpeg"}
                alt="background"
                height={500}
                width={500}
                className="shadow-lg"
              />
            </div>
          </div> */}
        </div>
      </section>

      <section className="bg-wedding-50 flex min-h-screen flex-col p-5 sm:items-center sm:justify-center sm:p-5">
        <div className="relative mt-10 flex w-full flex-col items-start gap-3 sm:w-3/4 md:w-2/3 lg:w-1/2">
          <div className="absolute -left-20 -top-10 h-[250px] w-[250px] sm:right-10">
            <Image
              src={"/wedding/3.png"}
              alt="background"
              width={500}
              height={500}
              className={" "}
            />
          </div>
          <p className="relative mb-2 font-garet text-sm">THE DATE</p>
          <div className="relative mb-3 h-0.5 w-10 bg-zinc-400 "></div>
          <p className="font-hilsfiger relative text-4xl">Saturday</p>
          <p className="font-hilsfiger relative text-4xl">
            January 20<span className="font-hilsfiger text-sm">th</span>
          </p>
          <p className="font-hilsfiger relative text-4xl">2024</p>

          <p className={"font-hilsfiger text-wedding-25 relative text-xl"}>
            09:30~14:00
          </p>
          <a
            href="#"
            className={`${albertSans.className} text-wedding-25 hover:text-wedding-75 text-lg font-light underline transition duration-200`}
          >
            Add to calendar
          </a>
        </div>

        <div className="relative mt-10 flex w-full flex-col items-end gap-3 sm:w-3/4 md:w-2/3 lg:w-1/2">
          <p className="relative mb-2 mt-5 font-garet text-sm">THE VENUE</p>
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

          <p className="font-hilsfiger relative w-full text-left text-4xl">
            SDIT Rejis,
          </p>
          {/* <p className="font-hilsfiger relative text-4xl">
            January 20<span className="font-hilsfiger text-sm">th</span>
          </p> */}
          <p className="font-hilsfiger relative w-full text-left text-2xl md:text-4xl">
            Perum Kodam Blok A No. 27
          </p>
          <div className="mt-10 w-full items-start">
            <a
              href="https://maps.app.goo.gl/Zv5AiFmqf1cuAAKy5"
              target="_blank"
              className={`${albertSans.className} text-wedding-25 hover:text-wedding-75 w-fit text-left text-lg font-light underline transition duration-200`}
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
