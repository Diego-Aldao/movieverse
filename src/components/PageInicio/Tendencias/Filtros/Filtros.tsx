import React from "react";
import { Filtro } from "@/types/localTypes";
import ItemFiltro from "./ItemFiltro";

const filtrosTiempo = [
  {
    id: 1,
    nombre: "hoy",
    valorFiltro: "day",
  },
  {
    id: 2,
    nombre: "esta semana",
    valorFiltro: "week",
  },
];

const filtrosTipo = [
  {
    id: 1,
    nombre: "todos",
    valorFiltro: "all",
  },
  {
    id: 2,
    nombre: "peliculas",
    valorFiltro: "movie",
  },
  {
    id: 3,
    nombre: "series",
    valorFiltro: "tv",
  },
];

interface Props {
  filtros: Filtro;
  setFiltros: React.Dispatch<React.SetStateAction<Filtro>>;
}

export default function Filtros({ filtros, setFiltros }: Props) {
  const handleClick = (valorFiltro: string, nombreFiltro: string) => {
    if (nombreFiltro === "tipo") {
      setFiltros({
        ...filtros,
        tipo: valorFiltro,
      });
    } else {
      setFiltros({
        ...filtros,
        tiempo: valorFiltro,
      });
    }
  };

  const selectedTipo = filtros.tipo;
  const selectedTiempo = filtros.tiempo;

  return (
    <div className="filtros flex flex-col gap-4 md:flex-row md:justify-between">
      <div className="tiempo flex gap-2 items-center">
        <span className="hidden md:inline-block capitalize text-secondary-white pb-1">
          tiempo:
        </span>
        {filtrosTiempo.map(({ id, nombre, valorFiltro }) => (
          <ItemFiltro
            key={id}
            currentFiltro={selectedTiempo}
            nombreFiltro={nombre}
            valorFiltro={valorFiltro}
            categoriaFiltro="tiempo"
            handleClick={handleClick}
          />
        ))}
      </div>
      <div className="tipo flex gap-2 items-center flex-wrap">
        <span className="hidden md:inline-block text-secondary-white capitalize pb-1">
          tipo:
        </span>
        {filtrosTipo.map(({ id, nombre, valorFiltro }) => (
          <ItemFiltro
            key={id}
            currentFiltro={selectedTipo}
            nombreFiltro={nombre}
            valorFiltro={valorFiltro}
            categoriaFiltro="tipo"
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}
