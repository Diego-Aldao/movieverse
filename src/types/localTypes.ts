export interface Filtro {
  tiempo: string;
  tipo: string;
}
export interface ValoresFiltros {
  [key: string]: string;
}

export interface FiltroPerfil {
  id: number;
  nombre: string;
  valor: string;
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

export interface FiltrosFetch {
  page: number;
  sort_by: string;
  with_genres?: string;
  "primary_release_date.gte"?: string;
  "primary_release_date.lte"?: string;
  "vote_average.gte"?: number;
  "vote_average.lte"?: number;
  "vote_count.gte"?: number;
  "with_runtime.gte"?: number;
  "with_runtime.lte"?: number;
}

export interface Coleccion {
  id: number;
  nombre: string;
  img_path: string;
  media_type: string;
}

export interface Genero {
  id: number;
  name: string;
}

//TYPES PARA LOS ITEMS DE LA PAGINA BUSQUEDA
export interface ItemLista {
  id: number;
  nombre: string;
  destino: string;
}
