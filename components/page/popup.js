import { Button } from "@/components/ui/button";
import { Petit_Formal_Script } from "next/font/google";

const petit = Petit_Formal_Script({ subsets: ["latin"], weight: "400" });

export default async function Popup() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center w-full p-5 bg-wedding-800 gap-10">
      <p className={`text-5xl text-wedding-100 ${petit.className}`}>
        Aning & Adit
      </p>
      <Button className="bg-wedding-100/90 hover:bg-wedding-100 rounded-full font-garet active:scale-95 transition duration-150">
        Open Invitation
      </Button>
    </div>
  );
}
