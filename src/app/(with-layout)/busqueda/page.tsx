import type { Busqueda } from "@/types/fetchTypes";
import React from "react";
import CustomMain from "@/components/containers/CustomMain";
import MainContent from "@/components/PageBusqueda/MainContent";

export default function Busqueda({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) {
  const { query } = searchParams;

  return (
    <CustomMain titulo={`resultados de busqueda: ${query}`} focusedTitle={true}>
      <MainContent query={query} />
    </CustomMain>
  );
}
