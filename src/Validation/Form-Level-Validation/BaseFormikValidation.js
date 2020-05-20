import React from "react";

// 1. Import `useFormik` from `Formik`
import { useFormik } from "formik";

function BaseFormikValidation() {
  // 2. Use the `useFormik` hooks.
  // a) Pass the `initalValues` to initialize form field 'states' (same as `defaultValues`)
  // b) Pass the `onSubmit` function that gets called when the form is submitted.
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate() {
      const errors = {};

      // Add the touched to avoid the validator validating all fields at once
      if (formik.touched.email && !formik.values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formik.values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (formik.touched.email && !formik.values.password) {
        errors.password = "Required";
      } else if (formik.values.password.length <= 8) {
        errors.password = "Must be more than 8 characters";
      }

      return errors;
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
      <div className="console">
        <header className="baseFormHeader">
          <p className="baseFormHeading">Form Errors </p>
          {<pre>{JSON.stringify(formik.errors, null, 2)}</pre>}
        </header>
      </div>
    </>
  );
}

export default BaseFormikValidation;
