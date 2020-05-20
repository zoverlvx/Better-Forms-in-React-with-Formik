import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function BaseFormikSetValues() {
  const {
    values,
    handleSubmit,
    submitCount,
    getFieldProps,
    setValues,
    touched,
    errors,
    setFieldValue
  } = useFormik({
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
      // We added a `username` value for the user which is everything before @ in their email address.
      setValues({
        ...values,
        username: `@${values.email.split("@")[0]}`
      });
    }
  });

  useEffect(() => {
    if (values.email === "flaggedemail@mail.com") {
      // It could be a string or any other type
      setFieldValue("isEmailFlagged", { flagged: true, reason: "test" });
    }
  }, [values.email, setFieldValue]);

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
                <span className="errorMessage">
                  {touched["email"] && errors["email"]}
                </span>
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
              <span className="errorMessage">
                {touched["password"] && errors["password"]}
              </span>
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
      <div className="console">
        <header className="baseFormHeader">
          <p className="baseFormHeading">Form Submission Output</p>
          {submitCount > 0 && <pre>{JSON.stringify(values, null, 2)}</pre>}
        </header>
      </div>
      <div className="console">
        <header className="baseFormHeader">
          <p className="baseFormHeading">Errors</p>
          {<pre>{JSON.stringify(errors, null, 2)}</pre>}
        </header>
      </div>
    </>
  );
}

export default BaseFormikSetValues;
