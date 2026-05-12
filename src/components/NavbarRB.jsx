import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidgetRI from './CartWidgetRI';

function NavbarRB() {
  console.log('Navbar')
  return (
    <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
            <img src="/encajados.svg" alt="logo" style={{ height: '9rem' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 gap-5"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Lo nuevo</Nav.Link>
            <Nav.Link href="#action2">Favoritos</Nav.Link>
            <NavDropdown title="Puzzles" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Por Tema</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Por Nro de Fichas</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Por Marca</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">🔍</Button>
          </Form>
          <div className="mx-3"><CartWidgetRI/></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarRB;