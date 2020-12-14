import React from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

const Button = props => {
  const { children, onClick, className, type = "button" } = props;

  return (
    <button className={classNames(styles.Button, className)} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
