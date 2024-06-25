import { Metadata } from "next";
import ClientPageContent from "./ClientPageContent";

export const metadata: Metadata = {
  title: "Celebridades Populares — Movieverse",
};

export default function Celebridades() {
  return <ClientPageContent />;
}
