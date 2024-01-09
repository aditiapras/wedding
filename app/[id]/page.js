import { guestLists } from "@/lib/serverFetch";
import dynamic from "next/dynamic";

const AnimatedPage = dynamic(() => import("./Animated"), {
  ssr: false,
});

const CustomPage = dynamic(() => import("./Custom"), {
  ssr: false,
});

export async function generateMetadata({ params }) {
  const page = params.id;

  if (page === "aningadit") {
    return {
      title: "Wedding Invitation | Aning & Adit",
      description: "Hello, you are invited to the wedding of Aning & Adit",
      openGraph: {
        title: "Wedding Invitation | Aning & Adit",
        description: "Hello, you are invited to the wedding of Aning & Adit",
        url: "https://lettre.id",
        siteName: "Lettre",
        images: [
          {
            url: "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRrJSVva0M4HX8C9N8k8gFAyz3EJ07P4GjB3_qu9z-OO6bQt0gUxyLlq9OvNtR58pVGTIvSvsk5MXElMtzgVNmhkdLWuA=s2560", // Must be an absolute URL
            width: 750,
            height: 750,
          },
        ],
      },
    };
  }
  return {
    title: "Wedding Invitation | Aning & Adit",
    description: "Hello, you are invited to the wedding of Aning & Adit",
    openGraph: {
      title: "Wedding Invitation | Aning & Adit",
      description: "Hello, you are invited to the wedding of Aning & Adit",
      url: "https://lettre.id",
      siteName: "Lettre",
      images: [
        {
          url: "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQ4MrjBx2uu8RIo_TTPtfMnyLXzetalyl2AOp5L2cVtgnr1l3FHif8HXo-7SZ1NwfQOBIovrNs25s9qlO5vo4z62dL1YQ=s1600", // Must be an absolute URL
          width: 1000,
          height: 667,
        },
      ],
    },
  };
}

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
