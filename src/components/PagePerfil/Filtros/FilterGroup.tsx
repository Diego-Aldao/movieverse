import { FiltroPerfil } from "@/types/localTypes";
import React from "react";

interface Props {
  listadoFiltros: FiltroPerfil[];
  handleFiltro: (valor: string, categoria: string) => void;
  valoresFiltros: { [key: string]: string };
  nombreGrupo: string;
}

export default function FilterGroup({
  listadoFiltros,
  handleFiltro,
  valoresFiltros,
  nombreGrupo,
}: Props) {
  return (
    <ul className="filtros flex flex-wrap gap-2">
      <li className="capitalize text-sm">{nombreGrupo}:</li>
      {listadoFiltros.map((filtro) => (
        <li
          key={filtro.id}
          onClick={() => {
            handleFiltro(filtro.valor, nombreGrupo);
          }}
          className={`text-xs capitalize px-3 py-1 rounded-full border border-main-white border-opacity-15 cursor-pointer transition-colors ${
            valoresFiltros[nombreGrupo] === filtro.valor
              ? "text-main-black bg-main-color"
              : "text-main-white bg-main-black"
          }`}
        >
          {filtro.nombre}
        </li>
      ))}
    </ul>
  );
}
