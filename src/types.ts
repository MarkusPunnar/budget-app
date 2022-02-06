export type VoidFunction = () => void;

export interface Budget {
  name: string;
  currentAmount: number;
  maxAmount: number;
}

export interface Expense {
  summary: string;
  description: string;
  amount: number;
}
