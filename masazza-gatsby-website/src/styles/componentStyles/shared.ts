import { css } from '@emotion/core'
import { flex } from '../variables'
import { colors } from '../variables'
// Guarantees background
import GuaranteesBackground from '../../../assets/images/about-us/guaranties-background.png'

// Guarantees
export const guaranteesStyles = {
  guarantees: css`
    background: ${colors.brandLight};
    color: #ffffff;
    padding: 2em 0 0;
  `,
  guarantee: css`
    ${flex.row};
    width: 40%;
    margin: 1em 0;
    @media (max-width: 1024px) {
      flex-flow: column;
      width: 45%;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
  `,
  guaranteeImg: css`
    width: 100%;
    max-width: 8em;
    margin: 0 1em;
    @media (max-width: 1024px) {
      max-width: 5em;
    }
  `,
  guaranteesWrapper: css`
    background: url(${GuaranteesBackground});
    ${flex.row};
    background-repeat: no-repeat;
    background-position: 100% 25em;
    flex-flow: wrap;
    width: 80%;
    max-width: 80em;
    margin: auto;
    justify-content: space-between;
    @media (max-width: 1024px) {
      margin: 1em auto 0;
      width: 90%;
      background-position: 100% 35em;
    }
    @media (max-width: 600px) {
      background: none;
    }
  `
}
// Guarantees page line
export const guaranteesPageLine = {
  line: `height:70em;`,
  h: `
  background:${colors.brandLight}; 
  color:${colors.secondaryLinks}; 
  font-weight:500;
  font-size:.9rem; 
  position:relative; 
  z-index:5; 
  margin:-2em;
  @media(max-width:1024px){
    margin:-2em -1em; 
  };
  @media(max-width:600px){    
    margin: -2em 0; font-size: 1rem;
  }
  `
}

// Advertisements

export const mainAddStyles = {
  addContainer: `
    ${flex.row}
    margin: auto;
      width: 80%;
      max-width: 60em;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top;
      border-radius: 20px;
      .comertial-description {
        justify-content: center;
        ${flex.col}
      }
      .comertial-label {
        letter-spacing: 2px;
        font-size: 1.8rem;
        color: #ffffff;
        line-height: 2rem;
      }
      @media (max-width: 1280px) {
        width: 80%;
      }
      @media (max-width: 1024px) {
        background-size: cover;
        width: 90%;
      }
      @media (max-width: 600px) {
        flex-flow: column;
        width: 100%;
        border-radius: 0;
        
      }`,
  description: `
      @media (max-width: 600px) {
        text-align: center;
        width: 100%;
        margin: 0;
      }`,
  label: `
      @media (max-width: 600px) {
        width: 100%;
        margin: 0;
      }
      `
}

import Add1BackgroundTabletImg from '../../../assets/images/adds/com-1-tablet-background.png'
import Add1BackgroundMobileImg from '../../../assets/images/adds/com-1-background-mobile.png'

export const appStoreStyles = {
  addCssBtn: `
    width: 25%;
    @media (max-width:600px){
      width: 40%;
    `,
  label: `
    margin: 1em .8em 0;
    @media (max-width: 1280px) {
      width: 60%;
      font-size: 2rem;
      line-height: 1;
    }
    @media (max-width:1024px){
      font-size: 2.5rem;
      margin: 1em 1em 3em;
    }
    @media (max-width:600px){
      margin: 1em auto 0;
      width: 80%;
    }`,
  description: `margin: 0 1em;`,
  addWrapper: `
    @media (max-width: 1280px) {
        background-position: 70%;
        background: url(${Add1BackgroundTabletImg});
        background-repeat: no-repeat;
        background-size: 100%;
      }
      @media (max-width: 600px) {
        background: url(${Add1BackgroundMobileImg});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 25em;
        margin:0;
      }
    `,
  btnWrapper: `
    max-height: 8em;
    @media (max-width:1024px){
      margin: -6em 1em -1em;
    }
    @media(max-width:600px){
      margin: -1.5em 0 0;
    }"`
}

import Add2BackgroundTabletImg from '../../../assets/images/adds/com-2-background-tablet.png'
import Add2BackgroundMobileImg from '../../../assets/images/adds/com-2-background-mobile.png'

export const extendBuisnessAddStyles = {
  addWrapper: `
    justify-content: flex-end;
    margin: 5em auto;
    @media (max-width: 1024px){
      background: url(${Add2BackgroundTabletImg});
      background-repeat: no-repeat;
      background-size: 100% 120%;
    }
    @media (max-width: 600px){
      background: url(${Add2BackgroundMobileImg});
      background-size: 100% 100%;
      height: 25em;
      margin: 2em 0 0;
    }`,
  addDescr: `
    width: 30%;
    margin: 1em;
    @media (max-width:1024px){
      margin: 1em 4em;
    }
    @media (max-width:600px){
      margin: 1em 0;
    }`,
  label: `
    margin: 0;
    text-align: center;`,
  mainBtn: `
    align-self: center;
    width: 14em;
    margin: 1em 0 0;
    font-size: 1rem;
    @media (max-width:1024px){
      width: 11em;
      padding: 0.5rem;
    }
    @media (max-width:600px){
      margin: 1em auto   ;
    }
    `
}

