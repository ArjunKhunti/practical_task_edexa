import React from "react";
import { Form, Button, Card, Container } from "react-bootstrap";

class LoginPage extends React.Component {
  state = {
    name: "",
    email: "",
    address: "",
    password: "",
    dob: "",
  };

  handleLogin = (event) => {
    event.preventDefault();
    if (this.state.email === "" || this.state.password === "") {
      alert("All fields are mandatory!");
    }
  };

  render() {
    return (
      <div>
        <Container fluid="md" className="mt-5">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Login</Card.Title>
            </Card.Body>
            <Card.Body>
              <Form onSubmit={this.handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>EmailId</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={(event) =>
                      this.setState({ email: event.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
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
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default LoginPage;
