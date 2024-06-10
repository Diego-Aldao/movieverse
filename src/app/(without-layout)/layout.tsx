import type { Metadata } from "next";
import { Cabin, Outfit } from "next/font/google";
import "@/globals.css";

export const metadata: Metadata = {
  title: "Login — Movieverse",
  description: "millones de peliculas y series por descubrir",
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${cabin.variable} ${outfit.variable} min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
