import styled from 'styled-components';

export const ContactSectionStyles = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  height: 20vh;
  padding: 0;

  .center {
    display: flex;
    justify-content: center;
    align-items: center; 
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
    font-size: clamp(20px, 4vw, 40px);
  }
  p {
    margin: 20px 0 0;
    max-width: 480px;
  }
`