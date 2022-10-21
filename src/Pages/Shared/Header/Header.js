import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftNav from "../LeftNav/LeftNav";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <Navbar
      className="mb-2"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="#home">Holud Alo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">All News</Nav.Link>
            <NavDropdown title="More News" id="collasible-nav-dropdown">
              <NavDropdown.Item className="d-lg-none" href="#action/3.1">
                <LeftNav></LeftNav>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
                Get Free Money!
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="d-flex align-items-center justify-content-around">
            <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ? (
                <Image
                  style={{ height: "40px" }}
                  roundedCircle
                  src={user.photoURL}
                ></Image>
              ) : (
                <p>No image</p>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
