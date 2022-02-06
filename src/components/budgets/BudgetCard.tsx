import React from "react";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { currencyFormatter } from "../../utils/util";
import { Budget, VoidFunction } from "../../app/types";

interface BudgetCardProps {
  budget: Budget;
  onAddExpenseClick: VoidFunction;
}

const getProgressBarVariant = (current: number, max: number) => {
  const ratio = current / max;
  if (ratio > 0.9) {
    return "danger";
  } else if (ratio > 0.75) {
    return "warning";
  }
  return "success";
};

const BudgetCard = ({
  budget: { name, currentAmount, maxAmount },
  onAddExpenseClick,
}: BudgetCardProps) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  return (
    <>
      <Card
        ref={cardRef}
        className={`m-3 py-4 ${
          currentAmount > maxAmount ? "bg-danger bg-opacity-10" : ""
        }`}
      >
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
            <div>{name}</div>
            <div>
              {currencyFormatter.format(currentAmount)} /
              <span className="text-muted fs-6 ms-1">
                {currencyFormatter.format(maxAmount)}
              </span>
            </div>
          </Card.Title>
          <ProgressBar
            className="rounded-pill mb-3"
            variant={getProgressBarVariant(currentAmount, maxAmount)}
            now={currentAmount}
            max={maxAmount}
          />
          <Stack gap={3} direction="horizontal">
            <Button
              onClick={onAddExpenseClick}
              variant="outline-primary"
              className="ms-auto"
            >
              Add Expense
            </Button>
            <Button variant="outline-secondary">View Expenses</Button>
          </Stack>
        </Card.Body>
      </Card>
    </>
  );
};

export default BudgetCard;
