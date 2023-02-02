import Intro from "./Intro";
import About from "./About";
import ProjectIntro from "./ProjectIntro";
import ContactSection from "./ContactSection";
import Education from "./Education";
import Work from "./Work";
import { HomeStyles } from "../styles/HomeStyles";
import Footer from "../shared/Footer";

const Home = () => ( 
  <> 
    <HomeStyles>
      <Intro/>
      <br/>
      <br/>
      <About/>
      <Work/>
      <br/>
      <br/>
      <ProjectIntro/>
      <br/>
      <br/>
      <Education/>
      <ContactSection/>
      <Footer/>
      <div class="vl1">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </HomeStyles>
  </>
)


export default Home;