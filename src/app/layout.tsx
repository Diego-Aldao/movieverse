import type { Metadata } from "next";
import "../globals.css";
import localFont from "next/font/local";
import { Cabin, Outfit } from "next/font/google";
import Header from "@/components/layout/header/Header";

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

const neueMontreal = localFont({
  variable: "--font-neue-montreal",
  src: [
    {
      path: "../fonts/PPNeueMontreal-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/PPNeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/PPNeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Movieverse — Peliculas y Series",
  description: "millones de peliculas y series por descubrir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${neueMontreal.variable} ${cabin.variable} ${outfit.variable} bg-main-black`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
