import {
  LATEST_BASE_URL,
  NOW_PLAYING_BASE_URL,
  POPULAR_BASE_URL,
  TOP_RATED_BASE_URL,
  UPCOMING_BASE_URL,
} from "./config";

type BaseMovie = {
  adult: boolean;
  overview: string;
  release_date: string;
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

export type Movie = BaseMovie & {
  poster_path: string | null;
  genre_ids: number[];
  backdrop_path: string | null;
};

export type Movies = {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
};

export type LatestMovie = BaseMovie & {
  backdrop_path: string | null;
  belongs_to_collection: null;
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string;
  imdb_id: string;
  poster_path: string | null;
  production_companies: [{}];
  production_countries: [{}];
  revenue: number;
  runtime: number;
  spoken_languages: [{}];
  status: string;
  tagline: string;
};

export type MoviesWithDates = Movies & {
  dates: {
    maximum: string;
    minimum: string;
  };
};

export default {
  fetchLatestMovie: async (page: number): Promise<LatestMovie> => {
    const res = await fetch(`${LATEST_BASE_URL}&page=${page}`);
    return await res.json();
  },
  fetchPopularMovies: async (page: number): Promise<Movies> => {
    const res = await fetch(`${POPULAR_BASE_URL}&page=${page}`);
    return await res.json();
  },
  fetchNowPlayingMovies: async (page: number): Promise<MoviesWithDates> => {
    const res = await fetch(`${NOW_PLAYING_BASE_URL}&page=${page}`);
    return await res.json();
  },
  fetchTopRatedMovies: async (page: number): Promise<Movies> => {
    const res = await fetch(`${TOP_RATED_BASE_URL}&page=${page}`);
    return await res.json();
  },
  fetchUpComingMovies: async (page: number): Promise<MoviesWithDates> => {
    const res = await fetch(`${UPCOMING_BASE_URL}&page=${page}`);
    return await res.json();
  },
};
