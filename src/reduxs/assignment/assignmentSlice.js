import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: {
    mode: "",
    open: false,
  },
};

const assignmentSlice = createSlice({
  name: "assignment",
  initialState,
  reducers: {
    setModalAssignment(state, action) {
      state.openModal = action.payload;
    },
  },
});

export const { setModalAssignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;
