export const BASE_URL_DISCOVER_MOVIE =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-MX&";
export const BASE_URL_DISCOVER_SERIES =
  "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=es-MX&";
export const BASE_URL_POPULAR_PEOPLE =
  "https://api.themoviedb.org/3/person/popular?language=es-MX&";
export const BASE_URL_TRENDING = "https://api.themoviedb.org/3/trending";
export const BASE_URL_ESTRENOS =
  "https://api.themoviedb.org/3/movie/now_playing?language=es-MX&page=1";
export const BASE_URL_TOP_SERIES =
  "https://api.themoviedb.org/3/discover/tv?include_adult=true&language=es-MX&page=1&sort_by=vote_average.desc&vote_count.gte=2000";

export const LENGUAJE_ESP = "?language=es-MX";

export const BASE_URL_IMAGES = "https://image.tmdb.org/t/p/";

export const TAMAÑOS_IMAGENES = {
  pequeño: "w500",
  mediano: "w780",
  grande: "w1280",
  original: "original",
};
