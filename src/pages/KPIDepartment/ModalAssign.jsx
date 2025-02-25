import React from "react";
import { Formik } from "formik";
import ButtonComponent from "../../components/common/Button";
import { EBool } from "../../constants/enum";
import { Typography } from "@material-tailwind/react";
import SelectMultiComponent from "../../components/Input/SelectMultiComponent";
import SelectComponent from "../../components/Input/SelectComponent";
import { DateRangePicker } from "react-date-range";

export const mockDepartMent = [
  {
    value: "Department1",
    label: "Department 1",
  },
  {
    value: "Department2",
    label: "Department 2",
  },
];

export const mockKPI = [
  {
    value: "kpi1",
    label: "KPI 1",
  },
  {
    value: "kpi2",
    label: "KPI 2",
  },
];

export const mockCategory = [
  {
    value: "category1",
    label: "Category 1",
  },
  {
    value: "category2",
    label: "Category 2",
  },
];

export const mockArea = [
  {
    value: "area1",
    label: "Area 1",
  },
  {
    value: "area2",
    label: "Area 2",
  },
];

const ModalAssign = () => {
  return (
    <Formik
      initialValues={{
        department: {
          value: "",
          label: "",
        },

        area: {
          value: "area1",
          label: "Area 1",
        },
        category: [
          {
            value: "",
            label: "",
          },
        ],
        kpi: [
          {
            value: "",
            label: "",
          },
        ],
        selectionRange: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("=>values", values);

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Department
          </Typography>
          <SelectComponent
            name="department"
            option={mockDepartMent}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "department",
                  value: selectedOption,
                },
              });
            }}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Area
          </Typography>
          <SelectComponent
            name="area"
            option={mockArea}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "area",
                  value: selectedOption,
                },
              });
            }}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Category
          </Typography>
          <SelectMultiComponent
            name="Category"
            option={mockCategory}
            closeMenuOnSelect={EBool.false}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "category",
                  value: selectedOption,
                },
              });
            }}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            KPIs
          </Typography>
          <SelectMultiComponent
            name="kpi"
            option={mockKPI}
            closeMenuOnSelect={EBool.false}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "department",
                  value: selectedOption,
                },
              });
            }}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Deadline
          </Typography>
          {console.log("=> value", values)}
          <DateRangePicker
            name="selectionRange"
            staticRanges={[]}
            inputRanges={[]}
            ranges={[values.selectionRange]}
            onChange={(e) => {
              console.log("=>e", e);
              handleChange({
                target: {
                  name: "selectionRange",
                  value: e.selection,
                },
              });
            }}
          />
          <div></div>
          <ButtonComponent type="submit">Add</ButtonComponent>
        </form>
      )}
    </Formik>
  );
};

export default ModalAssign;
