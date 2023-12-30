"use server";

export async function getMessage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_INV_LINK}api/messages`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}
