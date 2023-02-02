import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { AboutStyles, AboutContainer, AboutSec } from '../styles/WorkStyles'

function Work() {
  return (
    <>
      <AboutContainer>
        <Row>
          <h4 className='medium-heading'>My Education / Degrees & Certifications</h4>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Col sm={4}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="1" style={{color: 'black'}}>DevPointLabs</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="2" style={{color: 'black'}}>Brigham Young University</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={7}>
                    <Tab.Content>
                      <Tab.Pane eventKey="1">
                        <p>
                          Full-Stack Web Development Certificate
                          <li>October 2022 - February 2023</li>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="2">
                        <p>
                          Bachelors of General Studies, Business Management
                          <li>June 2017 - June 2023</li>
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
              </Tab.Container>
        </Row>
      </AboutContainer>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}

export default Work;