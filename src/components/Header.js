import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Edexa Practical Task</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
