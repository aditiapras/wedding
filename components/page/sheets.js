import React from "react";

export default async function Sheets() {
  const data = await fetch("http://localhost:3000/api/messages", {
    cache: "no-store",
  }).then((res) => res.json());
  return (
    <div className="flex min-h-screen w-full items-center justify-center"></div>
  );
}
