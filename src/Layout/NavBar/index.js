import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import Logo from '../../Assets/logo.png'
import '../../Styles/title.css'

export default function NavBar() {
  return (
    <>
    <Navbar sticky="top">
      <Container>
        <Navbar.Brand href="/" className="d-inline-block align-top">
          <img src={Logo}
          width="25%">
          </img>
          Vincent Okolo
          </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
