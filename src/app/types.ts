export type VoidFunction = () => void;

export interface Budget {
  id: number;
  name: string;
  currentAmount: number;
  maxAmount: number;
  expenses: [];
}

export interface Expense {
  id: number;
  summary: string;
  description: string;
  amount: number;
}
