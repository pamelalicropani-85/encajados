import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidgetRI from './CartWidgetRI';
import { NavLink } from 'react-router-dom';

function NavbarRB({qty}) {
  console.log('Navbar')
  return (
    <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
            <img src="/encajados.svg" alt="logo" style={{ height: '9rem' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 gap-5"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <NavDropdown title="Puzzles" id="navbarScrollingDropdown">
              <NavDropdown.Item as={NavLink} to="/category/nuevos">Nuevos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/favoritos">Favoritos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/oferta">Oferta</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          
          
          <div className="mx-3"><CartWidgetRI qty={qty}/></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarRB;