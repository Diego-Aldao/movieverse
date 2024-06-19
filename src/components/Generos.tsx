import { GENEROS_PELICULAS, GENEROS_SERIES } from "@/constants/constants";
import React from "react";

interface Props {
  tipo: string;
  listaGenerosNumericos: number[];
  stylesLista?: string;
  stylesItem?: string;
  cantidad: number;
}

export default function Generos({
  tipo,
  listaGenerosNumericos,
  stylesItem,
  stylesLista,
  cantidad,
}: Props) {
  const currentGeneros = tipo === "tv" ? GENEROS_SERIES : GENEROS_PELICULAS;
  const generosFiltrados = currentGeneros
    .filter((genero) => {
      return listaGenerosNumericos.includes(genero.id);
    })
    .slice(0, cantidad);

  return (
    <ul className={`flex items-center gap-2 ${stylesLista}`}>
      {generosFiltrados.map((genero) => (
        <li
          className={`px-3 rounded-full py-1 line-clamp-1 bg-[#2425267e] ${stylesItem}`}
          key={genero.id}
        >
          {genero.name}
        </li>
      ))}
    </ul>
  );
}
