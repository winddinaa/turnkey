import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: {
    mode: "",
    open: false,
  },
  openModalDelete: false,
  dataModal: undefined,
};

const kpisSlice = createSlice({
  name: "kpis",
  initialState,
  reducers: {
    setKPIsModal(state, action) {
      state.openModal = action.payload;
    },
    setKPIsDataModal(state, action) {
      state.dataModal = action.payload;
    },
    setKPIsDeleteModal(state, action) {
      state.openModalDelete = action.payload;
    },
    clearKPIs(state) {
      state.dataModal = undefined;
      state.openModalDelete = false;
      state.openModal = {
        mode: "",
        open: false,
      };
    },
  },
});

export const { setKPIsModal, setKPIsDataModal, setKPIsDeleteModal, clearKPIs } =
  kpisSlice.actions;
export default kpisSlice.reducer;
