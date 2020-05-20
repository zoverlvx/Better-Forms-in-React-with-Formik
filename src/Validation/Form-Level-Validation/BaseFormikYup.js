import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function BaseFormikYup() {
  // 2. Use the `useFormik` hooks.
  // a) Pass the `initalValues` to initialize form field 'states' (same as `defaultValues`)
  // b) Pass the `onSubmit` function that gets called when the form is submitted.
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .min(8, "Must be more than 8 characters")
        .required("Required")
    }),
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

export default BaseFormikYup;
