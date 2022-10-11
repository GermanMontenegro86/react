import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
  return (
    <div>
    <Navbar bg="z" expand="lg">
      <Container>
      
        <Navbar.Brand href="#home">PESCA MEJOR!!!!</Navbar.Brand>
        <CartWidget/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Cañas</Nav.Link>
            <Nav.Link href="#">Reels</Nav.Link>
            <NavDropdown title="Articulos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Campings</NavDropdown.Item>
              <NavDropdown.Item href="#">Cuchillos</NavDropdown.Item>
              <NavDropdown.Item href="#">Ropa</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  );
}

export default NavBar;