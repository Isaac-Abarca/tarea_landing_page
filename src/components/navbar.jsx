import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {  MDBIcon } from 'mdb-react-ui-kit';

function NavBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <MDBIcon icon="gem" className="me-3" />
        <Navbar.Brand href="#home">ViajesInolvidables</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#places">Places</Nav.Link>
          <Nav.Link href="#footer">Footer</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
