import React from "react";
import { Field } from "formik";
import classNames from "classnames";

import styles from "./Input.module.scss";

const Input = ({ name, type, className, placeholder }) => {
  const isCheckbox = type === "checkbox";

  switch (isCheckbox) {
    case true:
      return (
        <div className={styles.checkboxWrap}>
          <Field
            name={name}
            type={type}
            className={classNames(styles.Input, styles.checkboxInput, className)}
          />
          <span className={styles.checkMark} />
        </div>
      );
    case false:
    default:
      return (
        <Field
          name={name}
          type={type}
          className={classNames(styles.Input, className)}
          placeholder={placeholder}
        />
      );
  }
};

export default Input;
