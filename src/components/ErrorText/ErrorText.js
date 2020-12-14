import React from "react";

import styles from "./ErrorText.module.scss";

const ErrorText = ({ children }) => {
  return <span className={styles.ErrorText}>{children}</span>;
};

export default ErrorText;
