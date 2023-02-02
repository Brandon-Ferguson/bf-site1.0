import { ProjectImg } from "../styles/ProjectIntroStyles";
import PortfolioWebsite from '../../components/images/PortfolioWebsite.jpeg'
import { Row, Col } from 'react-bootstrap';
import { AboutStyles, PortraitImg, AboutContainer, AboutLeft, AboutSec, AboutRight } from '../styles/ProjectIntroStyles';
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

const ProjectIntro = () => (
  <>
    <AboutContainer>
      <Row>
        <Col>
          <AboutSec>
            <AboutLeft>
              <ProjectImg 
                src={PortfolioWebsite}
                alt="logo" 
                effect="blur"
              />
            </AboutLeft>
          </AboutSec>
        </Col>
        <Col>
          <AboutSec>
            <AboutRight>
              <h4>Check out my projects</h4>
              <p>
                I'm always working on new projects to simplify user experience. Come take a look at
                some of my featured projects!
              </p>
              <Link to='/projects'>
                <Button 
                  variant='outline-dark'>
                  Projects
                </Button>
              </Link>
            </AboutRight>
          </AboutSec>
        </Col>
      </Row>
    </AboutContainer>
    <br/>
    <br/>
    <br/>
    <br/>
  </>
)

export default ProjectIntro;