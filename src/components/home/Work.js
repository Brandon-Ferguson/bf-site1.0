import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Button } from 'react-bootstrap';
import { AboutStyles, AboutContainer, AboutSec } from '../styles/WorkStyles'
 
function Work() {
  return (
    <>
      <AboutContainer>
        <Row>
          <h4 className='medium-heading'>Where I've worked / Experience</h4>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Col sm={4}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="1" style={{color: 'black'}}>Blue Raven Solar</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="2" style={{color: 'black'}}>Façade Games</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="3" style={{color: 'black'}}>TaxHawk</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="4" style={{color: 'black'}}>Mint Solar</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={7}>
                    <Tab.Content>
                      <Tab.Pane eventKey="1">
                        <p>
                          Project Management Team Lead
                          <li>Promoted after 1 year to lead the installation project management team of 14 individuals</li>
                          <li>Lowered team turnover to 0% over a 4-month period by increasing training and morale</li>
                          <li>Increased team production by 20% in first four months as its lead</li>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="2">
                        <p>
                          Data Analyst Intern
                          <li>25% increase in 4 products’ completion by gathering and testing data</li>
                          <li>Created scripts to analyze company procurement and production costs</li>
                          <li>Generated 3 production quotes from international sources</li>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="3">
                        <p>
                          Customer Support Specialist
                          <li>Addressed over 1,500 client support tickets</li>
                          <li>Regularly maintained active chats resolving client concerns</li>
                          <li>Achieved high quality review ratings from supervisors</li>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="4">
                        <p>
                          Senior Account Manager
                          <li>Analyzed Salesforce company data and compiled weekly KPI reports</li>
                          <li>Trained and coordinated a team of 4 account managers</li>
                          <li>Managed over 500 customer accounts across several unique markets</li>
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