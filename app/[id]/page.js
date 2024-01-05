import { guestLists } from "@/lib/serverFetch";
import dynamic from "next/dynamic";

const AnimatedPage = dynamic(() => import("./Animated"), {
  ssr: false,
});

export default async function Page({ params }) {
  const id = params.id;
  const data = await guestLists(id);

  return (
    <>
      <AnimatedPage data={data} id={id}></AnimatedPage>
    </>
  );
}
