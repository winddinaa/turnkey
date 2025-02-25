import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawer: true,
};

const sideBarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setDrawerSidebar(state, action) {
      state.drawer = action.payload;
    },
  },
});

export const { setDrawerSidebar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
