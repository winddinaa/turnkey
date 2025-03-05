import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: {
    mode: "",
    open: false,
  },
  openModalDelete: false,
  dataModal: undefined,
};

const departmentSlice = createSlice({
  name: "department",
  initialState,
  reducers: {
    setDepartmentModal(state, action) {
      state.openModal = action.payload;
    },
    setDepartmentDataModal(state, action) {
      state.dataModal = action.payload;
    },
    setDepartmentDeleteModal(state, action) {
      state.openModalDelete = action.payload;
    },
    clearDepartment(state, action) {
      state.dataModal = undefined;
      state.openModalDelete = false;
      state.openModal = {
        mode: "",
        open: false,
      };
    },
  },
});

export const { setDepartmentModal, setDepartmentDataModal, setDepartmentDeleteModal, clearDepartment } =
  departmentSlice.actions;
export default departmentSlice.reducer;
