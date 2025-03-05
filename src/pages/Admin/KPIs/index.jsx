import React from "react";
import Header from "./Header";
import {
  Container,
  DataGridComponent,
  ModalComponent,
} from "../../../components/common";
import { useDispatch, useSelector } from "react-redux";
import {
  clearKPIs,
  setKPIsDataModal,
  setKPIsDeleteModal,
  setKPIsModal,
} from "../../../reduxs/kpis/kpisSlice";
import { EColumnsKPIs, rows } from "./constants";
import ModalKPIs from "./ModalKPIs";
import ModalDelete from "./ModalDelete";
import isEmpty from "is-empty";
import { EBool, EMode } from "../../../constants/enum";

const KPIsPage = () => {
  const dishpatch = useDispatch();
  const kpisRedux = useSelector((state) => state.kpis);

  const onView = (e) => {
    if (!isEmpty(e)) {
      dishpatch(
        setKPIsDataModal({
          ...e,
          date: [e.startDate, e.endDate],
        })
      );
      dishpatch(setKPIsModal({ mode: EMode.view, open: EBool.true }));
    }
  };
  const onEdit = (e) => {
    if (!isEmpty(e)) {
      dishpatch(
        setKPIsDataModal({
          ...e,
        })
      );
      dishpatch(setKPIsModal({ mode: EMode.edit, open: EBool.true }));
    }
  };
  const onDelete = (e) => {
    if (!isEmpty(e)) {
      dishpatch(
        setKPIsDataModal({
          ...e,
          date: [e.startDate, e.endDate],
        })
      );
      dishpatch(setKPIsDeleteModal(EBool.true));
    }
  };

  return (
    <Container className="flex flex-col bg-localWhite h-[95vh] w-[100%] max-w-[100%] ">
      <Header />
      <DataGridComponent
        disableRowSelectionOnClick
        rows={rows}
        getRowId={(row) => {
          return row.kpisId;
        }}
        columns={EColumnsKPIs(onView, onEdit, onDelete)}
      />
      <ModalComponent
        title="KPIs"
        open={kpisRedux.openModal.open}
        handleClose={() => {
          dishpatch(clearKPIs());
        }}
      >
        <ModalKPIs />
      </ModalComponent>
      <ModalComponent
        title="KPIs"
        open={kpisRedux.openModalDelete}
        handleClose={() => {
          dishpatch(clearKPIs());
        }}
      >
        <ModalDelete />
      </ModalComponent>
    </Container>
  );
};

export default KPIsPage;
