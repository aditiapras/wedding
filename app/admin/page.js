"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { LogOut } from "lucide-react";
import Tables from "./table";
import { useEffect, useState } from "react";
import { getCookies, setCookie, deleteCookie } from "cookies-next";
import { toast, Toaster } from "sonner";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Admin() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [pass, setPass] = useState("");

  useEffect(() => {
    const cookies = getCookies("session");
    console.log(cookies.session);
    if (cookies.session == "true") {
      setOpen(true);
    }
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass == "") {
      toast.error("Enter Pass Key!");
      return;
    }

    if (pass != process.env.NEXT_PUBLIC_PASS_KEY) {
      toast.error("Wrong Pass Key!");
    } else {
      setCookie("session", "true", { maxAge: 60 * 60 * 24 * 1 });
      window.location.href = "/admin";
    }
  };

  if (!mounted)
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        Please Wait...
      </div>
    );

  if (!open)
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <Toaster
          position="top-center"
          closeButton
          richColors
          className="z-10"
        />
        <form className="flex items-center gap-3" onSubmit={handleSubmit}>
          <input
            placeholder="Enter Pass Key"
            className="rounded-md border p-2"
            type="password"
            onChange={(e) => setPass(e.target.value)}
          />
          <button
            type="submit"
            className="w-fit rounded-md bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-500"
          >
            Submit
          </button>
        </form>
      </div>
    );

  return (
    <main className={`${inter.className} flex min-h-screen w-full flex-col`}>
      <nav className="flex items-center justify-between border-b px-10 py-5">
        <p className="text-xl font-semibold">Guest Management</p>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => {
            deleteCookie("session");
            window.location.href = "/admin";
          }}
        >
          <LogOut />
        </Button>
      </nav>
      <Tables />
    </main>
  );
}
