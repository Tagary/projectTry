import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import Galery from './pages/Galery';
import AboutMe from './pages/AboutMe';
import ImageDetails from './pages/ImageDetails';
import { Container, Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
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
      <Routes>
        <Route path="/" element={<Galery />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/ImgDetail" element={<ImageDetails />} />
      </Routes>
    </div>
  );
}

export default App;
