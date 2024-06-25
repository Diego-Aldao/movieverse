import type { Busqueda } from "@/types/fetchTypes";
import React from "react";
import CustomMain from "@/components/containers/CustomMain";
import MainContent from "@/components/PageBusqueda/MainContent";
import { Metadata } from "next";
import BusquedaDetallada from "@/components/PageBusqueda/BusquedaDetallada";

interface Props {
  searchParams: { [key: string]: string };
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { query } = searchParams;
  return {
    title: `${query ? `Busqueda: ${query}` : "Busqueda"} — Movieverse`,
  };
}

export default function Busqueda({ searchParams }: Props) {
  const { query } = searchParams;

  return (
    <>
      {query ? (
        <CustomMain
          titulo={`resultados de busqueda: ${query}`}
          focusedTitle={true}
        >
          <MainContent query={query} />
        </CustomMain>
      ) : (
        <BusquedaDetallada />
      )}
    </>
  );
}
