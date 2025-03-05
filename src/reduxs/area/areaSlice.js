import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: {
    mode: "",
    open: false,
  },
  openModalDelete: false,
  dataModal: undefined,
};

const areaSlice = createSlice({
  name: "area",
  initialState,
  reducers: {
    setAreaModal(state, action) {
      state.openModal = action.payload;
    },
    setAreaDataModal(state, action) {
      state.dataModal = action.payload;
    },
    setAreaDeleteModal(state, action) {
      state.openModalDelete = action.payload;
    },
    clearArea(state, action) {
      state.dataModal = undefined;
      state.openModalDelete = false;
      state.openModal = {
        mode: "",
        open: false,
      };
    },
  },
});

export const { setAreaModal, setAreaDataModal, setAreaDeleteModal, clearArea } =
  areaSlice.actions;
export default areaSlice.reducer;
