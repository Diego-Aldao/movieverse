"use client";
import React, { useEffect, useState } from "react";
import Filtros from "./Filtros/Filtros";
import ContentTendencias from "./ContentTendencias";
import { BASE_URL_TRENDING, LENGUAJE_ESP } from "@/constants/constants";
import { Filtro } from "@/types/localTypes";
import CustomSection from "@/components/containers/CustomSection";

const initialFiltros: Filtro = {
  tiempo: "day",
  tipo: "all",
};
const initialUrl: string = `${BASE_URL_TRENDING}/all/day${LENGUAJE_ESP}`;

export default function Tendencias() {
  const [filtros, setFiltros] = useState<Filtro>(initialFiltros);
  const [url, setUrl] = useState<string>(initialUrl);

  useEffect(() => {
    setUrl(
      `${BASE_URL_TRENDING}/${filtros.tipo}/${filtros.tiempo}${LENGUAJE_ESP}`
    );
  }, [filtros]);

  return (
    <CustomSection
      titulo="tendencias"
      headerChildren={<Filtros filtros={filtros} setFiltros={setFiltros} />}
    >
      <ContentTendencias url={url} />
    </CustomSection>
  );
}
