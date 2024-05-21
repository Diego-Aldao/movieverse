import { CastCelebridad, CrewCelebridad } from "@/types/fetchTypes";

export const ordenarPorPopularidad = (
  participaciones: CrewCelebridad[] | CastCelebridad[]
) => {
  return participaciones.sort((a, b) => b.popularity - a.popularity);
};

export const filtrarSelfs = (
  participaciones: CrewCelebridad[] | CastCelebridad[]
) => {
  return participaciones.filter(
    (participacion) =>
      !participacion.genre_ids.includes(10767) &&
      !participacion.genre_ids.includes(10763) &&
      "character" in participacion &&
      !participacion.character?.includes("Self")
  );
};

export const unirFechasDeEstreno = (
  participaciones: CrewCelebridad[] | CastCelebridad[]
) => {
  return participaciones.map((participacion) => {
    if ("release_date" in participacion) {
      participacion.fecha = participacion.release_date;
    } else if ("first_air_date" in participacion) {
      participacion.fecha = participacion.first_air_date;
    }
    return participacion;
  });
};

export const ordenarPorAño = (
  participaciones: CastCelebridad[] | CrewCelebridad[]
) => {
  let participacionesOrdenadas;
  participacionesOrdenadas = unirFechasDeEstreno(participaciones);
  participacionesOrdenadas = participacionesOrdenadas
    .filter((interpretacion) => interpretacion.fecha)
    .sort((a, b) => {
      if (a.fecha && b.fecha) {
        return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
      } else if (a.fecha) {
        return -1; // 'a' tiene fecha, 'b' no, 'a' viene antes
      } else if (b.fecha) {
        return 1; // 'b' tiene fecha, 'a' no, 'b' viene antes
      } else {
        return 0; // Ambos no tienen fecha, no se cambia el orden
      }
    });
  return participacionesOrdenadas;
};

export const quitarParticipacionesSinImagen = (
  participaciones: CrewCelebridad[] | CastCelebridad[]
) => {
  return participaciones.filter(
    (participacion) => participacion.backdrop_path !== null
  );
};

export const ordenarParticipaciones = (
  participaciones: CrewCelebridad[] | CastCelebridad[]
) => {
  participaciones = filtrarSelfs(participaciones);
  participaciones = ordenarPorPopularidad(participaciones);
  participaciones = ordenarPorAño(participaciones);
  participaciones = quitarParticipacionesSinImagen(participaciones);
  return participaciones;
};
