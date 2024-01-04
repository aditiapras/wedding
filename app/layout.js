import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { ParallaxProviders } from "./paralax-provider";

import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const seasons = localFont({
  src: [
    {
      path: "../public/fonts/the-seasons/light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/the-seasons/reg.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/the-seasons/bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-seasons",
});

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
          content="Wedding invitation of Aning & Adit"
        />
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/drive-viewer/AEYmBYSF6hfdxwsV61Ky82zrBh3-JhzVtiumGGhsPGBLhQ1kUn0DRRGut-ZoimX6KK34O5klDg2-7DcZvzxHmbX0dS1V9TI9=s2560"
        />
        <meta property="og:image:type" content="image/png" />
      </head>
      <body className={`${inter.className} ${seasons.className} bg-wedding-50`}>
        <Providers>
          <ParallaxProviders>{children}</ParallaxProviders>
        </Providers>
      </body>
    </html>
  );
}
