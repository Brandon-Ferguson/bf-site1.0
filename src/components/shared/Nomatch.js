import { Link } from "react-router-dom"
import Footer from "./Footer";
import { ContactSectionStyles } from '../styles/ContactSectionStyles';
import { Button } from "react-bootstrap";

const Nomatch = () => (
  <>
    <br/>
    <br/>
    <br/>
    <ContactSectionStyles>
      <div className="center">
        <h1>404: Page not found</h1>
          <Link to='/'>
            <Button variant='outline-dark'>
              Return Home
            </Button>
          </Link>
      </div>
    </ContactSectionStyles>
    <Footer/>
  </>
)

export default Nomatch;