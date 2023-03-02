import { createSlice } from "@reduxjs/toolkit";

import { MoviesWithDates } from "../utils/API";

type MovieCategory = MoviesWithDates & { count: number; offset: number };

export type InitialState = {
  moviesList: {
    nowPlaying: MovieCategory;
    popular: MovieCategory;
    topRated: MovieCategory;
  };
  maxImages: number;
};

export type MovieSliceState = {
  movies: InitialState;
};

const initialState: InitialState = {
  moviesList: {
    nowPlaying: {
      dates: { maximum: "", minimum: "" },
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
      count: 0,
      offset: 0,
    },
    popular: {
      dates: { maximum: "", minimum: "" },
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
      count: 0,
      offset: 0,
    },
    topRated: {
      dates: { maximum: "", minimum: "" },
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
      count: 0,
      offset: 0,
    },
  },
  maxImages: 0,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    updateNowPlaying: (state, action) => {
      state.moviesList.nowPlaying = {
        ...state.moviesList.nowPlaying,
        ...action.payload,
      };
    },
    updatePopular: (state, action) => {
      state.moviesList.popular = {
        ...state.moviesList.popular,
        ...action.payload,
      };
    },
    updateTopRated: (state, action) => {
      state.moviesList.topRated = {
        ...state.moviesList.topRated,
        ...action.payload,
      };
    },
    updateMaxImages: (state, action) => {
      state.maxImages = action.payload;
      if (
        state.moviesList.nowPlaying.count <= 0 &&
        state.moviesList.popular.count <= 0 &&
        state.moviesList.topRated.count <= 0
      ) {
        state.moviesList.nowPlaying.count = action.payload;
        state.moviesList.popular.count = action.payload;
        state.moviesList.topRated.count = action.payload;
      }
    },
    updateOffset: (state, action) => {
      state.moviesList[action.payload.field].offset += action.payload.value;
      state.moviesList[action.payload.field].count +=
        action.payload.value > 0 ? state.maxImages : -state.maxImages;
    },
  },
});

export const {
  updateNowPlaying,
  updatePopular,
  updateTopRated,
  updateMaxImages,
  updateOffset,
} = movieSlice.actions;

export default movieSlice.reducer;
