export interface Filtro {
  tiempo: string;
  tipo: string;
}
export interface MiniaturaMedia {
  id: string;
  key: string;
  imagenPequeña: string;
  imagenGrande: string;
  nombre: string;
}

export interface RedesSociales {
  [key: string]: string | null | number;
}
