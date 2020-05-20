import React from "react";
import { withFormik, ErrorMessage } from "formik";
import * as Yup from "yup";

function WithFormik({ handleSubmit, handleChange, values, submitCount }) {
  return (
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
                <ErrorMessage name="email">
                  {errMsg => <span className="errorMessage">{errMsg}</span>}
                </ErrorMessage>
              </label>

              <div className="formFieldWrapInner">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="email formField"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="formFieldWrap">
            <label className="formFieldLabel" htmlFor="password">
              Password
              <ErrorMessage name="password">
                {errMsg => <span className="errorMessage">{errMsg}</span>}
              </ErrorMessage>
            </label>
            <div className="formFieldWrapInner">
              <input
                type="password"
                name="password"
                id="password"
                className="password formField"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <span className="passwordCue">Minimum length is 8 characters</span>
          </div>
          <div className="formRow col-1">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="formInfoWrapper">
        <span className="formInfoCue">What's this?</span>
        <p className="formInfo">This form uses `withFormik`</p>
      </div>
      <div className="console">
        <header className="baseFormHeader">
          <p className="baseFormHeading">Form Values:</p>
          {submitCount > 0 && <pre>{JSON.stringify(values, null, 2)}</pre>}
        </header>
      </div>
    </>
  );
}

export default withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    password: Yup.string()
      .min(8, "Must be more than 8 characters")
      .required("Required")
  }),
  handleSubmit: (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }
})(WithFormik);