// Page Line
export const pageLineStyles = {
  pageLine: `
    border-left: 2px solid ${colors.secondaryLinks};
    position: absolute;
    left: 10%;
    @media (min-width: 2300px) {
      left: 20%;
    }
    @media (min-width: 2100px) and (max-width: 2300px) {
      left: 16%;
    }
    @media (min-width: 1900px) and(max-width:2100px) {
      left: 12%;
    }
    @media (min-width: 1750px) and(max-width:1900px) {
      left: 10%;
    }
    @media (max-width: 1750px) {
      left: 7%;
    }
    @media (max-width: 1280px) {
      left: 5%;
    }
    @media (max-width: 1024px) {
      left: 3%;
    }
    @media (max-width: 700px) {
      border: none;
    }`,
  pageLineH: `
    color: ${colors.brandSecondary};
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0 -2em;
    font-weight: 100;
    font-size: 1rem;
    padding: 1em 0;
    position: absolute;
    width: max-content;
    @media (max-width: 1024px) {
      margin: -3em -1em;
    }`
}

// Pricing and Offers
export const pricingStyles = {
  Offer: {
    offerCard: `
        border-radius: 30px;
        color: #ffffff;
        width: 18em;
        text-align: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 5;
        @media (max-width: 1024px) {
          font-size: 1.1rem;
          margin: 0 0.5em;
        }
        @media (max-width: 600px) {
            margin: 1em auto;
            max-width: 20em;
            width: 80%;
          }`,
    minutes: css`
      ${flex.col}
      border: 4px dashed ${colors.secondaryLinks};
      border-radius: 50%;
      background: ${colors.brandSecondary};
      height: 6em;
      width: 6em;
      margin: 2em auto 0;
    `,
    offerH: css`
      margin: 0.5em auto 0;
      font-size: 3rem;
      line-height: 38px;
    `,
    offerP: css`
      width: 70%;
      margin: 2em auto;
    `,
    addMainBtn: css`
    background:${colors.brandSecondary};
    height:auto;
    margin-bottom: 1em; 
    @media (max-width:1024px){
        width: 80%;
        font-size: 1.1rem;
    }`
  },
  Pricing: {
    wrapper: `
        width: 85%;
        max-width: 90em;
        margin: auto;
        @media (max-width: 1024px) {
          width: 95%;
          margin: auto;
        }
        @media (max-width: 600px) {
          width: 95%;
          margin: 3em auto 0;
        }`,
    description: `
        margin: 5em;
        width: 50%;
        @media(max-width:1024px) {
          margin: 5em 3em 2em;
          width: 70%;
        }`,
    offers: `
        @media (max-width: 600px) {
            flex-flow: column;
          }
          ${flex.row}`
  }
}

//Top Picture
export const topPictureHeaderStyles = {
  headerWithImg: `
    ${flex.row};
    width: 90%;
    max-width: 100em;
    min-height: 25em;
    margin: 2em auto;

    @media (max-width: 1024px) {
      width: 100%;
      margin: 0;
      min-height: 15em;
      background-size: cover;
      background-repeat: no-repeat;
    }
    @media (max-width: 600px) {
      margin: 0;
    }`,
  headerContainer: `
    width: 100%;
    justify-content: center;
    color: #ffffff;
    justify-content: center;
    height: inherit;
    ${flex.col};
    `,
  h: `
    @media (max-width: 600px) {
        width: 80%;
        margin: auto;
        font-size: 1.5rem;
        line-height: 2rem;
        letter-spacing: 1px;
      }
    `
}

export const topPictureHeaderAboutUsStyles = {
  addH: `
    width: 15em;
    margin: 0 4em 0; 
    letter-spacing: 2px;`
}

export const topPictureHeaderTrustAndSafety = {
  txtContainer: `
    margin: 5em auto; 
    width: 80%;  
    @media(max-width:600px){
        width:95%; 
        margin:2em auto 1em;
    }`,
  addH: `
    font-size: 2.5rem; 
    line-height: 3rem; 
    width: 10em; 
    @media(max-width:600px){
        margin: 0 0 .5em;
    }`,
  addParagraph: `
    width: 50em; 
    max-width:100%;
    `
}

export const topPictureHeaderPricing = {
  addHContainer: `background: rgba(234, 209, 141, .5);`,
  addTxtContainer: `
    margin: 0 4em;
    width:50%; 
    @media(max-width:600px){
        width: 95%; margin: 
        3em auto;
    }`,
  addH: `
    font-size: 3rem; 
    @media (max-width:600px){ 
        line-height: 1; width: 
        100%; margin: .4em 0;
         font-size: 2rem;
    }`,
  addParagraph: `
    font-size: 1.2rem; 
    line-height: 1.8rem;
    `
}
