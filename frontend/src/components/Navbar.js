import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './css/Navbar.css'
function ColorSchemesExample() {
  return (
    <>
      
   
      <Navbar bg="primary" data-bs-theme="dark" id="Mainnav">
        <Container>
          
          <Nav className="me-auto " >
           <Link to="/home" id="navlink" style={{fontFamily:"Helvetica", fontSize: "18px"} }>Home</Link>
            <Link to="/about" id="navlink" style={{fontFamily:"Helvetica", fontSize: "18px"}}>About</Link>
            <Link to="/contact" id="navlink" style={{fontFamily:"Helvetica", fontSize: "18px"}}>Contact</Link>
            <Link to="/login" id="navlink" style={{fontFamily:"Helvetica", fontSize: "18px"}}>Login</Link>
            <Link to="/register" id="navlink" style={{fontFamily:"Helvetica", fontSize: "18px"}}>Register</Link>
            <Link to="/course" id="navlink" style={{fontFamily:"Helvetica", fontSize: "18px"}}>Register</Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;