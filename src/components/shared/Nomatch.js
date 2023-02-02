import { Link } from "react-router-dom"
import Footer from "./Footer";
import { ContactSectionStyles } from '../styles/ContactSectionStyles';
import { Button } from "react-bootstrap";

const Nomatch = () => (
  <>
    <ContactSectionStyles>
      <div className="center">
        <h1>404: Page not found</h1>
        <Button 
        href='/'
        rel='noreferrer'
        variant='outline-dark'>
          Return Home
        </Button>
      </div>
    </ContactSectionStyles>
    <Footer/>
  </>
)

export default Nomatch;