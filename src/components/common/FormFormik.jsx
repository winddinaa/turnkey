import { Formik } from "formik";
import React from "react";
import PropTypes from "prop-types";

const FormFormik = ({
  initialValues = {},
  onSubmit = () => {},
  children,
  ...rest
}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} {...rest}>
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
          {children}
        </form>
      )}
    </Formik>
  );
};

FormFormik.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default FormFormik;
