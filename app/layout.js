import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { ParallaxProviders } from "./paralax-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Invitation | Aning & Adit",
  description: "Wedding of Aning & Adit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:url" content="https://lettre.id" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wedding Invitation | Aning & Adit" />
        <meta
          property="og:description"
          content="Hello, you are invited to the wedding of Aning & Adit"
        />
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/drive-viewer/AEYmBYQ4MrjBx2uu8RIo_TTPtfMnyLXzetalyl2AOp5L2cVtgnr1l3FHif8HXo-7SZ1NwfQOBIovrNs25s9qlO5vo4z62dL1YQ=s1600"
        />
        <meta property="og:image:type" content="image/png" />
      </head>
      <body className={`${inter.className} font-seasons bg-wedding-50`}>
        <Providers>
          <ParallaxProviders>{children}</ParallaxProviders>
        </Providers>
      </body>
    </html>
  );
}
