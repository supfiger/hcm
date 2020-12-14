import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { observer, inject } from "mobx-react";

import { SignPage } from "pages";
import styles from "./App.module.scss";

const App = props => {
  const { setWindowSize } = props.store.AppStore;

  useEffect(() => {
    window.addEventListener("resize", setWindowSize);
    // return () => window.removeEventListener("resize", setWindowSize);
  });

  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="signup" />
          <Route path="/signup" component={SignPage} />
          <Route path="/signin" component={SignPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default inject("store")(observer(App));
