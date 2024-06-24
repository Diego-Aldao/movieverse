//PAGINA PRINCIPAL ESTRENOS
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
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

//PAGINA PRINCIPAL TENDENCIAS
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
  known_for_department?: string;
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

//PAGINA PRINCIPAL MEJORES SERIES & PAGINA SERIES
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
  name: string;
  vote_average?: number;
  vote_count?: number;
}

//PAGINA PRINCIPAL CELEBRIDADES
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

// PAGINA PELICULAS
export interface Peliculas {
  page: number;
  results: Pelicula[];
  total_pages: number;
  total_results: number;
}

export interface Pelicula {
  adult: boolean;
  backdrop_path: null | string;
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

//PAGINA DETALLE PELICULAS
export interface DetallePeliculas {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
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
  credits: Credits;
  external_ids: ExternalIDS;
  similar: Similar;
}
export interface Genre {
  id: number;
  name: string;
}
export interface ProductionCompany {
  id: number;
  logo_path: string;
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
export interface Credits {
  cast: CastPeliculas[];
  crew: CrewPeliculas[];
}
export interface CastPeliculas {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character: string;
  credit_id: string;
  order?: number;
  department?: string;
}
export interface CrewPeliculas {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  credit_id: string;
  order?: number;
  department?: string;
  job: string;
}
export interface ExternalIDS {
  imdb_id: string | null;
  wikidata_id: string | null;
  facebook_id: string | null;
  instagram_id: string | null;
  twitter_id: string | null;
}
export interface Similar {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
export interface Result {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: null | string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  origin_country?: string[];
  original_name?: string;
  first_air_date?: string;
  name?: string;
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

//PAGINA DETALLE CELEBRIDAD
export interface DetalleCelebridad {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: null;
  gender: number;
  homepage: null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
  external_ids: ExternalIDS;
  images: ImagesCelebridad;
  combined_credits: CombinedCredits;
}

export interface CombinedCredits {
  cast: CastCelebridad[];
  crew: CrewCelebridad[];
}

export interface CastCelebridad {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: null | string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  character?: string;
  credit_id: string;
  order?: number;
  media_type: string;
  origin_country?: string[];
  original_name?: string;
  first_air_date?: string;
  name?: string;
  episode_count?: number;
  fecha?: string;
}

export interface CrewCelebridad {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: null | string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credit_id: string;
  department: string;
  job: string;
  media_type: string;
  fecha?: string;
}

export interface ImagesCelebridad {
  profiles: Profile[];
}

export interface Profile {
  aspect_ratio: number;
  height: number;
  iso_639_1: null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

//PAGINA DETALLE SERIE
export interface DetalleSeries {
  adult: boolean;
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: any[] | number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: Date;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air: null;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Network[];
  production_countries: ProductionCountry[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
  aggregate_credits: AggregateCredits;
  content_ratings: ContentRatings;
  external_ids: ExternalIDsSeries;
  reviews: Reviews;
  images: ImagesSeries;
  similar: Similar;
  videos: Videos;
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
export interface AggregateCredits {
  cast: CastSeries[];
  crew: CrewSeries[];
}
export interface CastSeries {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  roles: Role[];
  total_episode_count: number;
  order?: number;
  department?: string;
}
export interface CrewSeries {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  total_episode_count: number;
  order?: number;
  jobs: Job[];
  department?: string;
}
export interface Job {
  credit_id: string;
  job: string;
  episode_count: number;
}
export interface Role {
  credit_id: string;
  character: string;
  episode_count: number;
}
export interface ContentRatings {
  results: ContentRatingsResult[];
}
export interface ContentRatingsResult {
  descriptors: any[];
  iso_3166_1: string;
  rating: string;
}
export interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string;
}
export interface ExternalIDsSeries {
  imdb_id: string;
  freebase_mid: null;
  freebase_id: null;
  tvdb_id: number;
  tvrage_id: null;
  wikidata_id: string;
  facebook_id: string;
  instagram_id: string;
  twitter_id: string;
}
export interface Genre {
  id: number;
  name: string;
}
export interface ImagesSeries {
  backdrops: any[] | ImagenMedia[];
  logos: any[] | ImagenMedia[];
  posters: any[] | ImagenMedia[];
  id?: number;
}
export interface LastEpisodeToAir {
  id: number;
  overview: string;
  name: string;
  vote_average: number;
  vote_count: number;
  air_date: Date;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
}
export interface Network {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}
export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}
export interface Reviews {
  page: number;
  results: ReviewsResult[];
  total_pages: number;
  total_results: number;
}
export interface ReviewsResult {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: null | string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}
export interface Season {
  air_date: Date;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}
export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
export interface VideosSeries {
  results: VideoResults[];
}
export interface VideoResults {
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

//PAGINA BUSQUEDA
export interface SearchResults {
  page: number;
  results: Busqueda[];
  total_pages: number;
  total_results: number;
}
export interface Busqueda {
  backdrop_path?: null | string;
  id: number;
  original_title?: string;
  overview?: string;
  poster_path?: string;
  media_type: string;
  adult: boolean;
  title?: string;
  original_language?: string;
  genre_ids?: number[];
  popularity: number;
  release_date?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  original_name?: string;
  name?: string;
  first_air_date?: string;
  origin_country?: string[];
  gender?: number;
  known_for_department?: string;
  profile_path?: null | string;
  known_for?: Busqueda[];
}
