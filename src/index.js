import React from "react";
import ReactDOM from "react-dom";
import { FormspreeProvider } from "@formspree/react";

//components
import { App } from "./pages";

//styles
import "./index.scss";

ReactDOM.render(
  <FormspreeProvider project="1566029286689734121">
    <App />
  </FormspreeProvider>,
  document.getElementById("root")
);
