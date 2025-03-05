import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: { mode: "", open: false },
  isDraft: false,
  openModalDelete: false,
  dataModal: [],
  focusAssignmentData: undefined,
  selectKPIs: [],
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
    clearModalAssignDepartment(state) {
      state.openModal = { mode: "", open: false };
      state.dataModal = [];
    },
    setAssignDepartmentDraft(state, action) {
      state.isDraft = action.payload;
    },
    setModalDeleteAssignDepartment(state, action) {
      state.openModalDelete = action.payload;
    },
    setFucusAssignment(state, action) {
      state.focusAssignmentData = action.payload;
    },
    setSelectKPIs(state, action) {
      console.log("=> state", state.selectKPIs);
      state.selectKPIs = action.payload;
    },
  },
});

export const {
  setModalAssignKpiDepartment,
  setDataModalAssignDepartment,
  clearModalAssignDepartment,
  setModalDeleteAssignDepartment,
  setAssignDepartmentDraft,
  setFucusAssignment,
  setSelectKPIs,
} = kpiDepartmentSlice.actions;

export default kpiDepartmentSlice.reducer;
