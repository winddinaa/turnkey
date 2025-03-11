import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDraft: false,
  openModalDelete: false,
  focusAssignmentData: undefined,
  dataModal: [],
  selectKPIs: [],
  modalAssignEmployees: { mode: "", open: false },
  modalEmployeeInKPIs: false,
  modalPublicAssignment: false,
  openModal: { mode: "", open: false },
  dataEmpInKPIs: undefined,
  empSelectforDelete: [],
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
    clearAssignDepartment(state) {
      state.openModal = { mode: "", open: false };
      state.dataModal = [];
      state.modalAssignEmployees = { mode: "", open: false };
      state.modalEmployeeInKPIs = false;
      state.modalPublicAssignment = false;
    },
    setAssignDepartmentDraft(state, action) {
      state.isDraft = action.payload;
    },
    setModalDeleteAssignDepartment(state, action) {
      state.openModalDelete = action.payload;
    },
    setModalEmployeeInKPIs(state, action) {
      state.modalEmployeeInKPIs = action.payload;
    },
    setModalPublicAssignment(state, action) {
      state.modalPublicAssignment = action.payload;
    },
    setFocusAssignment(state, action) {
      state.focusAssignmentData = action.payload;
    },
    setSelectKPIs(state, action) {
      state.selectKPIs = action.payload;
    },
    setModalAssignKPIsEmployees(state, action) {
      state.modalAssignEmployees = action.payload;
    },
    setDataEmpInKPIs(state, action) {
      state.dataEmpInKPIs = action.payload;
    },
    setEmpForDelete(state, action) {
      state.empSelectforDelete = action.payload;
    },
  },
});

export const {
  setModalAssignKpiDepartment,
  setDataModalAssignDepartment,
  setModalDeleteAssignDepartment,
  setModalPublicAssignment,
  setAssignDepartmentDraft,
  setFocusAssignment,
  setSelectKPIs,
  setModalAssignKPIsEmployees,
  setModalEmployeeInKPIs,
  setDataEmpInKPIs,
  clearAssignDepartment,
  setEmpForDelete,
} = kpiDepartmentSlice.actions;

export default kpiDepartmentSlice.reducer;
