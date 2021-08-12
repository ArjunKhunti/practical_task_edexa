import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email, address, dob, password } =
      props.location.state.contact;
    this.state = {
      id,
      name,
      email,
      address,
      dob,
      password,
    };
  }

  update = (event) => {
    event.preventDefault();
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.address === "" ||
      this.state.dob === "" ||
      this.state.password === ""
    ) {
      alert("All the Fields are mandatory!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "", address: "", dob: "", password: "" });
    this.props.history.push("/dashboard");
  };

  render() {
    if (localStorage.getItem("useremail") == null) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Container fluid="md" className="mt-5">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Sign Up</Card.Title>
            </Card.Body>
            <Card.Body>
              <Form onSubmit={this.update}>
                <Form.Group className="mb-3" controlId="userName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={this.state.name}
                    onChange={(event) =>
                      this.setState({ name: event.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="userEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter EmailId"
                    value={this.state.email}
                    onChange={(event) =>
                      this.setState({ email: event.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="userAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Address"
                    value={this.state.address}
                    onChange={(event) =>
                      this.setState({ address: event.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="userDOB">
                  <Form.Label>Birth Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date_of_birth"
                    value={this.state.dob}
                    onChange={(event) =>
                      this.setState({ dob: event.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={(event) =>
                      this.setState({ password: event.target.value })
                    }
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Update
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default EditContact;
