import React from "react";
import ListadoFooter from "./ListadoFooter";
import Copy from "./Copy";
import Logo from "@/components/Logo";
import { INTERNAL_NAVIGATION } from "@/constants/constants";

const populares = [
  {
    id: 1,
    nombre: "sydney sweeney",
    destino: "/celebridades/115440",
  },
  {
    id: 2,
    nombre: "attack on titan",
    destino: "/series/1429",
  },
  {
    id: 3,
    nombre: "duna: parte dos",
    destino: "/peliculas/693134",
  },
  {
    id: 4,
    nombre: "breaking bad",
    destino: "/series/1396",
  },
];

export default function Footer() {
  return (
    <footer className="relative self-end w-full mt-auto">
      <span className="linea bg-gradient-to-r from-main-black via-main-color to-main-black w-full h-[1px] absolute top-0 left-0"></span>
      <div className="contenido-footer px-4 pt-10 pb-2 md:px-8 lg:px-10 flex flex-col sm:flex-row flex-wrap gap-8 max-w-7xl mx-auto 2xl:px-0">
        <div className="main flex-1">
          <Logo sloganOn={true} />
        </div>
        <ListadoFooter titulo="navegacion" listado={INTERNAL_NAVIGATION} />
        <ListadoFooter titulo="populares" listado={populares} />
        <Copy />
      </div>
    </footer>
  );
}
