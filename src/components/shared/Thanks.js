import BFStudiosLogo from '../../components/images/BFStudiosLogo.png'
import { HLink, TopBtn, RtBtn, BottomBtn, LtBtn, ExtraPgContainer, ExtraPgPic } from '../styled/sharedStyles';
import { Slide } from 'react-reveal';

const Thanks = () => (
  <ExtraPgContainer>
    <Slide top>
      <ExtraPgPic 
        src={BFStudiosLogo} 
        alt='logo'
        effect="blur"
      />
    </Slide>
    <Slide bottom>
      <h1>Thank You For Your Submission</h1>
    </Slide>
    <Slide top>
      <h3>I Will Get In Touch With You Soon!</h3>
    </Slide>
    <Slide bottom>
      <HLink to="/">
        <TopBtn></TopBtn>
        <RtBtn></RtBtn>
        <BottomBtn></BottomBtn>
        <LtBtn></LtBtn>
        Take Me Home
      </HLink>
    </Slide>
  </ExtraPgContainer>
)

export default Thanks;