import { createSlice } from "@reduxjs/toolkit";

import appleTvMovies from "../data";

const initialState = {
  transition: "transform 500ms ease-in-out",
  transform: "translateX(-1240px)",
  slideProgress: 2,
  items: appleTvMovies.map((item) => ({
    id: crypto.randomUUID(),
    title: item.title,
    trailerLink: item.trailerLink,
    poster: item.poster,
    backdrops: item.backdrops,
  })),
  head: false,
  tail: false,
  reset: false,
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    toggleTransition: (state, action) => {
      state.transition = action.payload;
    },
    nextSlide: (state, action) => {
      state.slideProgress = action.payload.slideProgress;
      state.transform = action.payload.transform;
    },
    restart: (state, action) => {
      state.reset = action.payload.reset;
      state.transition = action.payload.transition;
      state.slideProgress = action.payload.slideProgress;
      state.transform = action.payload.transform;
    },
    getInitialState: (state, action) => {
      state.reset = action.payload.reset;
      state.slideProgress = action.payload.slideProgress;
      state.transition = action.payload.transition;
      state.transform = action.payload.transform;
    },
  },
});

export const { toggleTransition, nextSlide, restart, getInitialState } =
  gallerySlice.actions;

export default gallerySlice.reducer;
