import { KnownFor } from "@/types/fetchTypes";
import React from "react";

interface Props {
  nombre: string;
  apariciones?: KnownFor[];
  personaje?: string;
}

export default function ContentCelebridad({
  nombre,
  apariciones,
  personaje,
}: Props) {
  return (
    <div className="main-content flex flex-col gap-1 sm:gap-2 z-[2] relative">
      <h1
        className={`line-clamp-1   ${
          personaje
            ? "text-center text-sm sm:text-base md:text-sm xl:text-sm"
            : "md:text-lg xl:text-xl"
        }`}
      >
        {nombre}
      </h1>
      {apariciones && (
        <ul className="conocido-por relative flex flex-wrap gap-3 gap-y-1 max-h-[36px] overflow-hidden">
          {apariciones?.map((aparicion) => (
            <li key={aparicion.id} className="text-xs line-clamp-1">
              {aparicion.name || aparicion.title}
            </li>
          ))}
        </ul>
      )}
      {personaje && (
        <span className="text-secondary-white text-xs text-center line-clamp-1 sm:text-sm md:text-xs">
          {personaje}
        </span>
      )}
    </div>
  );
}
