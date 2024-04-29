"use client";
import React, { useEffect, useState } from "react";
import Filtros from "./Filtros/Filtros";
import ContentTendencias from "./ContentTendencias";
import { baseUrlTendencias, lenguajeEsp } from "@/constants/constants";
import { Filtro } from "@/types/localTypes";
import CustomSection from "@/components/containers/CustomSection";

const initialFiltros: Filtro = {
  tiempo: "day",
  tipo: "all",
};
const initialUrl: string = `${baseUrlTendencias}/all/day${lenguajeEsp}`;

export default function Tendencias() {
  const [filtros, setFiltros] = useState<Filtro>(initialFiltros);
  const [url, setUrl] = useState<string>(initialUrl);

  useEffect(() => {
    setUrl(
      `${baseUrlTendencias}/${filtros.tipo}/${filtros.tiempo}${lenguajeEsp}`
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
