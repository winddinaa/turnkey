import React from "react";
import Header from "./Header";
import {
  Container,
  DataGridComponent,
  ModalComponent,
} from "../../../components/common";
import { useDispatch, useSelector } from "react-redux";
import {
  clearArea,
  setAreaDataModal,
  setAreaDeleteModal,
  setAreaModal,
} from "../../../reduxs/area/areaSlice";
import { EColumnsArea, rows } from "./constants";
import ModalArea from "./ModalArea";
import ModalDelete from "./ModalDelete";
import isEmpty from "is-empty";
import { EBool, EMode } from "../../../constants/enum";

const AreaPage = () => {
  const dishpatch = useDispatch();
  const areaRedux = useSelector((state) => state.area);

  const onView = (e) => {
    if (!isEmpty(e)) {
      dishpatch(
        setAreaDataModal({
          ...e,
          date: [e.startDate, e.endDate],
        })
      );
      dishpatch(setAreaModal({ mode: EMode.view, open: EBool.true }));
    }
  };
  const onEdit = (e) => {
    if (!isEmpty(e)) {
      dishpatch(
        setAreaDataModal({
          ...e,
        })
      );
      dishpatch(setAreaModal({ mode: EMode.edit, open: EBool.true }));
    }
  };
  const onDelete = (e) => {
    if (!isEmpty(e)) {
      dishpatch(
        setAreaDataModal({
          ...e,
          date: [e.startDate, e.endDate],
        })
      );
      dishpatch(setAreaDeleteModal(EBool.true));
    }
  };

  return (
    <Container className="flex flex-col bg-localWhite h-[95vh] w-[100%] max-w-[100%] ">
      <Header />
      <DataGridComponent
        disableRowSelectionOnClick
        rows={rows}
        getRowId={(row) => {
          return row.areaId;
        }}
        columns={EColumnsArea(onView, onEdit, onDelete)}
      />
      <ModalComponent
        title="Area"
        open={areaRedux.openModal.open}
        handleClose={() => {
          dishpatch(clearArea());
        }}
      >
        <ModalArea />
      </ModalComponent>
      <ModalComponent
        title="Area"
        open={areaRedux.openModalDelete}
        handleClose={() => {
          dishpatch(clearArea());
        }}
      >
        <ModalDelete />
      </ModalComponent>
    </Container>
  );
};

export default AreaPage;
