import { ContactSectionStyles } from '../styles/ContactSectionStyles';
import { Button } from 'react-bootstrap'

const ContactSection = () => (
  <>
    <ContactSectionStyles>
      <div className='center'>
        <h4 className='big-heading'>Get In Touch</h4>
        <p>
          I am focused on developing freelance projects and am available to contract or hire. 
          Whether you have a question, inquiry, or just want to talk board games, I'll do my 
          best to get back to you!
        </p>
        <br/>
        <Button 
          href='/contactme' 
          rel='noreferrer'
          variant='outline-dark'>
          Contact Me
        </Button>
      </div>
    </ContactSectionStyles>
  </>
)

export default ContactSection;