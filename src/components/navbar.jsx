import Nav from "react-bootstrap/Nav";
import { MDBIcon } from "mdb-react-ui-kit";
import {
  MDBContainer,
  MDBNavbar,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { useContext } from "react";
import { CountContext } from "../context/countContext";
import "./navbar.css";

export default function NavBar() {
  const { count } = useContext(CountContext);
  return (
    <div className="nav_prop">
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <Nav.Link href="#home">
            <MDBIcon icon="gem" className="me-3" />
            ViajesInolvidables
          </Nav.Link>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#places">Places</Nav.Link>
            <Nav.Link href="#footer">Footer</Nav.Link>
          </Nav>
          <MDBInputGroup className="d-flex w-auto mb-1">
            <Nav>
              <Nav.Link>Personas a bordo: {count}</Nav.Link>
            </Nav>
          </MDBInputGroup>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
