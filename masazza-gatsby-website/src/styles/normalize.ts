import { dimensions,  colors } from './variables'

import carioSemiBoldTTF from '../../assets/fonts/Cairo-SemiBold.ttf'
import carioSemiBoldWOFF from '../../assets/fonts/Cairo-SemiBold.woff'
import carioRegularTTF from '../../assets/fonts/Cairo-Regular.ttf'
import carioRegularWOFF from '../../assets/fonts/Cairo-Regular.woff'

export default `



@font-face {
  font-family: "Cairo-SemiBold";
  font-display: swap;
  src: url(${carioSemiBoldTTF}) format("truetype"),
    url(${carioSemiBoldWOFF}) format("woff");

}
@font-face {
  font-family: "Cairo-Regular";
  font-display: swap;
  src: url(${carioRegularTTF}) format("truetype"),
    url(${carioRegularWOFF}) format("woff");

}

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  h2, h1 {
    font-family: "Cairo-SemiBold", sans-serif;
  }
  html {
    font-size: ${dimensions.fontSize.regular}px !important;
    line-height: ${dimensions.lineHeight.regular} !important;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    
    color: ${colors.black};
    background-color:${colors.mainBackground};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  font-family: "Cairo-Regular", sans-serif;

  }

  a {
    color: ${colors.brand};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
  }
  button{
    font-family: "Cairo-SemiBold", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: .5rem;
    font-weight: 600;
    line-height: ${dimensions.lineHeight.heading};
    text-rendering: optimizeLegibility;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  strong {
    color: ${colors.black};
  }


`
