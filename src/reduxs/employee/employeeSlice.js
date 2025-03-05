import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: {
    mode: "",
    open: false,
  },
  openModalDelete: false,
  dataModal: undefined,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployeeModal(state, action) {
      state.openModal = action.payload;
    },
    setEmployeeDataModal(state, action) {
      state.dataModal = action.payload;
    },
    setEmployeeDeleteModal(state, action) {
      state.openModalDelete = action.payload;
    },
    clearEmployee(state) {
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
  setEmployeeModal,
  setEmployeeDataModal,
  setEmployeeDeleteModal,
  clearEmployee,
} = employeeSlice.actions;
export default employeeSlice.reducer;
