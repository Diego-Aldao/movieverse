"use client";
import React, { useEffect, useState } from "react";
import generosPeliculas from "@/generos.json";
import generosSeries from "@/generosTV.json";
import { FiltrosFetch } from "@/types/localTypes";

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
    mediaType === "movie" ? generosPeliculas : generosSeries;
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
    <div className="generos flex flex-col gap-2 max-w-[800px xl:w-[60%]">
      <span className="text-sm capitalize">géneros:</span>
      <ul className="flex flex-wrap gap-2">
        {listadoGeneros.map((genero) => (
          <li
            key={genero.id}
            className={`py-1 px-3 text-xs rounded-full capitalize transition-colors cursor-pointer hover:border-secondary-white border border-transparent ${
              currentGeneros.includes(genero.id)
                ? "bg-main-color text-main-black"
                : "bg-main-black text-main-white"
            }`}
            onClick={() => {
              handleGeneros(genero.id);
            }}
          >
            {genero.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
