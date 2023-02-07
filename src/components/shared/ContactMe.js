import { LogoImg } from "../styles/MainNavStyles";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import { ContactSubTitle, HomeSubTitle } from "../styles/SharedStyles";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import githubicon from '../images/githubicon.png';
import linkedinicon from '../images/linkedinicon.png';
import facebookicon from '../images/facebookicon.png';

const ContactMe = () => ( 
  <> 
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Container>
      <Row>
        <Col>
          <div className="justify-content-center align-items-center d-flex">
            <ContactSubTitle>Email me directly</ContactSubTitle>
          </div>
          <div className="justify-content-center align-items-center d-flex">
            <a href="mailto:brandon.ferguson.ut@gmail.com" target='_top'>
              <Button variant='outline-dark'>
                  Email
              </Button>
            </a>
          </div>
        </Col>
        <Col>
          <h4 className="justify-content-center align-items-center d-flex">OR</h4>
        </Col>
        <Col>
          <div className="justify-content-center align-items-center d-flex">
            <ContactSubTitle>Find me on my socials</ContactSubTitle>
          </div>
          <div className="justify-content-center align-items-center d-flex">
            <a href='https://github.com/Brandon-Ferguson' target='_blank' rel="noreferrer">
              <Image 
                src={githubicon}
                alt='Github' 
                width='30px'
                className='me-3'
              />
            </a>
            <a href='https://www.linkedin.com/in/brandon-ferguson-byu/' target='_blank' rel="noreferrer">
              <Image 
                src={linkedinicon}
                alt='LinkedIn' 
                width='30px'
                className='me-3'
              />
            </a>
            <a href='https://www.facebook.com/brandon.ferguson.182' target='_blank' rel="noreferrer">
              <Image 
                src={facebookicon}
                alt='Facebook' 
                width='30px'
                className='me-3'
              />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
    <br/>
    <br/>
    <ContactForm/>
    <Footer/>
  </>
)


export default ContactMe;