"use client";
import { TYPE_FILTERS_LIST_PROFILE_PAGE } from "@/constants/constants";
import { Coleccion } from "@/types/localTypes";
import React, { useEffect, useState } from "react";

interface Props {
  setCurrentColeccion: React.Dispatch<
    React.SetStateAction<Coleccion[] | undefined>
  >;
  coleccion: Coleccion[] | undefined;
}

export default function Filtros({ coleccion, setCurrentColeccion }: Props) {
  const [currentFiltro, setCurrentFiltro] = useState<string>("todos");

  const handleFiltro = (nombre: string) => {
    if (!coleccion) return;
    if (nombre === "todos") {
      setCurrentColeccion(coleccion);
    } else {
      const coleccionFiltrada = coleccion.filter(
        (item) => item.media_type === nombre
      );
      setCurrentColeccion(coleccionFiltrada);
    }
    setCurrentFiltro(nombre);
  };

  useEffect(() => {
    setCurrentFiltro("todos");
  }, [coleccion]);

  return (
    <ul className="filtros flex flex-wrap gap-2">
      {TYPE_FILTERS_LIST_PROFILE_PAGE.map((filtro) => (
        <li
          key={filtro.id}
          onClick={() => {
            handleFiltro(filtro.valor);
          }}
          className={`text-xs capitalize px-3 py-1 rounded-full border border-main-white border-opacity-15 cursor-pointer transition-colors ${
            currentFiltro === filtro.valor
              ? "bg-main-color text-main-black"
              : "bg-main-black text-main-white"
          }`}
        >
          {filtro.nombre}
        </li>
      ))}
    </ul>
  );
}
