import React from "react";
import { useFormik } from "formik";

function BaseFormik() {
  // 2. Use the `useFormik` hooks.
  // a) Pass the `initalValues` to initialize form field 'states' (same as `defaultValues`)
  // b) Pass the `onSubmit` function that gets called when the form is submitted.
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    onSubmit(values) {
      // Do stuff here...
    }
  });

  return (
    <>
      <div className="formWrapper">
        <form className="baseForm" onSubmit={formik.handleSubmit} noValidate>
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

              <div className="formFieldWrapInner">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="email formField"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="formFieldWrap">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <div className="formFieldWrapInner">
              <input
                type="password"
                name="password"
                id="password"
                className="password formField"
                value={formik.values.password}
                onChange={formik.handleChange}
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
        <p className="formInfo">
          This form uses Formik's `useFormik`, Adds an onSubmit handler to the
          form, onChange handlers to the form fields, and bind the values from
          formik's initialValues (and values) to the form fields. initalValues
          acts as defaultValues, while values preserves the form field's values
          as the onChange updates it.
        </p>
      </div>
      <div className="console">
        <header className="baseFormHeader">
          <p className="baseFormHeading">Form Values:</p>
          {formik.submitCount > 0 && (
            <pre>{JSON.stringify(formik.values, null, 2)}</pre>
          )}
        </header>
      </div>
    </>
  );
}

export default BaseFormik;
