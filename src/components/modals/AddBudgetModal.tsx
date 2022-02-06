import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAppDispatch } from "../../app/hooks";
import { addBudget } from "../../state/budgetSlice";

interface AppBudgetModalProps {
  open: boolean;
  handleClose: () => void;
}

const AddBudgetModal = ({ open, handleClose }: AppBudgetModalProps) => {
  const dispatch = useAppDispatch();
  const [budgetName, setBudgetName] = React.useState<string>("");
  const [maximumAmount, setMaximumAmount] = React.useState<number>(0);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addBudget({
        id: 2,
        name: budgetName,
        currentAmount: 0,
        maxAmount: maximumAmount,
        expenses: [],
      })
    );
    handleClose();
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setBudgetName(e.target.value);
  };
  const handleMaxAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMaximumAmount(Number(e.target.value));
  };
  return (
    <>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Budget name</Form.Label>
              <Form.Control
                onChange={handleNameChange}
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Maximum amount</Form.Label>
              <Form.Control
                onChange={handleMaxAmountChange}
                type="number"
                placeholder="0"
              />
            </Form.Group>
            <Button variant="outline-success" type="submit">
              Add budget
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddBudgetModal;
