import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MDBIcon } from "mdb-react-ui-kit";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { useContext } from "react";
import { CountContext } from "../context/countContext";
import "./navbar.css";

export default function NavBar() {
  const { count } = useContext(CountContext);
  return (
    <MDBNavbar className="nav_prop" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <MDBIcon icon="gem" className="me-3" />
          <Navbar.Brand href="#home">ViajesInolvidables</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#places">Places</Nav.Link>
            <Nav.Link href="#footer">Footer</Nav.Link>
          </Nav>
        </MDBNavbarBrand>
        <MDBInputGroup className="d-flex w-auto mb-1">
          <Nav>
            <Nav.Link>Perosnas a bordo: {count}</Nav.Link>
          </Nav>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
  );
}
