import { Cast, Crew } from "@/types/fetchTypes";

export const ordenarPorPopularidad = (participaciones: Crew[] | Cast[]) => {
  return participaciones.sort((a, b) => b.popularity - a.popularity);
};

export const filtrarSelfs = (participaciones: Crew[] | Cast[]) => {
  return participaciones.filter(
    (participacion) =>
      !participacion.genre_ids.includes(10767) &&
      !participacion.genre_ids.includes(10763)
  );
};

export const unirFechasDeEstreno = (participaciones: Crew[] | Cast[]) => {
  return participaciones.map((participacion) => {
    if ("release_date" in participacion) {
      participacion.fecha = participacion.release_date;
    } else if ("first_air_date" in participacion) {
      participacion.fecha = participacion.first_air_date;
    }
    return participacion;
  });
};

export const ordenarPorAño = (participaciones: Crew[] | Cast[]) => {
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
  participaciones: Crew[] | Cast[]
) => {
  return participaciones.filter(
    (participacion) => participacion.backdrop_path !== null
  );
};
