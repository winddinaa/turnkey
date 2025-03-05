import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: {
    mode: "",
    open: false,
  },
  openModalDelete: false,
  dataModal: undefined,
};

const assignmentSlice = createSlice({
  name: "assignment",
  initialState,
  reducers: {
    setAssignmentModal(state, action) {
      state.openModal = action.payload;
    },
    setAssignDataModal(state, action) {
      state.dataModal = action.payload;
    },
    setAssignmentDeleteModal(state, action) {
      state.openModalDelete = action.payload;
    },
    clearAssignment(state) {
      state.dataModal = undefined;
      state.openModalDelete = false;
      state.openModal = {
        mode: "",
        open: false,
      };
    },
  },
});

export const {
  setAssignmentModal,
  setAssignDataModal,
  clearAssignment,
  setAssignmentDeleteModal,
} = assignmentSlice.actions;
export default assignmentSlice.reducer;
