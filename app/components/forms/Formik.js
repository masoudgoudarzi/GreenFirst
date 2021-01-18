import React from "react";

import { Formik } from "formik";

function AppFormik({ children, validationSchema, initialValues, onSubmit }) {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppFormik;
