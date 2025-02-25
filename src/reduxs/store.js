import { configureStore } from "@reduxjs/toolkit";
import screenSizeReducer from "./screenSize/screenSizeSlice";
import sideBarReducer from "./sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer,
    sidebar: sideBarReducer,
  },
});
