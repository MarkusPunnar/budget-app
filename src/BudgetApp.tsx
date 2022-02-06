import React from "react";
import Budgets from "./components/budgets/Budgets";
import BudgetNavbar from "./components/navbar/BudgetNavbar";

const BudgetApp = () => {
  return (
    <div>
      <BudgetNavbar />
      <Budgets />
    </div>
  );
};

export default BudgetApp;
