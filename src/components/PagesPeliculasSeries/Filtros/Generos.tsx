"use client";
import React, { useState } from "react";
import generosPeliculas from "@/generos.json";
import generosSeries from "@/generosTV.json";
import { Filtros } from "./Filtros";

interface Props {
  setFiltros: React.Dispatch<React.SetStateAction<Filtros>>;
  filtros: Filtros;
  mediaType: "movie" | "tv";
}

export default function Generos({ filtros, setFiltros, mediaType }: Props) {
  const listadoGeneros =
    mediaType === "movie" ? generosPeliculas : generosSeries;
  const [currentGeneros, setCurrentGeneros] = useState<number[]>([]);

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
    <div className="generos flex flex-col gap-2 lg:w-[62%]">
      <span className="text-sm capitalize">géneros:</span>
      <ul className="flex flex-wrap gap-2">
        {listadoGeneros.map((genero) => (
          <li
            key={genero.id}
            className={`py-1 px-3 text-xs rounded-full capitalize transition-colors ${
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
