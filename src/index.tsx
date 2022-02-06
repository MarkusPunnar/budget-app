import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import BudgetApp from "./BudgetApp";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BudgetApp />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
