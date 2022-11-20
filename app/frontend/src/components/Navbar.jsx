import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';

function NavbarComponent() {
  const navigate = useNavigate();
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
            <Nav className="d-grid gap-2">
              <Nav.Link className="btn btn-outline-info" href="/posts">
                Home
              </Nav.Link>
              <Nav.Link className="btn btn-outline-success" href="/my-posts">
                Minhas Postagens
              </Nav.Link>
              <button
                className="btn btn-outline-warning"
                type="button"
                onClick={() => {
                  localStorage.clear();
                  navigate('/login');
                }}
              >
                Sair
              </button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
