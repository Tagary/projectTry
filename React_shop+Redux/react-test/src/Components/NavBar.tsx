import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar className="mb-3" bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex">
            <Link className="text-decoration-none" to="/">
              <Nav.Item className="px-3">Gallery</Nav.Item>
            </Link>
            <Link className="text-decoration-none" to="/AboutMe">
              <Nav.Item className="px-3">About me</Nav.Item>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
