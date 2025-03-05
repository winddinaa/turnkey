import React from "react";
import { InputComponent, SwitchComponent } from "../../../components/Input";
import { TextComponent } from "../../../components/common";
import ButtonComponent from "../../../components/common/Button";
import { useSelector } from "react-redux";
import { EMode } from "../../../constants/enum";
import { Formik } from "formik";
import { clearArea } from "../../../reduxs/area/areaSlice";

const ModalArea = () => {
  const areaRedux = useSelector((state) => state.area);
  const isDisabled = areaRedux.openModal.mode === EMode.view;

  if (areaRedux) {
    return (
      <Formik
        initialValues={
          areaRedux.dataModal
            ? areaRedux.dataModal
            : { status: true, area_name: "", description: "" }
        }
        onSubmit={(values, { setSubmitting }) => {
          dispatch(clearArea());
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <TextComponent variant="h6" color="blue-gray" className="-mb-3">
              Area Name
            </TextComponent>
            <InputComponent
              name="area_name"
              disabled={isDisabled}
              value={values.area_name}
              onChange={(e) => {
                handleChange({
                  target: {
                    name: "area_name",
                    value: e.target.value,
                  },
                });
              }}
            />
            <TextComponent variant="h6" color="blue-gray" className="-mb-3">
              Description
            </TextComponent>
            <InputComponent
              name="description"
              disabled={isDisabled}
              value={values.description}
              onChange={(e) => {
                handleChange({
                  target: {
                    name: "description",
                    value: e.target.value,
                  },
                });
              }}
            />
            <TextComponent variant="h6" color="blue-gray" className="-mb-3">
              Status
            </TextComponent>
            <SwitchComponent
              name="status"
              value={values.status}
              disabled={isDisabled}
              onChange={(e) => {
                handleChange({
                  target: {
                    name: "status",
                    value: e.target.value,
                  },
                });
              }}
            />
            {!isDisabled && (
              <div className="flex flex-row gap-5 justify-center items-center mt-10">
                <ButtonComponent type="submit" className=" w-button-default">
                  Submit
                </ButtonComponent>
              </div>
            )}
          </form>
        )}
      </Formik>
    );
  }
  return <></>;
};

export default ModalArea;
