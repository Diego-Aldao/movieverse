import { FiltroPerfil, Genero } from "@/types/localTypes";

//URLS Y PARAMETROS PARA FETCHEAR DATA
export const BASE_URL_ESTRENOS =
  "https://api.themoviedb.org/3/movie/now_playing?language=es-MX";

export const BASE_URL_DISCOVER_MOVIE =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-MX&";

export const BASE_URL_DISCOVER_SERIES =
  "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&include_null_first_air_dates=false&language=es-MX&";

export const BASE_URL_POPULAR_PEOPLE =
  "https://api.themoviedb.org/3/person/popular?language=es-MX&";

export const BASE_URL_TRENDING = "https://api.themoviedb.org/3/trending";

export const BASE_URL_BUSQUEDA =
  "https://api.themoviedb.org/3/search/multi?query=";

export const BASE_URL_TOP_SERIES =
  "https://api.themoviedb.org/3/discover/tv?include_adult=true&language=es-MX&page=1&sort_by=vote_average.desc&vote_count.gte=2000";

export const BASE_URL_MOVIE_DETAIL = "https://api.themoviedb.org/3/movie/";
export const BASE_URL_PERSON_DETAIL = "https://api.themoviedb.org/3/person/";
export const BASE_URL_SERIE_DETAIL = "https://api.themoviedb.org/3/tv/";

export const LENGUAJE_ESP = "language=es-MX";

export const BASE_URL_IMAGES = "https://image.tmdb.org/t/p/";

export const TAMAÑOS_IMAGENES = {
  posterPequeño: "w342",
  pequeño: "w500",
  mediano: "w780",
  grande: "w1280",
  original: "original",
};

//LISTADO DE GENEROS DE PELICULAS Y SERIES

export const GENEROS_PELICULAS: Genero[] = [
  {
    id: 28,
    name: "Acción",
  },
  {
    id: 12,
    name: "Aventura",
  },
  {
    id: 16,
    name: "Animación",
  },
  {
    id: 35,
    name: "Comedia",
  },
  {
    id: 80,
    name: "Crimen",
  },
  {
    id: 99,
    name: "Documental",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Familia",
  },
  {
    id: 14,
    name: "Fantasía",
  },
  {
    id: 36,
    name: "Historia",
  },
  {
    id: 27,
    name: "Terror",
  },
  {
    id: 10402,
    name: "Música",
  },
  {
    id: 9648,
    name: "Misterio",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Ciencia ficción",
  },
  {
    id: 10770,
    name: "Película de TV",
  },
  {
    id: 53,
    name: "Suspenso",
  },
  {
    id: 10752,
    name: "Bélica",
  },
  {
    id: 37,
    name: "Western",
  },
];

export const GENEROS_SERIES: Genero[] = [
  {
    id: 10759,
    name: "Acción y Aventura",
  },
  {
    id: 16,
    name: "Animación",
  },
  {
    id: 35,
    name: "Comedia",
  },
  {
    id: 80,
    name: "Crimen",
  },
  {
    id: 99,
    name: "Documental",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Familia",
  },
  {
    id: 10762,
    name: "Niños",
  },
  {
    id: 9648,
    name: "Misterio",
  },
  {
    id: 10763,
    name: "Noticias",
  },
  {
    id: 10764,
    name: "Reality",
  },
  {
    id: 10765,
    name: "Sci-Fi & Fantasía",
  },
  {
    id: 10766,
    name: "Telenovela",
  },
  {
    id: 10767,
    name: "Talkshow",
  },
  {
    id: 10768,
    name: "Guerra y Política",
  },
  {
    id: 37,
    name: "Western",
  },
];

//FILTROS PARA LAS PAGINAS PELICULAS Y SERIES
export const PROPIEDADES_FILTRO_ORDEN = [
  {
    id: 1,
    nombre: "popularidad",
    filtros: [
      {
        id: 1,
        nombre: "popularity.asc",
      },
      {
        id: 2,
        nombre: "popularity.desc",
      },
    ],
  },
  {
    id: 2,
    nombre: "valoracion",
    filtros: [
      {
        id: 1,
        nombre: "vote_average.asc",
      },
      {
        id: 2,
        nombre: "vote_average.desc",
      },
    ],
  },
  {
    id: 3,
    nombre: "estreno",
    filtros: [
      {
        id: 1,
        nombre: "primary_release_date.asc",
      },
      {
        id: 2,
        nombre: "primary_release_date.desc",
      },
    ],
  },
  {
    id: 4,
    nombre: "titulo",
    letras: true,
    filtros: [
      {
        id: 1,
        nombre: "title.asc",
      },
      {
        id: 2,
        nombre: "title.desc",
      },
    ],
  },
];
export const PROPIEDADES_FILTRO_ORDEN_SERIES = [
  {
    id: 1,
    nombre: "popularidad",
    filtros: [
      {
        id: 1,
        nombre: "popularity.asc",
      },
      {
        id: 2,
        nombre: "popularity.desc",
      },
    ],
  },
  {
    id: 2,
    nombre: "valoracion",
    filtros: [
      {
        id: 1,
        nombre: "vote_average.asc",
      },
      {
        id: 2,
        nombre: "vote_average.desc",
      },
    ],
  },
  {
    id: 3,
    nombre: "estreno",
    filtros: [
      {
        id: 1,
        nombre: "primary_release_date.asc",
      },
      {
        id: 2,
        nombre: "primary_release_date.desc",
      },
    ],
  },
  {
    id: 4,
    nombre: "titulo",
    letras: true,
    filtros: [
      {
        id: 1,
        nombre: "name.asc",
      },
      {
        id: 2,
        nombre: "name.desc",
      },
    ],
  },
];

//PAGINA PERFIL
export const GROUP_FILTERS_LIST_PROFILE_PAGE: FiltroPerfil[] = [
  {
    id: 1,
    nombre: "todos",
    valor: "todos",
  },
  {
    id: 2,
    nombre: "favoritos",
    valor: "favorito",
  },
  {
    id: 3,
    nombre: "guardados",
    valor: "guardado",
  },
];

export const TYPE_FILTERS_LIST_PROFILE_PAGE: FiltroPerfil[] = [
  {
    id: 1,
    nombre: "todos",
    valor: "todos",
  },
  {
    id: 2,
    nombre: "peliculas",
    valor: "movie",
  },
  {
    id: 3,
    nombre: "series",
    valor: "tv",
  },
  {
    id: 4,
    nombre: "celebridades",
    valor: "person",
  },
];

//NAVEGACION INTERNA
export const INTERNAL_NAVIGATION = [
  {
    id: 1,
    nombre: "inicio",
    destino: "/",
  },
  {
    id: 2,
    nombre: "peliculas",
    destino: "/peliculas",
  },
  {
    id: 3,
    nombre: "series de television",
    destino: "/series",
  },
  {
    id: 4,
    nombre: "celebridades",
    destino: "/celebridades",
  },
];
