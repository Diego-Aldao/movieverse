import { CastCelebridad, CrewCelebridad } from "@/types/fetchTypes";
import {
  ordenarPorAño,
  unirFechasDeEstreno,
} from "@/utils/UtilsParticipaciones";
import getYearFromDate from "@/utils/getYearFromDate";
import Link from "next/link";
import React from "react";

interface Props {
  titulo: string;
  participaciones: CastCelebridad[] | CrewCelebridad[];
}

export default function TableRoles({ titulo, participaciones }: Props) {
  const participacionesOrdenadas = ordenarPorAño(
    unirFechasDeEstreno(participaciones)
  );
  return (
    <div className="interpretaciones flex flex-col gap-4">
      <h2 className="text-xl md:text-2xl font-semibold capitalize">{titulo}</h2>
      <table>
        <tbody>
          {participacionesOrdenadas.map((participacion, i) => (
            <tr
              className="bg-secondary-black p-4 border-b-2 border-main-black hover:bg-hover transition-colors"
              key={participacion.id + i}
            >
              <td className="text-main-white w-fit py-2 px-2 text-xs sm:text-base md:text-sm lg:text-base">
                {participacion.fecha && (
                  <p className="inline w-fit text-center">
                    {getYearFromDate(participacion.fecha)}
                  </p>
                )}
              </td>
              <td className="text-main-white py-2 px-2 text-xs sm:text-base md:text-sm lg:text-base">
                <span>-</span>
              </td>

              {("title" in participacion || "name" in participacion) && (
                <td className="text-main-white font-semibold py-2 px-2 w-full text-xs sm:text-base md:text-sm lg:text-base">
                  <Link
                    href={`${
                      participacion.media_type === "movie"
                        ? "/peliculas"
                        : "/series"
                    }/${participacion.id}`}
                    className="hover:text-main-color transition-colors"
                  >
                    {"title" in participacion && participacion.title}
                    {"name" in participacion && participacion.name}{" "}
                  </Link>
                  {("character" in participacion || "job" in participacion) && (
                    <>
                      <span className="text-secondary-white font-normal">
                        como
                      </span>{" "}
                      <span>
                        {"character" in participacion &&
                          participacion.character}
                        {"job" in participacion && participacion.job}
                      </span>
                    </>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
