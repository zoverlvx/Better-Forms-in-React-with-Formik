import React, { useState } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import BaseForm from "./BaseForm";
import BaseFormik from "./BaseFormik";
import BaseFormikRefactored from "./BaseFormikRefactored";
import FormikRenderProps from "./FormikRenderProps";
import FormikRenderPropsRefactored from "./FormikRenderPropsRefactored";
import WithFormik from "./WithFormik";
import BaseFormikValidation from "./Validation/Form-Level-Validation/BaseFormikValidation";
import BaseFormikYup from "./Validation/Form-Level-Validation/BaseFormikYup";
import BaseFormikSetValues from "./BaseFormikSetValues";

function HTMLForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <form>
      <div className="formRow">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          className="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="formRow">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <BaseForm />
          </Route>
          <Route path="/base-form">
            <Redirect to="/" />
          </Route>
          <Route path="/base-formik">
            <BaseFormik />
          </Route>
          <Route path="/base-formik-refactored">
            <BaseFormikRefactored />
          </Route>
          <Route path="/formik-render-props">
            <FormikRenderProps />
          </Route>
          <Route path="/formik-render-props-refactored">
            <FormikRenderPropsRefactored />
          </Route>
          <Route path="/formik-render-props-refactored">
            <FormikRenderPropsRefactored />
          </Route>
          <Route path="/validate">
            <BaseFormikValidation />
          </Route>
          <Route path="/validate-schema">
            <BaseFormikYup />
          </Route>
          <Route path="/with-formik">
            <WithFormik />
          </Route>
          <Route path="/hatch-escape">
            <BaseFormikSetValues />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
