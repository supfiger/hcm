import React from "react";
import { Formik, Form as FormikForm, ErrorMessage } from "formik";
import { Link, useLocation } from "react-router-dom";
import * as Yup from "yup";
import { observer, inject } from "mobx-react";

import styles from "./Form.module.scss";
import { Button, ErrorText, Input } from "components";

const SignUpForm = props => {
  const initialValues = { fullName: "", email: "", password: "", checkbox: false };
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(6, "Password is too short — should be 6 chars at least"),
    checkbox: Yup.bool().oneOf([true], "Checkbox is required"),
  });
  const onSubmit = () => {};

  return (
    <div className={styles.Form}>
      <section className={styles.topSection}>
        <div className={styles.link}>
          <span>Already a member?</span>
          <Link to="/signin">Sign in</Link>
        </div>
        <h2 className={styles.formTitle}>Sign up to HCM Compensation Intelligence & Analytics</h2>
      </section>
      <section className={styles.bottomSection}>
        <Button className={styles.signGoogleButton}>
          <span>G</span>
          <span>Sign up with Google</span>
        </Button>
        <div className={styles.lineBlock}>
          <span></span>
          <span>Or</span>
          <span></span>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <FormikForm className={styles.formikForm}>
            <label className={styles.formikItem}>
              <h3>Full Name</h3>
              <Input type="text" name="fullName" placeholder="Henry Swat" />
              <ErrorMessage name="fullName" component={ErrorText} />
            </label>
            <label className={styles.formikItem}>
              <h3>Email address</h3>
              <Input type="email" name="email" placeholder="hcm@gmail.com" />
              <ErrorMessage name="email" component={ErrorText} />
            </label>
            <label className={styles.formikItem}>
              <h3>Password</h3>
              <Input type="password" name="password" placeholder="6+ characters" />
              <ErrorMessage name="password" component={ErrorText} />
            </label>
            <label className={styles.formikItem}>
              <Input type="checkbox" name="checkbox" />
              <div className={styles.checkboxBlock}>
                <span>Creating an account means you’re okay with our</span> <br />
                <Link to="/">Terms of Use</Link>,{` `} <Link to="/">Privacy Policy</Link>,{` `}
                <span>and our</span>
                <Link to="/">default Settings</Link>.
              </div>
              <ErrorMessage name="checkbox" component={ErrorText} />
            </label>
            <Button type="submit" className={styles.submitButton}>
              Create Account
            </Button>
          </FormikForm>
        </Formik>
      </section>
    </div>
  );
};

const SignInForm = () => {
  const initialValues = { email: "", password: "", checkbox: false };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(6, "Password is too short — should be 6 chars at least"),
    checkbox: Yup.bool(),
  });
  const onSubmit = () => {};

  return (
    <div className={styles.Form}>
      <section className={styles.topSection}>
        <div className={styles.link}>
          <span>Don’t have an account?</span>
          <Link to="/signup">Sign up</Link>
        </div>
        <h2 className={styles.formTitle}>HCM Compensation Intelligence & Analytics</h2>
      </section>
      <section className={styles.bottomSection}>
        <Button className={styles.signGoogleButton}>
          <span>G</span>
          <span>Sign in with Google</span>
        </Button>
        <div className={styles.lineBlock}>
          <span></span>
          <span>Or</span>
          <span></span>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <FormikForm className={styles.formikForm}>
            <label className={styles.formikItem}>
              <h3>Email address</h3>
              <Input type="email" name="email" placeholder="hcm@gmail.com" />
              <ErrorMessage name="email" component={ErrorText} />
            </label>
            <label className={styles.formikItem}>
              <div className={styles.passwordBlock}>
                <h3>Password</h3>
                <span onClick="">Forgot your password?</span>
              </div>
              <Input type="password" name="password" placeholder="6+ characters" />
              <ErrorMessage name="password" component={ErrorText} />
            </label>
            <label className={styles.formikItem}>
              <Input type="checkbox" name="checkbox" />
              <div className={styles.checkboxBlock}>
                <span>Keep me Logged in.</span>
              </div>
              <ErrorMessage name="checkbox" component={ErrorText} />
            </label>
            <Button type="submit" className={styles.submitButton}>
              Log in
            </Button>
          </FormikForm>
        </Formik>
      </section>
    </div>
  );
};

const Form = () => {
  const { pathname } = useLocation();

  switch (pathname) {
    case "/signup":
      return <SignUpForm />;
    case "/signin":
      return <SignInForm />;
    default:
      return;
  }
};

export default inject("store")(observer(Form));
