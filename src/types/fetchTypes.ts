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

export interface Tendencias {
  page: number;
  results: Tendencia[];
  total_pages: number;
  total_results: number;
}

export interface Tendencia {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title?: string;
  original_language: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date?: Date | string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
  original_name?: string;
  first_air_date?: Date | string;
  origin_country?: string[];
  gender?: number;
  known_for_department?: KnownForDepartment;
  profile_path?: null | string;
  known_for?: KnownFor[];
}

export interface KnownFor {
  adult: boolean;
  backdrop_path: null | string;
  id: number;
  title?: string;
  original_language: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date?: Date | string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
  original_name?: string;
  first_air_date?: Date | string;
  origin_country?: string[];
}

export enum KnownForMediaType {
  Movie = "movie",
  Tv = "tv",
}

export enum OriginalLanguage {
  En = "en",
  Es = "es",
  Ja = "ja",
  Ko = "ko",
  Tl = "tl",
}

export enum KnownForDepartment {
  Acting = "Acting",
  Directing = "Directing",
  Sound = "Sound",
}

export enum ResultMediaType {
  Person = "person",
}
