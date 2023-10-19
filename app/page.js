import Popup from "@/components/page/popup";
import Sheets from "@/components/page/sheets";
import { Button } from "@/components/ui/button";
import { Petit_Formal_Script } from "next/font/google";

const petit = Petit_Formal_Script({ subsets: ["latin"], weight: "400" });
export default function Home() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-wedding-800 p-5">
        <p className={`font-garet text-xl text-wedding-100`}>The Wedding of</p>
        <p className={`text-5xl text-wedding-100 ${petit.className}`}>
          Aning & Adit
        </p>
        <p className={`text font-garet text-wedding-100`}>20th January, 2024</p>
        <p className="font-garet text-wedding-100">
          Sorry {":("} you are not in the guest list
        </p>
      </div>
    </>
  );
}
