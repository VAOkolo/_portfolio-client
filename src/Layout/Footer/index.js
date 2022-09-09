import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
  return (
    <Navbar position="relative">
      <Container className="justify-content-center">
          <Navbar.Text className="m-auto">© 2022 Vincent Okolo, Inc</Navbar.Text>
        <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="justify-content-end">
                  <Nav.Link href="https://github.com/VAOkolo">Github</Nav.Link>
                  <Nav.Link href="https://www.linkedin.com/in/vincent-okolo/">LinkedIn</Nav.Link>
              </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
