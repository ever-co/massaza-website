import {css} from '@emotion/core'
import { colors } from "../variables"

import PricingPagePricingBackgroundImg from '../../../assets/images/pricing/pricing-offeers-background.png'


export const pricingPageStyles = {
  wrapperCss: css`
  background: url(${PricingPagePricingBackgroundImg});
    background-repeat: no-repeat;
    background-position: top right;
    @media (max-width: 600px) {
      background: none;
    }`,
  offerCss: `margin: auto;`,
  lineCss: `
    height:95em; 
    @media (max-width:1024px){
        height:120em
    }`,
  lineHCss: `
    font-weight: bold;
    font-size: .8rem;
    width: 7em;
    @media(max-width:1024px){
        margin: 0;
        top: -3%;
    }`,
    pricingDescr:css`
    margin: 5em;
    width: 50%;
    @media (max-width: 1024px) {
      margin: 5em auto 0;
      width: 90%;
    }`,
    comissions:css`
    width: 85%;
    max-width: 90em;
    margin: 0 auto 3em;`,
    paragraph:css`    
    color: ${colors.brand};
    @media (max-width: 1024px) {
      margin: 4em auto 0;
    }`,
}

export const pricingPageLineStyles ={
  h:`
  background: ${colors.mainBackground};
  font-weight: bold;
  font-size: .8rem;
  width: 7em;
  @media(max-width:1024px){
    margin:-1em 0
  }`
}
