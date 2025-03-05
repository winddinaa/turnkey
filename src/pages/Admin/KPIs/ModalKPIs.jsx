import React from "react";
import {
  InputComponent,
  RadioComponent,
  SelectComponent,
  SwitchComponent,
} from "../../../components/Input";
import { TextComponent } from "../../../components/common";
import ButtonComponent from "../../../components/common/Button";
import { useSelector } from "react-redux";
import { EBool, EMode } from "../../../constants/enum";
import { Formik } from "formik";
import { clearKPIs } from "../../../reduxs/kpis/kpisSlice";
import { mockCategory } from "./constants";
import { Card } from "@material-tailwind/react";

const ModalKPIs = () => {
  const kpisRedux = useSelector((state) => state.kpis);
  const isDisabled = kpisRedux.openModal.mode === EMode.view;

  if (kpisRedux) {
    return (
      <Formik
        initialValues={
          kpisRedux.dataModal
            ? kpisRedux.dataModal
            : {
                status: true,
                kpis_name: "",
                description: "",
                isAdvance: `${EBool.false}`,
              }
        }
        onSubmit={(values, { setSubmitting }) => {
          dispatch(clearKPIs());
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <TextComponent variant="h6" color="blue-gray" className="-mb-3">
              Category Name
            </TextComponent>
            {console.log("=>values", values)}
            <SelectComponent
              name="category_name"
              isDisabled={isDisabled}
              value={mockCategory.find(
                (option) => option.value === values.category_name
              )}
              option={mockCategory}
              onChange={(e) => {
                handleChange({
                  target: {
                    name: "category_name",
                    value: e,
                  },
                });
              }}
            />
            <TextComponent variant="h6" color="blue-gray" className="-mb-3">
              KPIs Name
            </TextComponent>
            <InputComponent
              name="kpis_name"
              disabled={isDisabled}
              value={values.kpis_name}
              onChange={(e) => {
                handleChange({
                  target: {
                    name: "kpis_name",
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
              Target
            </TextComponent>
            <InputComponent
              name="target"
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

            <TextComponent variant="h6" color="blue-gray" className="-mb-3">
              Score
            </TextComponent>
            <div className="flex flex-row gap-5">
              <RadioComponent
                init={values.isAdvance}
                name="isAdvance"
                label="Standard"
                value={EBool.false}
                className={`checked:bg-primary`}
                checked={values.isAdvance === `${EBool.false}`}
                onChange={(e) => {
                  handleChange({
                    target: {
                      name: "isAdvance",
                      value: e.target.value,
                    },
                  });
                }}
              />
              <RadioComponent
                init={values.isAdvance}
                name="isAdvance"
                label="Advance"
                value={EBool.true}
                className={`checked:bg-primary`}
                checked={values.isAdvance === `${EBool.true}`}
                onChange={(e) => {
                  handleChange({
                    target: {
                      name: "isAdvance",
                      value: e.target.value,
                    },
                  });
                }}
              />
            </div>

            <div
              className={`grid ${
                values.isAdvance === `${EBool.true}`
                  ? "grid-cols-[50px,1fr,1fr]"
                  : "grid-cols-[50px,1fr]"
              }  gap-4`}
            >
              <div>
                <TextComponent variant="paragraph">Score.</TextComponent>
              </div>

              <div>
                <TextComponent variant="paragraph">
                  Evaluation criteria
                </TextComponent>
              </div>
              {values.isAdvance === `${EBool.true}` && (
                <div>
                  <TextComponent variant="paragraph">Weight</TextComponent>
                </div>
              )}

              {[0, 1, 2, 3, 4].map((itemScor, index) => {
                return (
                  <React.Fragment key={index.toString()}>
                    <TextComponent
                      variant="paragraph"
                      className="text-center content-center"
                    >
                      {itemScor}
                    </TextComponent>
                    <InputComponent placeholder="Enter your criteria" />
                    {values.isAdvance === `${EBool.true}` && (
                      <InputComponent placeholder="Weight" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

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

export default ModalKPIs;
