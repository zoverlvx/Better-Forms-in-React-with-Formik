import React from "react";
import { Formik } from "formik";

function FormikRenderProps() {
  const initialValues = {
    email: "",
    password: ""
  };
  function onSubmit(values) {
    // Do stuff here...
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <>
      <Formik {...{ initialValues, onSubmit }}>
        {({
          getFieldProps,
          handleSubmit,
          errors,
          touched,
          submitCount,
          values
        }) => (
          <>
            <div className="formWrapper">
              <form className="baseForm" onSubmit={handleSubmit} noValidate>
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
                    <span className="errorMessage">
                      {touched.email && errors.email}
                    </span>
                    <div className="formFieldWrapInner">
                      <input
                        type="email"
                        id="email"
                        className="email formField"
                        {...getFieldProps("email")}
                      />
                    </div>
                  </div>
                </div>
                <div className="formFieldWrap">
                  <label className="formFieldLabel" htmlFor="password">
                    Password
                  </label>
                  <span className="errorMessage">
                    {touched.password && errors.password}
                  </span>
                  <div className="formFieldWrapInner">
                    <input
                      type="password"
                      id="password"
                      className="password formField"
                      {...getFieldProps("password")}
                    />
                  </div>
                  <span className="passwordCue">
                    Minimum length is 8 characters
                  </span>
                </div>
                <div className="formRow col-1">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
            <div className="formInfoWrapper">
              <span className="formInfoCue">What's this?</span>
              <p className="formInfo">This form uses the Formik render prop</p>
            </div>
            <div className="console">
              <header className="baseFormHeader">
                <p className="baseFormHeading">Form Values:</p>
                {submitCount > 0 && (
                  <pre>{JSON.stringify(values, null, 2)}</pre>
                )}
              </header>
            </div>
          </>
        )}
      </Formik>
    </>
  );
}

export default FormikRenderProps;
