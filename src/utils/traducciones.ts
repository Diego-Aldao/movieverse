interface ObjetoTraduccion {
  [key: string]: string;
}

export const estadosPeliculas: ObjetoTraduccion = {
  Canceled: "Cancelada",
  "In Production": "En producción",
  Planned: "Programada",
  "Post Production": "Posproducción",
  Released: "Estrenada",
  Rumored: "Se rumorea",
};

export const estadosSeries: ObjetoTraduccion = {
  Canceled: "Cancelado",
  Ended: "Finalizado",
  "In Production": "En producción",
  Pilot: "Piloto",
  Planned: "Programado",
  "Returning Series": "Volverá a emitirse",
};

export const tipoDeSerie: ObjetoTraduccion = {
  Documentary: "Documental",
  Miniseries: "Miniseries",
  News: "Noticias",
  Reality: "Realidad",
  Scripted: "Con guion",
  "Talk Show": "Programa de entrevistas",
  Video: "Vídeo",
};

export const departamentos: ObjetoTraduccion = {
  Acting: "Interpretación",
  Actors: "Actores",
  Art: "Arte",
  Camera: "Cámara",
  "Costume & Make-Up": "Vestuario y maquillaje",
  Creator: "Creador",
  Crew: "Equipo",
  Directing: "Dirección",
  Editing: "Edición",
  Lighting: "Iluminación",
  Production: "Producción",
  Sound: "Sonido",
  "Visual Effects": "Efectos visuales",
  Writing: "Guion",
};
