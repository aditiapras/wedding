import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { ParallaxProviders } from "./paralax-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lettre",
  description:
    "Design the perfect wedding invitation with our helpful tips and ideas. Whether you prefer traditional or modern styles, we've got you covered. Make your day memorable with our wedding invitation inspiration.",
  openGraph: {
    title: "Lettre",
    description:
      "Design the perfect wedding invitation with our helpful tips and ideas. Whether you prefer traditional or modern styles, we've got you covered. Make your day memorable with our wedding invitation inspiration.",
    url: "https://lettre.id",
    siteName: "Lettre",
    images: [
      {
        url: "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRSQuUtowiY5lDIDB1JKn0lH5EPGsDm8C6b0Nbd3vPWRJ9PvZ71ZBQwC9Txd0fYp6k1gq1nNxtScB4kTRCtvphn5iNY=s1600", // Must be an absolute URL
        width: 1000,
        height: 1000,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-wedding-50 font-seasons`}>
        <Providers>
          <ParallaxProviders>{children}</ParallaxProviders>
        </Providers>
      </body>
    </html>
  );
}
