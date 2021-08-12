import { Navbar, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const Header = () => {
  if(localStorage.getItem("useremail") == null){
    return <Redirect to="/" />
  }
  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">Edexa Practical Task</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
