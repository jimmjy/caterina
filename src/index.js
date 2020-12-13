import React from "react";
import ReactDOM from "react-dom";
import { FormspreeProvider } from "@formspree/react";

//components
import { App } from "./pages";

//styles
import "./index.scss";

ReactDOM.render(
  <FormspreeProvider project="1568175174170180933">
    <App />
  </FormspreeProvider>,
  document.getElementById("root")
);
