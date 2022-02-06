import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface AppBudgetModalProps {
  open: boolean;
  handleClose: () => void;
}

const AddBudgetModal = ({ open, handleClose }: AppBudgetModalProps) => {
  return (
    <>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is a new budget form</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" onClick={handleClose}>
            Add budget
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddBudgetModal;
