import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar className="mb-3" bg="light" expand="lg">
      <Container>
        <Nav className="me-auto d-flex">
          <Link className="text-decoration-none" to="/">
            <Nav.Item className="px-3">Home</Nav.Item>
          </Link>
          <Link className="text-decoration-none" to="/AboutMe">
            <Nav.Item className="px-3">Link</Nav.Item>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
