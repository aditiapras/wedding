import React from "react";
import { ThemeChanger } from "./theme-changer";

export default function Navbar() {
  return (
    <nav className="w-full h-16 border-b flex px-5">
      <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[75%] flex justify-between items-center mx-auto">
        <p className="text-2xl font-semibold">shadcn</p>
        <ThemeChanger />
      </div>
    </nav>
  );
}
