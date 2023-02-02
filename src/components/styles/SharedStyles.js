import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const TopBtn = styled.span`
  position: absolute;
  display: block;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, white);
`

export const BottomBtn = styled.span`
  position: absolute;
  display: block;
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, white);
`

export const RtBtn = styled.span`
  position: absolute;
  display: block;
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, white);
`

export const LtBtn = styled.span`
  position: absolute;
  display: block;
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, white);
`

export const MainBtn = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #DEFCFD;
  background: black;
  letter-spacing: 4px;
  text-decoration: none;
  font-size: 18px;
  overflow: hidden;
  transition: 0.2s;
  border: 1px solid white;
  `

  export const HomeSubTitle = styled.h2`
  text-decoration: none;
  max-width: 1000px;
  margin: 0 auto 50px auto;
`

export const ExtraPgContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  padding-top: 200px;
`

export const ExtraPgPic = styled(LazyLoadImage)`
  border-radius: 500rem;
`

export const HLink = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-decoration: none;
  overflow: hidden;
  transition: 0.2s;
  border: 1px solid ${ props => props.primary ? "white" : "#00DCF9" };
  margin: 0px 0px 5px 20px;
  &:hover {
    color: white;
    background: ${ props => props.primary ? "#00DCF9" : "#00dcf941" };
    box-shadow: 0 0 10px #00DCF9, 0 0 40px #00DCF9, 0 0 80px #00DCF9;
    transition-delay: 1s;
    border: 1px solid white;
  }
  &:hover ${TopBtn} {
    left: 100%;
    transition: 1s;
  }
  &:hover ${BottomBtn} {
    right: 100%;
    transition: 1s;
    transition-delay: 0.5s;
  }
  &:hover ${RtBtn} {
    top: 100%;
    transition: 1s;
    transition-delay: 0.25s;
  }
  &:hover ${LtBtn} {
    bottom: 100%;
    transition: 1s;
    transition-delay: 0.75s;
  }
`