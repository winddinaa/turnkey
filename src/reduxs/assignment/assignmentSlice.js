import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: {
    mode: "",
    open: false,
  },
  dataModal: undefined,
};

const assignmentSlice = createSlice({
  name: "assignment",
  initialState,
  reducers: {
    setModalAssignment(state, action) {
      state.openModal = action.payload;
    },
    setAssignDataModal(state, action) {
      state.dataModal = action.payload;
    },
    clearAssignment(state, action) {
      state.dataModal = undefined;
      state.openModal = {
        mode: "",
        open: false,
      };
    },
  },
});

export const { setModalAssignment, setAssignDataModal, clearAssignment } =
  assignmentSlice.actions;
export default assignmentSlice.reducer;
