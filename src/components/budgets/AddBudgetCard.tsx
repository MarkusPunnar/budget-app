import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlinePlus } from "react-icons/ai";
import AddBudgetModal from "../modals/AddBudgetModal";
import "./AddBudgetCard.css";

const AddBudgetCard = () => {
  const [addBudgetModalOpen, setAddBudgetModelOpen] =
    React.useState<boolean>(false);
  return (
    <>
      <Card
        className="m-3 addBudgetCard"
        onClick={() => setAddBudgetModelOpen(true)}
      >
        <Card.Body className="d-flex justify-content-center align-items-center flex-column">
          <AiOutlinePlus size={126} color="gray" />
          <h5 className="text-muted">Add New Budget</h5>
        </Card.Body>
      </Card>
      <AddBudgetModal
        open={addBudgetModalOpen}
        handleClose={() => setAddBudgetModelOpen(false)}
      />
    </>
  );
};

export default AddBudgetCard;
