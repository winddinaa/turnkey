import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: {
    mode: "",
    open: false,
  },
  openModalDelete: false,
  dataModal: undefined,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryModal(state, action) {
      state.openModal = action.payload;
    },
    setCategoryDataModal(state, action) {
      state.dataModal = action.payload;
    },
    setCategoryDeleteModal(state, action) {
      state.openModalDelete = action.payload;
    },
    clearCategory(state) {
      state.dataModal = undefined;
      state.openModalDelete = false;
      state.openModal = {
        mode: "",
        open: false,
      };
    },
  },
});

export const {
  setCategoryModal,
  setCategoryDataModal,
  setCategoryDeleteModal,
  clearCategory,
} = categorySlice.actions;
export default categorySlice.reducer;
