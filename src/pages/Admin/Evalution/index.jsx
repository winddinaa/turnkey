import React from "react";
import Header from "./Header";
import { Container, ModalComponent } from "../../../components/common";
import ActiveEvalution from "./ActiveEvalution";
import ExpireEvalution from "./ExpireEvalution";
import { useDispatch, useSelector } from "react-redux";
import { clearEva } from "../../../reduxs/evaluation/evaluationSlice";
import ModalEvaluation from "./ModalEvaluation";

const EvalutionPage = () => {
  const dispatch = useDispatch();
  const evaRedux = useSelector((state) => state.eva);
  console.log("=> evaRedux", evaRedux);
  return (
    <Container className="flex flex-col bg-localWhite h-[95vh] w-[100%] max-w-[100%] ">
      <Header />
      <div className="flex flex-col overflow-auto">
        <ActiveEvalution />
        <ExpireEvalution />
      </div>
      <ModalComponent
        title="Evaluation"
        open={evaRedux.openModal.open}
        size="lg"
        handleClose={() => dispatch(clearEva())}
      >
        <ModalEvaluation />
      </ModalComponent>
    </Container>
  );
};

export default EvalutionPage;
