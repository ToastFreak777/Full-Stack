import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesList: {
    nowPlaying: {
      dates: {},
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
      count: 0,
      offset: 0,
    },
    popular: {
      dates: {},
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
      count: 0,
      offset: 0,
    },
    topRated: {
      dates: {},
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
  updateCount,
} = movieSlice.actions;

export default movieSlice.reducer;
