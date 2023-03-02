export const API_KEY: string = import.meta.env.VITE_API_KEY;
export const API_URL: string = `https://api.themoviedb.org/3/`;

export const LATEST_BASE_URL: string = `${API_URL}movie/latest?api_key=${API_KEY}&language=en-US`;
export const NOW_PLAYING_BASE_URL: string = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US`;
export const POPULAR_BASE_URL: string = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
export const TOP_RATED_BASE_URL: string = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`;
export const UPCOMING_BASE_URL: string = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US`;

export const IMAGE_BASE_URL: string = "http://image.tmdb.org/t/p/";
// Sizes: w300, w780, w1280, original
export const BACKDROP_SIZE: string = "original";
// w92, w154, w185, w342, w500, w780, original
export const POSTER_SIZE: string = "w342";
