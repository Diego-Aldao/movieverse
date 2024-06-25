import { Metadata } from "next";
import ClientPageSeries from "./ClientPageContent";

export const metadata: Metadata = {
  title: "Series de television — Movieverse",
};

export default function Series() {
  return <ClientPageSeries />;
}
