import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLargeScreen: false,
};

const screenSizeSlice = createSlice({
  name: "screenSize",
  initialState,
  reducers: {
    setScreenSize(state, action) {
      state.isLargeScreen = action.payload;
    },
  },
});

export const { setScreenSize } = screenSizeSlice.actions;
export default screenSizeSlice.reducer;
