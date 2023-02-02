import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const LogoImg = styled(LazyLoadImage)`
  width: 45%;
  vertical-align: middle;
  border-style: none;
  padding-top: 0px;
`

export const LogoContainer = styled.div`
  padding-left: 1px;
  padding-right: 1px;
`

export const LinkStyle = styled.a`
  a:link { 
    text-decoration: none; 
    color: black;
  }
  a:visited { text-decoration: none; }
  a:hover { text-decoration: none; }
  a:active { text-decoration: none; }
`