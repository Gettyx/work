import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Info from "./Info";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Info />
  </React.StrictMode>,
  rootElement
);
