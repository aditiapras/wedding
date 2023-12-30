import { Button } from "@/components/ui/button";
import React from "react";
import { LogOut } from "lucide-react";
import Tables from "./table";
import { Toaster } from "sonner";

export default function Admin() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Toaster position="top-center" closeButton richColors />
      <nav className="flex items-center justify-between border-b px-10 py-5">
        <p className="text-xl font-semibold">Guest Management</p>
        <Button size="icon" variant="ghost">
          <LogOut />
        </Button>
      </nav>
      <Tables />
    </main>
  );
}
