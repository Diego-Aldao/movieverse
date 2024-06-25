import type { Metadata } from "next";
import "@/globals.css";
import { Cabin, Outfit } from "next/font/google";
import Header from "@/components/layout/header/Header";
import { SkeletonTheme } from "react-loading-skeleton";
import Footer from "@/components/layout/Footer/Footer";
import { Providers } from "../providers";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: "normal",
  variable: "--font-cabin",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: "normal",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Movieverse — Peliculas y Series",
  description:
    "sitio web dedicado a la información sobre películas, series y celebridades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${cabin.variable} ${outfit.variable} bg-main-black min-h-[calc(100vh+544px)] md:min-h-[calc(100vh+280px)] lg:min-h-[calc(100vh+300px)] flex flex-col`}
      >
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </SkeletonTheme>
      </body>
    </html>
  );
}
