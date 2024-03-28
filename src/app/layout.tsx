import type { Metadata } from "next";
import "../globals.css";
import localFont from "next/font/local";

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
  title: "Movieverse",
  description: "millones de peliculas y series por descubrir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${neueMontreal.variable} bg-main-black`}>
        {children}
      </body>
    </html>
  );
}
