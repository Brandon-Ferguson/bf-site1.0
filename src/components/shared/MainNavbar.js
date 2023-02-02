import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BFStudiosLogo from '../../components/images/BFStudiosLogo.png';
import { LinkStyle, LogoContainer, LogoImg  } from "../styles/MainNavStyles";

const MainNavbar = () => (
  <>
    <Navbar fixed="top" bg="white" expand="lg">
    <Container>
      <Navbar.Brand>
        <LogoContainer>
          <Link to='/'>
            <LogoImg 
              src={BFStudiosLogo} 
              alt="logo" 
              effect="blur"
            />
          </Link>
        </LogoContainer>
      </Navbar.Brand>
      <LinkStyle>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="">
            <Nav.Link>
              <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ textDecoration: 'none', color: 'black' }} to='/projects'>
                Projects
              </Link>
            </Nav.Link>
            <NavDropdown  title="Contact Me" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/contactme'>
                  Contact Form
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/contactme'>
                  Direct Email
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/contactme'>
                  Social Accounts
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </LinkStyle>
    </Container>
    </Navbar>
  </>
)

export default MainNavbar;