import { Metadata } from "next";
import ClientPagePeliculas from "./ClientPageContent";

export const metadata: Metadata = {
  title: "Peliculas — Movieverse",
};

export default function Peliculas() {
  return <ClientPagePeliculas />;
}
