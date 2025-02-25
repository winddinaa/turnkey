import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: { mode: "", open: false },
  openModalDelete: false,
  dataModal: undefined,
};

const kpiDepartmentSlice = createSlice({
  name: "screenSize",
  initialState,
  reducers: {
    setModalAssignKpiDepartment(state, action) {
      state.openModal = action.payload;
    },
    setDataModalAssignDepartment(state, action) {
      state.dataModal = {
        ...action.payload,
        selectionRange: {
          startDate: "2026-02-22",
          endDate: "2026-02-28",
          key: "selection",
        },
      };
    },
    clearModalAssignDepartment(state, action) {
      state.openModal = { mode: "", open: false };
      state.dataModal = undefined;
    },
    setModalDeleteAssignDepartment(state, action) {
      state.openModalDelete = action.payload;
    },
  },
});

export const {
  setModalAssignKpiDepartment,
  setDataModalAssignDepartment,
  clearModalAssignDepartment,
  setModalDeleteAssignDepartment,
} = kpiDepartmentSlice.actions;
export default kpiDepartmentSlice.reducer;
