import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BudgetCard from "./BudgetCard";
import AddExpenseModal from "../modals/AddExpenseModal";
import AddBudgetCard from "./AddBudgetCard";
import { useAppSelector } from "../../app/hooks";
import { selectBudgets } from "../../state/budgetSlice";

const Budgets = () => {
  const [addExpenseModalOpen, setAddExpenseModelOpen] =
    React.useState<boolean>(false);
  const budgets = useAppSelector(selectBudgets);
  return (
    <>
      <Container fluid>
        <Row xs={1} md={2} xl={3} xxl={4}>
          {budgets.map((budget, idx) => (
            <Col key={idx} xs={12} md={6} xl={4} xxl={3}>
              <BudgetCard
                budget={budget}
                onAddExpenseClick={() => setAddExpenseModelOpen(true)}
              />
            </Col>
          ))}
          <Col xs={12} md={6} xl={4} xxl={3}>
            <AddBudgetCard />
          </Col>
        </Row>
      </Container>
      <AddExpenseModal
        open={addExpenseModalOpen}
        handleClose={() => setAddExpenseModelOpen(false)}
      />
    </>
  );
};

export default Budgets;
