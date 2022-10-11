import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import CartWidget from '../icons/CartWidget';


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
            <Nav.Link href="#home">Cañas</Nav.Link>
            <Nav.Link href="#link">Reels</Nav.Link>
            <NavDropdown title="Articulos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Campings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cuchillos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Ropa</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  );
}

export default NavBar;