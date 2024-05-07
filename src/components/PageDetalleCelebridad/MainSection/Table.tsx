import { CombinedCredits } from "@/types/fetchTypes";
import { filtrarSelfs, ordenarPorAño } from "@/utils/UtilsParticipaciones";
import getYearFromDate from "@/utils/getYearFromDate";
import React from "react";

interface Props {
  titulo: string;
  participaciones: CombinedCredits;
  tipo: string;
}

export default function Table({ titulo, participaciones, tipo }: Props) {
  const ordenarParticipaciones = () => {
    let participacionesOrdenadas;
    participacionesOrdenadas =
      tipo === "interpretacion" ? participaciones.cast : participaciones.crew;
    participacionesOrdenadas = filtrarSelfs(participacionesOrdenadas);
    participacionesOrdenadas = ordenarPorAño(participacionesOrdenadas);
    return participacionesOrdenadas;
  };

  return (
    <div className="interpretaciones flex flex-col gap-4">
      <h2 className="text-xl md:text-2xl font-semibold capitalize">{titulo}</h2>
      <table>
        <tbody>
          {ordenarParticipaciones().map((interpretacion) => (
            <tr
              className="bg-secondary-black p-4 border-b-2 border-main-black"
              key={interpretacion.id}
            >
              <td className="text-main-white w-fit py-2 px-2 text-xs sm:text-base md:text-sm lg:text-base">
                {interpretacion.fecha && (
                  <p className="inline w-fit text-center">
                    {getYearFromDate(interpretacion.fecha)}
                  </p>
                )}
              </td>
              <td className="text-main-white py-2 px-2 text-xs sm:text-base md:text-sm lg:text-base">
                <span>-</span>
              </td>
              <td className="text-main-white font-semibold py-2 px-2 w-full text-xs sm:text-base md:text-sm lg:text-base">
                {"title" in interpretacion && interpretacion.title}
                {"name" in interpretacion && interpretacion.name}{" "}
                <span className="text-secondary-white font-normal">como</span>{" "}
                {"character" in interpretacion && interpretacion.character}
                {"job" in interpretacion && interpretacion.job}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
