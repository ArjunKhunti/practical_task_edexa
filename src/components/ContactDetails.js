import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";
import { Button, Card, ListGroup } from "react-bootstrap";

const ContactDetail = (props) => {
  const { name, email, dob, address } = props.location.state.contact;
  return (
    <center>
      <Card style={{ width: "18rem", textAlign: "center" }}>
        <Card.Img variant="top" src={user} alt="user" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <ListGroup.Item>{email}</ListGroup.Item>
            <ListGroup.Item>{dob}</ListGroup.Item>
            <ListGroup.Item>{address}</ListGroup.Item>
          </Card.Text>

          <Link to="/">
            {" "}
            <Button>Back to Contact List</Button>
          </Link>
        </Card.Body>
      </Card>
    </center>
  );
};

export default ContactDetail;
