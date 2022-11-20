import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavbarComponent() {
  return (
    <Navbar bg="light gradient" expand={false} className="">
      <Container>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-false"
          aria-labelledby="offcanvasNavbarLabel-expand-false"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id="offcanvasNavbarLabel-expand-false"
              className="pt-3"
            >
              Selecione para onde quer ir 👇🏽
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/posts">Home</Nav.Link>
              <Nav.Link href="/my-posts">Minhas Postagens</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Busque uma postagem pelo id"
                className="me-2"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
