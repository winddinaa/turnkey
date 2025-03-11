import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: {
    mode: "",
    open: false,
  },
  dataModal: undefined,
};

const evaluationSlice = createSlice({
  name: "evaluation",
  initialState,
  reducers: {
    setEvaModal(state, action) {
      state.openModal = action.payload;
    },
    setEvaDataModal(state, action) {
      state.dataModal = action.payload;
    },

    clearEva(state, action) {
      state.dataModal = undefined;
      state.openModal = {
        mode: "",
        open: false,
      };
    },
  },
});

export const { setEvaModal, setEvaDataModal, clearEva } =
  evaluationSlice.actions;
export default evaluationSlice.reducer;
