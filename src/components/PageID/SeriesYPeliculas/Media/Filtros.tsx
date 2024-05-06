import { ImagenesMedia } from "@/types/fetchTypes";
import React from "react";

interface Props {
  setImagenesMedia: React.Dispatch<React.SetStateAction<string[]>>;
  imagenes: ImagenesMedia;
  currentMedia: string;
  setCurrentMedia: React.Dispatch<React.SetStateAction<string>>;
}

const listadoFiltros = [
  {
    id: 1,
    nombre: "wallpapers",
  },
  {
    id: 2,
    nombre: "posters",
  },
  {
    id: 3,
    nombre: "videos",
  },
];

export default function Filtros({
  setImagenesMedia,
  imagenes,
  currentMedia,
  setCurrentMedia,
}: Props) {
  const handleFiltro = (nombre: string) => {
    setCurrentMedia(nombre);
    let arrayDeImagenes;
    if (nombre === "wallpapers") {
      arrayDeImagenes = imagenes.backdrops.map((imagen) => imagen.file_path);
      setImagenesMedia(arrayDeImagenes);
    } else if (nombre === "posters") {
      arrayDeImagenes = imagenes.posters.map((imagen) => imagen.file_path);
      setImagenesMedia(arrayDeImagenes);
    }
  };

  return (
    <ul className="filtros flex gap-4">
      {listadoFiltros.map((filtro) => (
        <li
          key={filtro.id}
          onClick={() => {
            handleFiltro(filtro.nombre);
          }}
          className={`capitalize transition-colors ${
            filtro.nombre === currentMedia
              ? "text-main-color"
              : "text-main-white"
          }`}
        >
          {filtro.nombre}
        </li>
      ))}
    </ul>
  );
}
