"use server";
import { cookies } from "next/headers";

export async function getMessage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_INV_LINK}api/messages`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export async function setCookie() {
  const oneDay = 24 * 60 * 60 * 1000;
  cookies().set("lettre", "dawasldkjawihfaslkhalsdadi10284aSLJKHDA", {
    expires: Date.now() - oneDay,
  });
}
