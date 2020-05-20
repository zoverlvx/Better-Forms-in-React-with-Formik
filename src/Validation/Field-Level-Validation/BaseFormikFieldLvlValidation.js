import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";

// We simple pass the validator function to the dependent fields
function validatePassword(value) {
  let error;

  if (!value) {
    error = "Required";
  } else if (value.length <= 8) {
    error = "Must be more than 8 characters";
  }

  return error;
}

function FormikRenderProps() {
  const initialValues = {
    email: "",
    password: ""
  };

  const onSubmit = values => {
    // Do stuff here...
    console.log(JSON.stringify(values, null, 2));
  };

  return (
    <>
      <div className="formWrapper">
        <Formik {...{ initialValues, onSubmit }}>
          {() => (
            <Form className="baseForm" noValidate>
              {/* Form Header */}
              <header className="baseFormHeader">
                <h1 className="baseFormHeading">
                  Log in (field-level validation)
                </h1>
              </header>
              {/* Form main content */}
              <div className="formRow col-1">
                <div className="formFieldWrap">
                  <label className="formFieldLabel" htmlFor="email">
                    Email address
                  </label>
                  <ErrorMessage name="email">
                    {errMsg => <span className="errorMessage">{errMsg}</span>}
                  </ErrorMessage>
                  <div className="formFieldWrapInner">
                    <Field
                      type="email"
                      id="email"
                      className="email formField"
                      name="email"
                    />
                  </div>
                </div>
              </div>
              <div className="formFieldWrap">
                <label className="formFieldLabel" htmlFor="password">
                  Password
                </label>
                <ErrorMessage name="password">
                  {errMsg => <span className="errorMessage">{errMsg}</span>}
                </ErrorMessage>
                <div className="formFieldWrapInner">
                  <Field
                    type="password"
                    id="password"
                    className="password formField"
                    name="password"
                    validate={validatePassword} // Dependent field
                  />
                </div>
                <span className="passwordCue">
                  Minimum length is 8 characters
                </span>
              </div>
              <div className="formRow col-1">
                <button type="submit">Submit</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default FormikRenderProps;
