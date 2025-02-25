import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: { mode: "", open: false },
};

const kpiDepartmentSlice = createSlice({
  name: "screenSize",
  initialState,
  reducers: {
    setModalAssignKpiDepartment(state, action) {
      state.openModal = action.payload;
    },
  },
});

export const { setModalAssignKpiDepartment } = kpiDepartmentSlice.actions;
export default kpiDepartmentSlice.reducer;
