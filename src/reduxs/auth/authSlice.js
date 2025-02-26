import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  permission: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPermission(state, action) {
      state.permission = action.payload;
    },
  },
});

export const { setPermission } = authSlice.actions;
export default authSlice.reducer;
