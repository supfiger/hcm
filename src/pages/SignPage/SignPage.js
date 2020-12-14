import React from "react";

import { Form, Logo } from "components";
import styles from "./SignPage.module.scss";

const SignPage = () => {
  return (
    <div className={styles.SignPage}>
      <div className={styles.container}>
        <section className={styles.leftSection}>
          <Logo className={styles.logo} />
          <div className={styles.imageBlock}>
            <h1 className={styles.title}>
              Governance. <br /> Risk & Finance. <br /> Compensation.
            </h1>
          </div>
        </section>
        <section className={styles.rightSection}>
          <Form />
        </section>
      </div>
    </div>
  );
};

export default SignPage;
