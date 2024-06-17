import React from "react";
import listadoGeneros from "@/generos.json";
import { useInView } from "react-intersection-observer";
import MainTag from "@/components/tags/MainTag";

interface Props {
  generos: number[] | undefined;
}

export default function Generos({ generos }: Props) {
  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: "-50px -150px -50px -150px",
  });
  const currentGeneros = listadoGeneros.filter((genero) => {
    return generos?.includes(genero.id);
  });
  return (
    <ul
      ref={ref}
      className={`generos transition-all delay-75 relative flex items-center gap-2 w-fit ${
        inView ? "bottom-0 opacity-100" : "-bottom-4 opacity-0"
      }`}
    >
      {currentGeneros.slice(0, 3).map((genero) => (
        <li key={genero.id}>
          <MainTag>{genero.name}</MainTag>
        </li>
      ))}
    </ul>
  );
}
