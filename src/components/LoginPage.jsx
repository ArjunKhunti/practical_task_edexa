import React, { Suspense } from "react";
import { Link, Redirect } from "react-router-dom";
import { Form, Button, Card, Container } from "react-bootstrap";


class LoginPage extends React.Component {
  loggedIn = false;
  state = {
    name: "",
    email: "",
    address: "",
    password: "",
    dob: "",
  };
  data = "";

  handleLogin = (event) => {
    event.preventDefault();
    if (this.state.email === "" || this.state.password === "") {
      alert("All fields are mandatory!");
    } else {
      this.setState({
        loggedIn: true,
      });
      localStorage.setItem("useremail", this.state.email);
    }
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <Suspense fallback={<div>Please wait ...</div>}>
          <Redirect to="/dashboard" />
        </Suspense>
      );
    }
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
                <center>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ width: "50%" }}
                  >
                    Submit
                  </Button>
                </center>
              </Form>
            </Card.Body>
          </Card>
          <center>
            <Link to={{ pathname: `/add` }}>
              <Button
                variant="primary"
                type="submit"
                style={{ marginTop: "10%", width: "50%" }}
              >
                New User? Sign-up here
              </Button>
            </Link>
          </center>
        </Container>
      </div>
    );
  }
}

export default LoginPage;
