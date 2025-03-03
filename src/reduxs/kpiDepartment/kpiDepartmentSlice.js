import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: { mode: "", open: false },
  isDraft: false,
  openModalDelete: false,
  dataModal: [],
};

const dateFrom = new Date();
const dateTo = new Date();
dateFrom.setDate(dateFrom.getDate() - 3);
dateTo.setDate(dateTo.getDate() + 2);

const kpiDepartmentSlice = createSlice({
  name: "kpiDepartment",
  initialState,
  reducers: {
    setModalAssignKpiDepartment(state, action) {
      state.openModal = action.payload;
    },
    setDataModalAssignDepartment(state, action) {
      state.dataModal = {
        ...action.payload,
      };
    },
    clearModalAssignDepartment(state, action) {
      state.openModal = { mode: "", open: false };
      state.dataModal = [];
    },
    setAssignDepartmentDraft(state, action) {
      state.isDraft = action.payload;
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
  setAssignDepartmentDraft,
} = kpiDepartmentSlice.actions;
export default kpiDepartmentSlice.reducer;
