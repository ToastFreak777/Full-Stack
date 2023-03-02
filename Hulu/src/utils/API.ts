import {
  LATEST_BASE_URL,
  NOW_PLAYING_BASE_URL,
  POPULAR_BASE_URL,
  TOP_RATED_BASE_URL,
  UPCOMING_BASE_URL,
} from "./config";

export default {
  fetchLatestMovie: async (page: number) => {
    const res = await fetch(`${LATEST_BASE_URL}&page=${page}`);
    return await res.json();
  },
  fetchPopularMovies: async (page: number) => {
    const res = await fetch(`${POPULAR_BASE_URL}&page=${page}`);
    return await res.json();
  },
  fetchNowPlayingMovies: async (page: number) => {
    const res = await fetch(`${NOW_PLAYING_BASE_URL}&page=${page}`);
    return await res.json();
  },
  fetchTopRatedMovies: async (page: number) => {
    const res = await fetch(`${TOP_RATED_BASE_URL}&page=${page}`);
    return await res.json();
  },
  fetchUpComingMovies: async (page: number) => {
    const res = await fetch(`${UPCOMING_BASE_URL}&page=${page}`);
    return await res.json();
  },
};
