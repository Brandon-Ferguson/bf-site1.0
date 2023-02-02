import Footer from "./Footer";
import { ProjectImg } from "../styles/ProjectIntroStyles";
import PortfolioWebsite from '../images/PortfolioWebsite.jpeg';
import ElephantStore from '../images/ElephantStore.jpeg';
import { Container, Row, Col } from "react-bootstrap";

const Projects = () => ( 
  <> 
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Container>
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <a href="/projects" target='' rel="noreferrer">
            <ProjectImg 
              src={ElephantStore}
              alt="logo" 
              effect="blur"
              width='80%'
            />
          </a>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <a href="/projects" target='' rel="noreferrer">
            <ProjectImg 
              src={PortfolioWebsite}
              alt="logo" 
              effect="blur"
              width='80%'
            />
          </a>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col xs='5' className="d-flex align-items-center justify-content-center">
          <h5>Elephant Toy Store</h5>
        </Col>
        <Col xs='7' className="d-flex align-items-center justify-content-center">
          <h5>BF Studios</h5>
        </Col>
      </Row>
    </Container>
    <Footer/>
  </>
)


export default Projects;