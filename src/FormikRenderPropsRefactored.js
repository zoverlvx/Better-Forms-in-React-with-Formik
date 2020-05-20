import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

function FormikRenderPropsRefactored() {
  const initialValues = {
    email: "",
    password: ""
  };

  const onSubmit = values => {
    // do stuff here.
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <>
      <Formik {...{ initialValues, onSubmit }}>
        {() => (
          <div className="formComp">
            <div className="formWrapper">
              <Form className="baseForm" noValidate>
                {/* Form Header */}
                <header className="baseFormHeader">
                  <h1 className="baseFormHeading">Log in</h1>
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
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default FormikRenderPropsRefactored;
