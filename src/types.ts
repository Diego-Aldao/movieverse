export interface Estrenos {
  dates: Fechas;
  page: number;
  results: Estreno[];
}

export interface Fechas {
  maximum: Date;
  minimum: Date;
}

export interface Estreno {
  adult: boolean;
  backdrop_path?: null | string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: Date;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  backdrop_pa?: null;
}
