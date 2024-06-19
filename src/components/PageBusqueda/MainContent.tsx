"use client";
import { BASE_URL_BUSQUEDA } from "@/constants/constants";
import FetchDataClient from "@/services/fetchDataClient";
import { Busqueda, SearchResults } from "@/types/fetchTypes";
import { getResultadosAgrupados } from "@/utils/getResultadosAgrupados";
import React, { useEffect, useState } from "react";
import ResultadosMultimedia from "./ResultadosMultimedia";
import ResultadosCelebridades from "./ResultadosCelebridades";
import SkeletonBusqueda from "../skeletons/PageBusqueda/SkeletonBusqueda";

interface Props {
  query: string | string[];
}
interface ResultadosAgrupados {
  [key: string]: Busqueda[];
}

interface Filtro {
  id: number;
  nombre: string;
  media_type: string;
}

const listadoFiltros: Filtro[] = [
  {
    id: 1,
    nombre: "peliculas",
    media_type: "movie",
  },
  {
    id: 2,
    nombre: "series",
    media_type: "tv",
  },
  {
    id: 3,
    nombre: "celebridades",
    media_type: "person",
  },
];

export default function MainContent({ query }: Props) {
  const url = `${BASE_URL_BUSQUEDA}${query}&include_adult=false&language=es-MX&page=1`;
  const { data: resultadosBusqueda, loading } =
    FetchDataClient<SearchResults>(url);
  const [currentResultados, setCurrentResultados] = useState<Busqueda[]>();
  const [allRestults, setAllResults] = useState<ResultadosAgrupados>({});
  const [currentFilter, setCurrentFilter] = useState<Filtro>();

  useEffect(() => {
    if (!resultadosBusqueda) return;
    const resultadosAgrupados = getResultadosAgrupados(
      resultadosBusqueda.results
    );
    setAllResults(resultadosAgrupados);
  }, [resultadosBusqueda]);

  useEffect(() => {
    if (!allRestults) return;
    if (Object.keys(allRestults).length == 0) return;
    const currentType = allRestults.movie
      ? listadoFiltros[0]
      : allRestults.tv
      ? listadoFiltros[1]
      : allRestults.person && listadoFiltros[2];
    const currentKey = currentType.media_type;
    setCurrentResultados(allRestults[currentKey]);
    setCurrentFilter(currentType);
  }, [allRestults]);

  const handleFiltro = (filtro: Filtro) => {
    if (!allRestults) return;
    const currentKey = filtro.media_type;
    setCurrentResultados(allRestults[currentKey]);
    setCurrentFilter(filtro);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {loading && <SkeletonBusqueda />}
      {currentResultados && (
        <>
          <ul className="flex flex-wrap gap-4 justify-center">
            {listadoFiltros.map((filtro) => (
              <li key={filtro.id}>
                <button
                  disabled={!allRestults[filtro.media_type] && true}
                  onClick={() => {
                    handleFiltro(filtro);
                  }}
                  className={`text-xs lg:text-base p-1 px-2  rounded-md flex gap-2 sm:gap-4 items-center lg:justify-between ${
                    currentFilter?.media_type === filtro.media_type
                      ? "bg-main-color text-main-black"
                      : "bg-[#333333] text-main-white"
                  }`}
                >
                  <span className="first-letter:uppercase text-inherit">
                    {filtro.nombre}
                  </span>
                  <span className="bg-secondary-black p-1 px-2 rounded-md ">
                    {allRestults && (
                      <>{allRestults[filtro.media_type]?.length || 0}</>
                    )}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          {currentFilter && currentFilter.nombre !== "celebridades" ? (
            <ResultadosMultimedia
              resultados={currentResultados}
              media_type={currentFilter.nombre}
            />
          ) : (
            <ResultadosCelebridades resultados={currentResultados} />
          )}
        </>
      )}
    </div>
  );
}
