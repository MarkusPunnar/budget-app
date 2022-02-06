import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import BudgetApp from "./BudgetApp";
import { Provider } from "react-redux";
import { store } from "./state/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BudgetApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
