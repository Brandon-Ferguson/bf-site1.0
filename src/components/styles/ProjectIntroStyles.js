import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const ProjectImg = styled(LazyLoadImage)`
  width: 100%;
  vertical-align: top;
  border-style: none;
  padding-top: 0px;
`

export const AboutStyles = styled.section`
  width: 100%;
  min-height: 100%;
  line-height: 1.3;
  display: flex;
  justify-content: top;
  align-items: top; 
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 85vh;
  height: 85vh;
  padding: 0;
  
  .leftalign {
    display: flex;
    justify-content: center;
    align-items: flex-start; 
    flex-direction: column;
    flex-wrap: wrap;
  }
  .medium-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(1rem, -1.5rem + 8vw, 3rem);
    white-space: nowrap;
  }
  p {
    max-width: 480px;
  }
`

export const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
  max-width: 1000px;
  margin: 0 auto;
`

export const AboutSec = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
`

export const AboutLeft = styled.div`
  flex: 60%;
  @media (max-width: 768px) {
    flex: 100%;
  }
`

export const AboutRight = styled.div`
  flex: 40%;
  @media (max-width: 768px) {
    flex: 100%;
  }
`

export const AboutPara = styled.p`
  padding: 0 20px;
`

export const WorkExpSection = styled.div`
  color: white;
  background-color: transparent;
`

export const WorkExpSingle = styled.div`
  padding: 0.01em 16px;
`

export const WorkTitle = styled.h5`
  font-weight: 900;
  margin: 10px 0;
  font-size: 18px;
`

export const DateSec = styled.h4`
  color: #00DCF9;
  font-weight: 900;
  margin: 10px 0;
`

export const DateIcon = styled.i`
  color: #00DCF9;
  margin-right: 16px;
`

export const CurrentDate = styled.span`
  color: #fff;
  background-color: #00DCF9;
  border-radius: 4px;
  display: inline-block;
  padding-left: 8px;
  padding-right: 8px;
  text-align: center;
`