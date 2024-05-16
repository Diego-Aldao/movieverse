"use client";
import { CastCelebridad, CrewCelebridad } from "@/types/fetchTypes";
import {
  filtrarSelfs,
  ordenarPorAño,
  unirFechasDeEstreno,
} from "@/utils/UtilsParticipaciones";
import getYearFromDate from "@/utils/getYearFromDate";
import { departamentos } from "@/utils/traducciones";
import Link from "next/link";
import React from "react";
import TableRoles from "./TableRoles";
//sacar el use client

interface Props {
  crew: CrewCelebridad[];
}

interface CrewAgrupado {
  departamento: string;
  participaciones: CrewCelebridad[];
}

export default function TablesCrew({ crew }: Props) {
  // Este reduce lo uso para agrupar los objetos por la propiedad "job" de cada objeto, y asi crear una tabla para cada "job"
  const CrewAgrupados: CrewAgrupado[] = crew.reduce<CrewAgrupado[]>(
    (acumulador, objeto) => {
      const departamento: string = objeto.department;

      // Busco si ya existe un objeto en el array acumulador con el mismo job
      const index: number = acumulador.findIndex(
        (item) => item.departamento === departamento
      );

      // Si no existe, creo un nuevo objeto y lo agrego al array acumulador
      if (index === -1) {
        acumulador.push({
          departamento: departamento,
          participaciones: [objeto],
        });
      } else {
        // Si existe, agrego el objeto actual al array
        acumulador[index].participaciones.push(objeto);
      }

      return acumulador;
    },
    []
  );

  return (
    <>
      {CrewAgrupados.map((objetoCrew, i) => (
        <React.Fragment key={i}>
          <TableRoles
            titulo={departamentos[objetoCrew.departamento]}
            participaciones={objetoCrew.participaciones}
          />
        </React.Fragment>
      ))}
    </>
  );
}
