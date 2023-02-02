import styled from 'styled-components';

export const IntroSectionStyles = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  .leftalign {
    display: flex;
    justify-content: center;
    align-items: flex-start; 
    flex-direction: column;
    flex-wrap: wrap;
  }
  h1 {
    margin: 0 0 30px 4px;
  }
  h2 {
    margin-top: 5px;
    line-height: 0.9;
  }
  h6 {
    margin: 0 0 30px 4px;
    font-weight: 400;
  }
  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }
  p {
    margin: 20px 0 0;
    max-width: 480px;
  }
`