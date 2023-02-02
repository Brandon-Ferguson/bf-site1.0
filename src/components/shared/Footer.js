import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FooterStyles } from '../styles/FooterStyles';

const Footer = () => (
  <>
    <br />
    <br />
    <Navbar fixed="bottom" bg="transparent" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="">
            <Row>
              <Col><p>Developed & Designed by Brandon Ferguson</p></Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
)

export default Footer;