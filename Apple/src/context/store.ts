import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./navbarSlice";
import galleryReducer from "./gallerySlice";

export default configureStore({
  reducer: {
    navbar: navbarReducer,
    gallery: galleryReducer,
  },
});
