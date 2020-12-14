import React from "react";
import classNames from "classnames";

import LogoPicture from "assets/logo.png";
import styles from "./Logo.module.scss";

const Logo = ({ className }) => {
  return (
    <div className={classNames(styles.Logo, className)}>
      <div className={styles.imageBlock}>
        <img src={LogoPicture} alt="logo" />
      </div>
      <section className={styles.titleSection}>
        <h3 className={styles.title}>Hostettler & Company</h3>
        <h4 className={styles.subTitle}>Governance. Risk. Compensation.</h4>
      </section>
    </div>
  );
};

export default Logo;
