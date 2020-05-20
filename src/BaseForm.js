import React from "react";

// Demo Login Form
function BaseForm() {
  return (
    <div className="formComp">
      <div className="formWrapper">
        <form className="baseForm">
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
                type="text"
                name="password"
                id="password"
                className="password formField"
              />
            </div>
            <span className="passwordCue">Minimum length is 8 characters</span>
          </div>
          <div className="formRow col-1">
            <button type="submit" disabled>
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="formInfoWrapper">
        <span className="formInfoCue">What's this?</span>
        <p className="formInfo">
          We are starting out with this simple base form to learn and
          understanding the fundamentals of formik.
        </p>
      </div>
    </div>
  );
}

export default BaseForm;
