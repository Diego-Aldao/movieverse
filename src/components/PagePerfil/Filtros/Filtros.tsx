"use client";
import { Coleccion } from "@/types/localTypes";
import React, { useEffect, useState } from "react";
import FilterGroup from "./FilterGroup";
import {
  GROUP_FILTERS_LIST_PROFILE_PAGE,
  TYPE_FILTERS_LIST_PROFILE_PAGE,
} from "@/constants/constants";

interface Props {
  setCurrentColeccion: React.Dispatch<React.SetStateAction<Coleccion[]>>;
  guardados: Coleccion[];
}

interface ValoresFiltros {
  [key: string]: string;
}

export default function Filtros({ setCurrentColeccion, guardados }: Props) {
  const initialFiltros: ValoresFiltros = {
    grupo: "todos",
    tipo: "todos",
  };
  const [valoresFiltros, setValoresFiltros] =
    useState<ValoresFiltros>(initialFiltros);

  const handleFiltro = (valor: string, categoria: string) => {
    setValoresFiltros({
      ...valoresFiltros,
      [categoria]: valor,
    });
  };

  useEffect(() => {
    let coleccionFiltrada;
    const getGrupo = (grupo: string) => {
      return guardados.filter((guardado) => grupo in guardado);
    };
    const getTipo = (tipo: string) => {
      return guardados.filter((guardado) => guardado.media_type === tipo);
    };
    if (valoresFiltros.tipo === "todos" && valoresFiltros.grupo === "todos") {
      coleccionFiltrada = guardados;
    } else if (valoresFiltros.tipo === "todos") {
      coleccionFiltrada = getGrupo(valoresFiltros.grupo);
    } else if (valoresFiltros.grupo === "todos") {
      coleccionFiltrada = getTipo(valoresFiltros.tipo);
    } else {
      coleccionFiltrada = getGrupo(valoresFiltros.grupo);
      coleccionFiltrada = coleccionFiltrada.filter(
        (guardado) => guardado.media_type === valoresFiltros.tipo
      );
    }
    setCurrentColeccion(coleccionFiltrada);
  }, [valoresFiltros]);

  return (
    <div className="flex flex-col gap-4 xl:flex-row xl:justify-between">
      <FilterGroup
        listadoFiltros={TYPE_FILTERS_LIST_PROFILE_PAGE}
        handleFiltro={handleFiltro}
        valoresFiltros={valoresFiltros}
        nombreGrupo="tipo"
      />
      <FilterGroup
        listadoFiltros={GROUP_FILTERS_LIST_PROFILE_PAGE}
        handleFiltro={handleFiltro}
        valoresFiltros={valoresFiltros}
        nombreGrupo="grupo"
      />
    </div>
  );
}
