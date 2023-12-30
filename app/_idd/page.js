import Image from "next/image";
import { Onest } from "next/font/google";
import Wishes from "@/components/page/wishes";
import { guestLists } from "@/lib/serverFetch";
import { Toaster } from "sonner";
import Invitation from "@/components/page/invitation/page";
import People from "@/components/page/people/people";
import statics from "../../public/portrait/5.jpg";
import frame4 from "../../public/frame/4.png";
import frame5 from "../../public/frame/5.png";
import Ending from "@/components/page/ending/ending";
import Opening from "@/components/page/opening/opening";
import Portaits from "@/components/page/portaits/portrait";
import Locations from "@/components/page/location/loc";
import Modal from "@/components/modal";

const onest = Onest({
  subsets: ["latin"],
  display: "swap",
});

export default async function Guest({ params }) {
  const id = params.id;
  const data = await guestLists(id);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Modal />
      <main className="flex w-full">
        <section className="sticky top-0 flex hidden max-h-screen w-full items-center justify-center bg-wedding-500 lg:block">
          <div className="absolute z-10 h-full w-full bg-wedding-900 opacity-70"></div>
          <div className="">
            <Image src={statics} alt="statics" fill />
          </div>
          <div className="relative z-20 ">
            <Image
              src={frame4}
              alt="frame"
              width={270}
              height={1040}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="absolute right-0"
            />
          </div>
          <div className="relative z-20 ">
            <Image
              src={frame5}
              alt="frame"
              width={270}
              height={1040}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="absolute left-0"
            />
          </div>
          <div className="relative z-20 flex h-full w-full flex-col items-center justify-center text-wedding-100">
            <p className="tracking-widests font-garet text-xl">THE WEDDING</p>
            <p className="tracking-widests font-garet text-xl">OF</p>
            <p className="mt-10 font-samudera text-5xl text-wedding-100">
              Aning & Adit
            </p>
            <p className="tracking-widests mt-10 font-garet text-lg">
              Saturday, January 20th 2024
            </p>
          </div>
        </section>
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden md:w-full lg:w-[900px]">
          {/* SECTION 1 */}
          <Opening data={data} />

          {/* SECTION 2 */}
          <Invitation />

          {/* SECTION 3 */}
          <People />

          {/* SECTION 4 */}
          <Portaits />

          {/* SECTION 5 */}
          <Locations />

          {/* SECTION 6 */}
          <div className="relative flex w-full flex-col items-center gap-10 overflow-hidden border-b  border-t border-wedding-600 bg-wedding-800 px-5 py-10">
            <Wishes font={onest} person={data.name} id={data.guestId} />
          </div>

          {/* SECTION 7 */}
          <Ending />
        </section>
        <Toaster position="bottom-right" closeButton />
      </main>
    </div>
  );
}
