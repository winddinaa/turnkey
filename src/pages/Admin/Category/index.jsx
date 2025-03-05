import React from "react";
import Header from "./Header";
import {
  Container,
  DataGridComponent,
  ModalComponent,
} from "../../../components/common";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCategory,
  setCategoryDataModal,
  setCategoryDeleteModal,
  setCategoryModal,
} from "../../../reduxs/category/categorySlice";
import { EColumnsCategory, rows } from "./constants";
import ModalCategory from "./ModalCategory";
import ModalDelete from "./ModalDelete";
import isEmpty from "is-empty";
import { EBool, EMode } from "../../../constants/enum";

const CategoryPage = () => {
  const dishpatch = useDispatch();
  const categoryRedux = useSelector((state) => state.category);

  const onView = (e) => {
    if (!isEmpty(e)) {
      dishpatch(
        setCategoryDataModal({
          ...e,
          date: [e.startDate, e.endDate],
        })
      );
      dishpatch(setCategoryModal({ mode: EMode.view, open: EBool.true }));
    }
  };
  const onEdit = (e) => {
    if (!isEmpty(e)) {
      dishpatch(
        setCategoryDataModal({
          ...e,
        })
      );
      dishpatch(setCategoryModal({ mode: EMode.edit, open: EBool.true }));
    }
  };
  const onDelete = (e) => {
    if (!isEmpty(e)) {
      dishpatch(
        setCategoryDataModal({
          ...e,
          date: [e.startDate, e.endDate],
        })
      );
      dishpatch(setCategoryDeleteModal(EBool.true));
    }
  };

  return (
    <Container className="flex flex-col bg-localWhite h-[95vh] w-[100%] max-w-[100%] ">
      <Header />
      <DataGridComponent
        disableRowSelectionOnClick
        rows={rows}
        getRowId={(row) => {
          return row.categoryId;
        }}
        columns={EColumnsCategory(onView, onEdit, onDelete)}
      />
      <ModalComponent
        title="Category"
        open={categoryRedux.openModal.open}
        handleClose={() => {
          dishpatch(clearCategory());
        }}
      >
        <ModalCategory />
      </ModalComponent>
      <ModalComponent
        title="Category"
        open={categoryRedux.openModalDelete}
        handleClose={() => {
          dishpatch(clearCategory());
        }}
      >
        <ModalDelete />
      </ModalComponent>
    </Container>
  );
};

export default CategoryPage;
