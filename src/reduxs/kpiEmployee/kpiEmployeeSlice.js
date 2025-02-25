import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: false,
};

const kpiEmployeeSlice = createSlice({
  name: "kpiEmployee",
  initialState,
  reducers: {
    setModalAssignKpieEmployee(state, action) {
      state.openModal = action.payload;
    },
  },
});

export const { setModalAssignKpieEmployee } = kpiEmployeeSlice.actions;
export default kpiEmployeeSlice.reducer;
