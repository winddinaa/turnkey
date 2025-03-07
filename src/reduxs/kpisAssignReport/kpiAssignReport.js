import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: false,
  focusAssignment: undefined,
  focusKPIs: undefined,
};

const kpisAssignReportSlice = createSlice({
  name: "kpisAssignReport",
  initialState,
  reducers: {
    setKPIsReportModal(state, action) {
      state.openModal = action.payload;
    },
    setKPIsDataModal(state, action) {
      state.dataModal = action.payload;
    },
    setFocusAssignmentReport(state, action) {
      state.focusAssignment = action.payload;
    },
    setFocusKPIsAssignmentReport(state, action) {
      state.focusKPIs = action.payload;
    },
    clearKPIsAssignReport(state) {
      state.focusAssignment = undefined;
      state.openModal = false;
    },
  },
});

export const {
  clearKPIsAssignReport,
  setFocusAssignmentReport,
  setFocusKPIsAssignmentReport,
  setKPIsReportModal,
} = kpisAssignReportSlice.actions;
export default kpisAssignReportSlice.reducer;
