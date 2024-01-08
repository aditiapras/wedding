import { guestLists } from "@/lib/serverFetch";
import dynamic from "next/dynamic";

const AnimatedPage = dynamic(() => import("./Animated"), {
  ssr: false,
});

const CustomPage = dynamic(() => import("./Custom"), {
  ssr: false,
});

export default async function Page({ params }) {
  const id = params.id;
  const data = await guestLists(id);

  return (
    <>
      {id === "aningadit" ? (
        <CustomPage data={data} id={id}></CustomPage>
      ) : (
        <AnimatedPage data={data} id={id}></AnimatedPage>
      )}
    </>
  );
}
