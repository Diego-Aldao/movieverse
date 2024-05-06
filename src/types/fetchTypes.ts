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

export interface Series {
  page: number;
  results: Serie[];
  total_pages: number;
  total_results: number;
}

export interface Serie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  first_air_date?: Date | string;
  name?: string;
  vote_average?: number;
  vote_count?: number;
}

export interface Audiovisual {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title?: string;
  original_language: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type?: string;
  genre_ids: number[];
  popularity: number;
  release_date?: Date;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
  original_name?: string;
  first_air_date?: Date;
  origin_country?: string[];
}

export interface Celebridades {
  page: number;
  results: Celebridad[];
  total_pages: number;
  total_results: number;
}

export interface Celebridad {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  known_for: KnownFor[];
}

export interface DetallePelicula {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | string;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Videos {
  id: number;
  results: Video[];
}
export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface Similares {
  page: number;
  results: Similar[];
  total_pages: number;
  total_results: number;
}

export interface Similar {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface RepartoPelicula {
  id: number;
  cast: Reparto[];
  crew: Reparto[];
}
export interface Reparto {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: string;
  job?: string;
}

export interface ImagenesMedia {
  backdrops: ImagenMedia[];
  id: number;
  logos: ImagenMedia[];
  posters: ImagenMedia[];
}

export interface ImagenMedia {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}
