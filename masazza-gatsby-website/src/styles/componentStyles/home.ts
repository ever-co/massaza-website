import { css } from '@emotion/core'
import { flex, colors } from '../variables'

// Top page images
import TopBackgroundImg from '../../../assets/images/home/backgrounds/top-background.png'
import TopBackgroundMobileImg from '../../../assets/images/home/backgrounds/top-background-mobile.png'
// Home pricing background
import PricingHomeBackgroundImg from '../../../assets/images/home/prices-main-background.png'
// MassageTypes images
import MassageTypesWrapperBackground from '../../../assets/images/home/backgrounds/small-background.png'
import MassageTypesWrapperTabletBackground from '../../../assets/images/home/backgrounds/small-background-tablet.png'
import MassageCardBackgroundImage from '../../../assets/images/home/massage-card-background.svg'

// Top page
export const topPageStyles = {
  topContainer: css`
    background: url(${TopBackgroundImg});
    ${flex.row};
    background-size: 100%;
    background-position: 74%;
    background-repeat: no-repeat;
    margin: 0 auto 4em;
    width: 90%;
    max-width: 100em;
    @media screen and (min-width: 1100px) {
      min-height: 40em;
    }
    @media (max-width: 1280px) {
      width: 100%;
      background-size: 150% 100%;
      margin: 0 auto 3em;
    }
    @media (max-width: 1025px) {
      background-size: cover;
    }
    @media (max-width: 850px) {
      background-size: 100% 100%;
      background-position: top;
    }
    @media (max-width: 600px) {
      background: url(${TopBackgroundMobileImg});
      min-height: 100vh;
      background-repeat: no-repeat;
      background-size: 109% 100%;
      background-position: bottom;
      margin: 0 0 2em;
      flex-flow: column;
      justify-content: space-between;
    }
  `,

  header: css`
    margin: auto 10em;
    width: 45%;
    color: #fff;
    @media (max-width: 1280px) {
      margin: 4em 7em;
      width: 30em;
    }
    @media (max-width: 1025px) {
      background-size: cover;
    }
    @media (max-width: 850px) {
      margin: 4em;
    }
    @media (max-width: 600px) {
      margin: 5em auto;
      width: 90%;
    }
  `,
  h1: css`
    font-size: 2rem;
    color: #fff;
    @media (max-width: 600px) {
      font-size: 1.8rem;
    }
    @media (max-width: 360px) {
      font-size: 1.5rem;
    }
  `,
  paragraph: css`
    font-size: 1.3rem;
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  `
}
// Top page app store btns
export const topPageAppStoreBtnsStyles = {
  btnWrapper: `
  @media (max-width:600px) {
  flex-flow:column;
   width: 90%;
   
   margin: 6em 0;
  }`,
  btnF: `
  display:none;
  @media(max-width:600px){
    display:block;
    height: 4em;    
    width: 35%;
  }`,
  btnS: `
  @media(max-width:600px){
    display:none;
  }`
}

// How it works
export const howItWorksStyles = {
  howItWorks: css`
    ${flex.col} width: 85%;
    max-width: 90em;
    margin: auto;
    `,
  h5: css`
    align-self: flex-end;
    text-transform: uppercase;
    color: ${colors.brand};
    margin: 5em 0;
    font-size: 1em;`
}

// Pricing
export const pricingHomeStyles = {
  addWrapperCss:`
  background: url(${PricingHomeBackgroundImg});
  background-repeat: no-repeat;
  background-position: 120% 110%;
  background-size: 60%;`,
addOfferCss:`
margin: 0 1em 2em;
  @media (max-width:600px){
    margin: 0 auto 2em;
    width: 100%;
  }`,
  addDescrCss:`
  margin: 6em 0 3em 4em;
  width: 70%;
  @media (max-width:600px){
    margin: 0 auto 2em;
    width: 90%;
  }
  `
}


// How it works page line
export const howItWorksPageLineStyles = {
  line: `height:65em;`,
  h: `
  color: #E87B68; 
  font-size: 1em; background:${colors.mainBackground}; 
  margin: -3em -2em; 
  @media (max-width:600px){
    display:none
  }`
}

// Most popular
export const massageCardStyles = {
  massageCard: css`
    background: url('${MassageCardBackgroundImage}');
    ${flex.col};
    background-repeat: no-repeat;
    background-position: center;
    width: 25%;
    min-height: 28em;
    margin: 2em;
    align-items: center;
    @media (max-width:1024px){
        width: 40%;
        min-height: 28em;
        margin: 1em 1.8em 1em;
    }
    @media (max-width:600px){
        width: 80%;
    }`,
  img: css`
    width: 11em;
    margin: 2em auto 2em;
  `,
  h3: css`
    margin: 1em;
    color: #e87b68;
  `,
  paragraph: css`
    width: 75%;
    text-align: center;
    max-height: 4em;
    line-height: 20px;
  `,
  btn:`background:${colors.brandSecondary};height: auto;`
}

export const mostPopularStyles = {
  wrapper: css`
    background: url(${MassageTypesWrapperBackground});
    width: 80%;
    max-width: 80em;
    margin: 2em auto 0;
    background-position: center;
    background-repeat: repeat-y;
    background-size: 100%;
      @media (max-width: 600px) {
        margin: 5em 0 0;
        background: none;
      }
      @media (max-width: 1024px) {
        background: url(${MassageTypesWrapperTabletBackground}) center center no-repeat;
        background-repeat: repeat-y;
        width: 95%;,
      }`,
  h2: css`
    margin: 0 0 0 2em;
    font-size: 3rem;
    color: ${colors.primaryTitleColor};
    @media (max-width: 600px) {
      text-align: center;
      margin: 0;
    }`,
  massageCardsContainer: css`
    ${flex.row};
    flex-flow: wrap;
    justify-content: center;
    `,
    pageLine:{
      h:`
      background:${colors.mainBackground};
      margin-top:-3em; 
      @media(max-width:600px){
        margin:-2.45em 0;
      }`,
      line: `height:65em;`
    }
}

export const pageLine = {
  topLine: `
  height:65em;
  top:1%; 
  @media (min-width:1280px){
    top: 10%;
  };`,
  topLineH: `
  color:#fff;
   margin: -1.1em -.2em;
   @media(max-width:1024px){
     margin:-1em 0
    };  
    @media(max-width:600px){
      margin:0;
    }`
}
