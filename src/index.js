import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import Store from "store";
import "index.css";
import App from "App/App";
import reportWebVitals from "reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
