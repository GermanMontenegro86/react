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
      
        <Navbar.Brand href="#home"><img className='logo' src="https://fontmeme.com/permalink/221012/dddfc5421b281ebd65d419abd78f8ed0.png" alt="fuente-de-google" border="0"/></Navbar.Brand>
        <CartWidget/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Cañas</Nav.Link>
            <Nav.Link href="#">Reels</Nav.Link>
            <Nav.Link href="#">Camping</Nav.Link> 
            <Nav.Link href="#">Ropa</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  );
}

export default NavBar;

