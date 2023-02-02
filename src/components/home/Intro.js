import { IntroSectionStyles } from '../styles/IntroStyles';
import { Button } from 'react-bootstrap'

const Intro = () => (
  <>
    <IntroSectionStyles>
      <div className='leftalign'>
        <h6>Hi, my name is</h6>
        <h1 className="big-heading">Brandon Ferguson.</h1>
        <h2 className="big-heading">I develop web solutions.</h2>
        <p>
          I'm a Full-Stack Web Developer who specializes in engineering exceptional user 
          experiences. Currently, I am focused on developing freelance projects and am 
          available to contract or hire. 
        </p>
        <br/>
        <Button 
          href='https://docs.google.com/document/d/1as4Bd-Xg6l8xzIw4CwAjM-DuYPr4JgAH/edit?usp=sharing&ouid=103578947439475058586&rtpof=true&sd=true' 
          target='_blank' 
          rel='noreferrer'
          variant='outline-dark'>
          Check out my Resume!
        </Button>
      </div>
    </IntroSectionStyles>
  </>
)

export default Intro;