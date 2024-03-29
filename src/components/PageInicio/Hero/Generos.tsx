import React from "react";
import listadoGeneros from "@/generos.json";
import { useInView } from "react-intersection-observer";

interface Props {
  generos: number[] | undefined;
}

export default function Generos({ generos }: Props) {
  const [ref, inView] = useInView({ threshold: 0 });
  const currentGeneros = listadoGeneros.filter((genero) => {
    return generos?.includes(genero.id);
  });
  return (
    <ul
      ref={ref}
      className={`generos transition-all delay-150 relative flex items-center gap-2 ${
        inView ? "bottom-0 opacity-100" : "bottom-10 opacity-0"
      }`}
    >
      {currentGeneros.slice(0, 3).map((genero) => (
        <li
          className="capitalize px-3 py-1 text-xs bg-[#2425267e] border-main-white border-opacity-50 border rounded-full md:px-4 md:text-sm"
          key={genero.id}
        >
          {genero.name}
        </li>
      ))}
    </ul>
  );
}
