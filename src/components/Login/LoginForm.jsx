import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import classes from "./Login.module.css";
import { singupSchema } from "../Common/Validation/LoginValidation";
import { MyInput } from "../Common/FormControls/MyInput";

const LoginForm = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        validationSchema={singupSchema}
        onSubmit={(values, { setSubmitting }) => {
          props.loginUser(values.email, values.password, values.rememberMe)
          setSubmitting(false);
        }}>
        {({ isSubmitting }) => (
          <Form>
            <div>
              <p>Email</p>
              <Field type="email" name="email" component={MyInput}/>
            </div>
            <div>
              <p>Password</p>
              <Field type="password" name="password" component={MyInput}/>
            </div>
            <label htmlFor="checkbox">
              <Field id="checkbox" type="checkbox" name="rememberMe" />
              remember me
            </label>
            <div>
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
