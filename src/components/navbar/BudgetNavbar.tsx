import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./BudgetNavbar.css";
import Nav from "react-bootstrap/Nav";

const BudgetNavbar = () => {
  return (
    <>
      <Navbar bg="light" expand="md">
        <Container fluid>
          <Navbar.Brand>Budget App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#budgets">Budgets</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default BudgetNavbar;
