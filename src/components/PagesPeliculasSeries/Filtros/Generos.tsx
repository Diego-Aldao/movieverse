"use client";
import React, { useEffect, useState } from "react";
import { FiltrosFetch } from "@/types/localTypes";
import MainTag from "@/components/tags/MainTag";
import { GENEROS_PELICULAS, GENEROS_SERIES } from "@/constants/constants";

interface Props {
  setFiltros: React.Dispatch<React.SetStateAction<FiltrosFetch>>;
  filtros: FiltrosFetch;
  mediaType: "movie" | "tv";
  initialFiltros: FiltrosFetch;
}

export default function Generos({
  filtros,
  initialFiltros,
  setFiltros,
  mediaType,
}: Props) {
  const listadoGeneros =
    mediaType === "movie" ? GENEROS_PELICULAS : GENEROS_SERIES;
  const [currentGeneros, setCurrentGeneros] = useState<number[]>([]);

  useEffect(() => {
    if (filtros === initialFiltros) setCurrentGeneros([]);
  }, [filtros, initialFiltros]);

  const handleGeneros = (valor: number) => {
    let nuevoArrayGeneros;
    if (currentGeneros.includes(valor)) {
      nuevoArrayGeneros = currentGeneros.filter((genero) => genero !== valor);
    } else {
      nuevoArrayGeneros = [...currentGeneros, valor];
    }
    const stringGeneros = nuevoArrayGeneros.join(",");
    setCurrentGeneros(nuevoArrayGeneros);
    if (nuevoArrayGeneros.length < 1) {
      const nuevosFiltros = { ...filtros };
      delete nuevosFiltros["with_genres"];
      setFiltros(nuevosFiltros);
    } else {
      setFiltros((prevFiltros) => ({
        ...prevFiltros,
        with_genres: stringGeneros,
      }));
    }
  };
  return (
    <div className="generos flex flex-col gap-2 sm:col-span-2 lg:col-span-2">
      <span className="text-sm capitalize">géneros</span>
      <ul className="flex flex-wrap gap-2 xl:gap-y-3">
        {listadoGeneros.map((genero) => (
          <li
            key={genero.id}
            onClick={() => {
              handleGeneros(genero.id);
            }}
          >
            <MainTag
              customStyles={`
                ${
                  currentGeneros.includes(genero.id)
                    ? "!bg-main-color text-main-black hover:border-main-black/50"
                    : "!bg-main-black text-main-white hover:border-main-white/15"
                } md:text-xs cursor-pointer  border border-transparent shadow-sm shadow-transparent hover:shadow-main-black font-medium transition-colors

                `}
            >
              {genero.name}
            </MainTag>
          </li>
        ))}
      </ul>
    </div>
  );
}
