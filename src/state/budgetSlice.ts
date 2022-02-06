import { Budget } from "../app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface BudgetState {
  budgets: Budget[];
}

const initialState: BudgetState = {
  budgets: [
    {
      id: 1,
      name: "Entertainment",
      currentAmount: 0,
      maxAmount: 100,
      expenses: [],
    },
  ],
};

const budgetSlice = createSlice({
  name: "budgets",
  initialState,
  reducers: {
    addBudget: (prevState, action: PayloadAction<Budget>) => {
      prevState.budgets.push(action.payload);
    },
  },
});

//Selectors

export const selectBudgets = (state: RootState) => state.budget.budgets;

export const { addBudget } = budgetSlice.actions;

export default budgetSlice.reducer;
