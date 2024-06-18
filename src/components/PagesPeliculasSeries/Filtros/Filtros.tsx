"use client";
import React, { useEffect, useState } from "react";
import Generos from "./Generos";
import { objectToString } from "@/utils/objectToString";
import {
  BASE_URL_DISCOVER_MOVIE,
  BASE_URL_DISCOVER_SERIES,
  PROPIEDADES_FILTRO_ORDEN,
  PROPIEDADES_FILTRO_ORDEN_SERIES,
} from "@/constants/constants";
import FilterDropdown from "./FilterDropdown";
import { FiltrosFetch } from "@/types/localTypes";
import Ranges from "./Ranges";
import Dates from "./Dates";
import Botones from "./Botones";
import MainTag from "@/components/tags/MainTag";

const fechaActual = new Date();
const fechaFinal = new Date(fechaActual.setMonth(fechaActual.getMonth() + 6))
  .toISOString()
  .split("T")[0];

interface Props {
  setUrlFetch: React.Dispatch<React.SetStateAction<string>>;
  pageNumber: number;
  mediaType: "movie" | "tv";
}
const initialFiltros: FiltrosFetch = {
  page: 1,
  sort_by: "popularity.desc",
  "primary_release_date.lte": fechaFinal,
  "vote_average.gte": 0,
  "vote_average.lte": 10,
  "vote_count.gte": 0,
  "with_runtime.gte": 0,
  "with_runtime.lte": 360,
};

export default function Filtros({ setUrlFetch, pageNumber, mediaType }: Props) {
  const baseUrl =
    mediaType === "movie" ? BASE_URL_DISCOVER_MOVIE : BASE_URL_DISCOVER_SERIES;
  const propiedadesFiltroOrden =
    mediaType === "movie"
      ? PROPIEDADES_FILTRO_ORDEN
      : PROPIEDADES_FILTRO_ORDEN_SERIES;

  const [ordenVisible, setOrdenVisible] = useState<boolean>(false);
  const [filtrosVisible, setFiltrosVisible] = useState<boolean>(false);
  const [filtros, setFiltros] = useState<FiltrosFetch>(initialFiltros);

  useEffect(() => {
    if (pageNumber === filtros.page) return;
    updateFilters(pageNumber);
  }, [pageNumber]);

  const handleOrden = (valor: string) => {
    setFiltros((prevFiltros) => ({
      ...prevFiltros,
      ["sort_by"]: valor,
    }));
  };

  const updateUrl = (filtros: FiltrosFetch) => {
    const stringFiltros = objectToString(filtros, "&");
    const nuevaUrl = `${baseUrl}${stringFiltros}`;
    setUrlFetch(nuevaUrl);
  };

  const updateFilters = (pageNumber: number) => {
    const nuevosFiltros = { ...filtros };
    nuevosFiltros.page = pageNumber;
    updateUrl(nuevosFiltros);
  };

  const resetFilters = () => {
    setFiltros(initialFiltros);
    updateUrl(initialFiltros);
  };

  return (
    <div className="filtros flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:justify-between relative">
      <FilterDropdown
        dropdownVisible={ordenVisible}
        setDropdownVisible={setOrdenVisible}
        nombreFiltro="ordenar"
        customStyles={`grid sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-x-12  ${
          ordenVisible ? "sm:top-14" : "sm:top-4"
        }`}
      >
        {propiedadesFiltroOrden.map((item) => (
          <div className="flex items-center gap-2" key={item.id}>
            <span className="text-sm capitalize">{item.nombre}:</span>
            <ul className="flex gap-2">
              {item.filtros.map((filtro) => (
                <li
                  key={filtro.id}
                  onClick={() => {
                    handleOrden(filtro.nombre);
                  }}
                >
                  <MainTag
                    customStyles={`capitalize ${
                      filtros.sort_by === filtro.nombre
                        ? "!bg-main-color text-main-black hover:border-main-black/50"
                        : "!bg-main-black text-main-white hover:border-main-white/15"
                    } md:text-xs cursor-pointer !px-2 sm:px-3 border border-transparent shadow-sm shadow-transparent hover:shadow-main-black font-medium transition-colors
                    }`}
                  >
                    {filtro.id === 1 && item.letras
                      ? "A-Z"
                      : item.letras && "Z-A"}
                    {!item.letras && filtro.id === 1
                      ? "ascendente"
                      : !item.letras && "descendente"}
                  </MainTag>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </FilterDropdown>
      <FilterDropdown
        dropdownVisible={filtrosVisible}
        setDropdownVisible={setFiltrosVisible}
        nombreFiltro="filtrar"
        customStyles={`grid sm:grid-cols-2 lg:grid-cols-[1fr,1fr,1fr] lg:grid-rows-[auto,auto,auto] justify-between gap-8  ${
          ordenVisible ? "sm:top-44 xl:top-[138px]" : "sm:top-14"
        }`}
      >
        <>
          <Generos
            setFiltros={setFiltros}
            filtros={filtros}
            mediaType={mediaType}
            initialFiltros={initialFiltros}
          />

          <Dates
            filtros={filtros}
            setFiltros={setFiltros}
            initialFiltros={initialFiltros}
          />
          <Ranges
            filtros={filtros}
            setFiltros={setFiltros}
            initialFiltros={initialFiltros}
          />
        </>
      </FilterDropdown>
      <Botones
        updateFilters={updateFilters}
        ordenVisible={ordenVisible}
        filtrosVisible={filtrosVisible}
        resetFilters={resetFilters}
      />
    </div>
  );
}
