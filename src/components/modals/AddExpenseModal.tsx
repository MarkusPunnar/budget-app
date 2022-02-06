import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface AppExpenseModalProps {
  open: boolean;
  handleClose: () => void;
}

const AddExpenseModal = ({ open, handleClose }: AppExpenseModalProps) => {
  return (
    <>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is a new expense form</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" onClick={handleClose}>
            Add expense
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddExpenseModal;
