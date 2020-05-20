import React from "react";
import { useFormik } from "formik";

function BaseFormikRefactored() {
  const {
    values: { email, password },
    handleSubmit,
    submitCount,
    getFieldProps
  } = useFormik({
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
            <div className="formFieldWrapInner">
              <input
                type="password"
                id="password"
                className="password formField"
                {...getFieldProps("password")}
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
          This is the same as `BaseFormik`, only that it has been refactored to
          eliminate redundancies that has to do with event handlers, and form
          field props.
        </p>
      </div>
      <div className="console">
        <header className="baseFormHeader">
          <p className="baseFormHeading">Form Submission Output</p>
          {submitCount > 0 && (
            <pre>{JSON.stringify({ email, password }, null, 2)}</pre>
          )}
        </header>
      </div>
    </>
  );
}

export default BaseFormikRefactored;
