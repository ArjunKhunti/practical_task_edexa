import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormControl, Row, Col, Table } from "react-bootstrap";

const ContactList = (props) => {
  const inputElement = useRef("");

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <tbody>
        <tr>
          <td>
            <Link
              to={{
                pathname: `/contact/${contact.id}`,
                state: { contact: contact },
              }}
            >
              {contact.name}
            </Link>
          </td>
          <td>{contact.email}</td>
          <td>{contact.dob}</td>
          <td>{contact.address}</td>
          <td>
            <Link to={{ pathname: `/edit`, state: { contact: contact } }}>
              <Button variant="primary" style={{ color: "white" }}>
                Edit
              </Button>
            </Link>
          </td>
          <td>
            <Button
              variant="danger"
              onClick={() => deleteContactHandler(contact.id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      </tbody>
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputElement.current.value);
  };

  return (
    <div style={{ marginTop: "5%" }}>
      <Row>
        <Col>
          <h4>Contact List</h4>
        </Col>
        <Col>
          <Form className="d-flex">
            <FormControl
              ref={inputElement}
              type="text"
              placeholder="Search"
              className="prompt"
              value={props.term}
              onChange={getSearchTerm}
            />
          </Form>
        </Col>
        <Col>
          <Link to="/add" style={{ float: "right" }}>
            <Button>Add Contact</Button>
          </Link>
        </Col>
      </Row>
      <div className="ui celled list">
        <Table striped bordered hover style={{ marginTop: "20px" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Birthdate</th>
              <th>Address</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {renderContactList.length > 0
            ? renderContactList
            : "No Contacts available"}
        </Table>
      </div>
    </div>
  );
};

export default ContactList;
