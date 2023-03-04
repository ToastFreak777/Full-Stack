import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: "none",
  tab: "",
  tabContent: "",
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    changeTab: (state, action) => {
      state.tab = action.payload;
    },
    updateTabContent: (state, action) => {
      state.tabContent = action.payload;
    },
    ToggleDropDown: (state, action) => {
      state.toggle = action.payload;
    },
  },
});

export const { changeTab, updateTabContent, ToggleDropDown } =
  navbarSlice.actions;

export default navbarSlice.reducer;
