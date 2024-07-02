"use client";
import React from "react";
import { departamentos } from "@/utils/traducciones";
import { useDateFormatter } from "@react-aria/i18n";

interface Props {
  nombre: string;
  conocidoPor: string;
  cantidadDeParticipaciones: number;
  genero: number;
  nacimiento: string;
  deceso: string | null;
  tambienConocidoComo: string[];
  lugarDeNacimiento: string;
}

const generos: { [key: string]: string } = {
  0: "no especifica",
  1: "mujer",
  2: "hombre",
  3: "no binario",
};

export default function SubInfo({
  conocidoPor,
  cantidadDeParticipaciones,
  genero,
  nacimiento,
  deceso,
  tambienConocidoComo,
  nombre,
  lugarDeNacimiento,
}: Props) {
  let formatter = useDateFormatter({ dateStyle: "long" });

  const nacimientoToDate = new Date(nacimiento);

  const nacimientoFormated = formatter.format(nacimientoToDate);

  return (
    <div className="sub-info px-4 flex flex-col gap-4 sm:px-0">
      <h2 className="hidden sm:inline-block md:hidden text-2xl capitalize font-semibold">
        {nombre}
      </h2>
      <ul className="flex flex-col gap-2">
        <li className="flex flex-col">
          <span className="first-letter:uppercase text-lg">
            {genero === 1 ? "conocida" : genero === 2 ? "conocido" : "conocidx"}{" "}
            por
          </span>
          <span className="first-letter:uppercase text-sm text-secondary-white">
            {departamentos[conocidoPor]}
          </span>
        </li>
        <li className="flex flex-col">
          <span className="first-letter:uppercase text-lg">
            cantidad de participaciones
          </span>
          <span className="first-letter:uppercase text-sm text-secondary-white">
            {cantidadDeParticipaciones}
          </span>
        </li>
        <li className="flex flex-col">
          <span className="first-letter:uppercase text-lg">género</span>
          <span className="first-letter:uppercase text-sm text-secondary-white">
            {generos[genero]}
          </span>
        </li>
        <li className="flex flex-col">
          <span className="first-letter:uppercase text-lg">nacimiento</span>
          <span className="first-letter:uppercase text-sm text-secondary-white">
            {nacimientoFormated}
          </span>
        </li>
        <li className="flex flex-col">
          <span className="first-letter:uppercase text-lg">
            lugar de nacimiento
          </span>
          <span className="first-letter:uppercase text-sm text-secondary-white">
            {lugarDeNacimiento}
          </span>
        </li>
        {deceso && (
          <li className="flex flex-col">
            <span className="first-letter:uppercase text-lg">
              fallecimiento
            </span>
            <span className="first-letter:uppercase text-sm text-secondary-white">
              {deceso}
            </span>
          </li>
        )}

        <li className="flex flex-col">
          <span className="first-letter:uppercase text-lg">
            también conocido como
          </span>
          {tambienConocidoComo.map((nombre, index) => (
            <span
              className="first-letter:uppercase text-sm text-secondary-white"
              key={index}
            >
              {nombre}
            </span>
          ))}
        </li>
      </ul>
    </div>
  );
}
