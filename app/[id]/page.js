import { guestLists } from "@/lib/serverFetch";
// import AnimatedPage from "./Animated";
import dynamic from "next/dynamic";

const AnimatedPage = dynamic(() => import("./Animated"), {
  ssr: false,
});

export default async function Page({ params }) {
  const id = params.id;
  const data = await guestLists(id);
  const name = data.name;

  return (
    <>
      <AnimatedPage data={data} id={id} name={name}></AnimatedPage>
    </>
  );
}
