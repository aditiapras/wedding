import { Petit_Formal_Script } from "next/font/google";
import aning from "../../public/Untitled.png";
import adit from "../../public/Untitled2.png";
import Image from "next/image";
import AnimatedImage from "../../components/animated/animated-image";
import Text from "@/components/animated/animated-text";
import { Onest } from "next/font/google";
import Wishes from "@/components/page/wishes";
import { guestLists } from "@/lib/serverFetch";
import Images from "@/components/animated/image-animated";
import { Toaster } from "sonner";
import bg from "../../public/bg/1.png";
import frame1 from "../../public/frame/1.png";
import frame2 from "../../public/frame/2.png";
import Invitation from "@/components/page/invitation/page";
import People from "@/components/page/people/people";

const petit = Petit_Formal_Script({ subsets: ["latin"], weight: "400" });
const onest = Onest({
  subsets: ["latin"],
});

export default async function Guest({ params }) {
  const id = params.id;
  const data = await guestLists(id);

  return (
    <main className="flex w-full">
      <section className="sticky top-0 flex hidden max-h-screen w-full items-center justify-center bg-wedding-500 lg:block"></section>
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden md:w-full lg:w-[900px]">
        {/* SECTION 1 */}
        <div
          className={`${onest.className} relative flex min-h-screen w-full flex-col items-center justify-center gap-10 overflow-hidden bg-wedding-800 p-5 font-light`}
        >
          <Image
            src={bg}
            alt="background"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={1080}
            height={1920}
            className="absolute"
          />
          <Image
            src={frame1}
            alt="flowers"
            width={1080}
            height={1920}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="absolute top-0"
            // layout="fill"
          />
          <Image
            src={frame2}
            alt="flowers"
            width={1080}
            height={1920}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            s
            className="absolute bottom-0"
            objectFit="cover"
          />
          <div className="relative -mt-20 flex flex-col items-center">
            <Text className={"text-2xl"} animate={true} animation={"zoom-in"}>
              Dear, <span className="font-normal">{data.name}.</span>
            </Text>
            <Text className={"text-xl font-light"}>you are invited to</Text>
            <Text className={"relative mt-7 text-2xl tracking-widest"}>
              THE WEDDING OF
            </Text>
          </div>
          <p
            className={`relative  text-center text-4xl text-wedding-100 md:text-5xl ${petit.className}`}
          >
            Aning & Adit
          </p>
          <Text className={"-mt-5 text-sm"}>January 20th, 2024</Text>
          <button
            className={
              "relative -mt-5 rounded-full bg-wedding-100 px-4 py-2 text-white transition hover:bg-wedding-100/90"
            }
          >
            Open Invitation
          </button>
        </div>

        {/* SECTION 2 */}
        <Invitation />

        {/* SECTION 3 */}
        <People />

        {/* SECTION 4 */}
        <div className="relative flex min-h-screen w-full flex-col items-center gap-10 overflow-hidden bg-wedding-800 p-5">
          <Wishes font={onest} person={data.name} id={data.guestId} />
        </div>
      </section>
      <Toaster position="bottom-right" closeButton />
    </main>
  );
}
