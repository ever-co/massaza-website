import {css} from '@emotion/core'
import {colors, flex} from '../variables'

import TopBackgroundImg from '../../../assets/images/global/footer-top-background.png'
import TopBackgroundImgMobile from '../../../assets/images/global/footer-top-mobile-background.png'


// Footer Top
export const footerTopStyles = {
  footerTopContainer: css`
  background: url(${TopBackgroundImg});
    display: flex;
    flex-flow: column;
      min-height: 25rem;
      background-size: cover;
      background-repeat: no-repeat;
      @media (max-width: 600px) {
        background: url(${TopBackgroundImgMobile});
        background-repeat: no-repeat;
        background-size: 100% 101%;
      }
      @media (max-width: 1024px) {
        background-position: 65%;
      }
     `,
  footerTopTxtContainer: css`
      width: 45%;
      margin: auto;
      @media (max-width: 1024px) {
        margin: 3em 5em;
      }
      @media (max-width: 600px) {
        width: 95%;
        margin: 3em auto 0;
      }`,
  footerTopH:css`
      color: #ffffff;
      margin: 2em 0 0;
      max-width: 11em;
      &::before {
        content: url('../../../assets/icons/global/footer-leaves.png');
        width: 1em;
        margin: -1em;
        transform: translate(-1em, 1em);
        display: block;
      }
      @media (max-width: 600px) {
        font-size: 1.7rem;
        margin: 0;
        text-align: center;
      }`
}
export const footerTopAppStoreBtnStyles = {
  wrapper: `
  @media (max-width:1024px){
    flex-flow: column;
    margin: 0 0 7em;
  }
  @media (max-width:600px){
    margin: -2em auto 7em;
  }`,
  btn: `
  height: inherit;
  width: 20%;
  margin: 0 1em 0 0;
  @media (max-width:1024px){
    width: 45%;
    height: 6em;
  }
  @media (max-width:600px){
    margin: auto;
    width: 50%;
    height: 5em;
  }`
}

// Footer Middle.
export const footerMiddleStyles = {
  footerMiddleContainer: css`
    background-color: #60454a;
    position: relative;
    display: flex;`,
  footerMiddleContnentContainer: css`
    align-items: center;
    width: 55%;
    margin: 1em auto;
    display: inherit;
    @media (max-width: 1024px) {
      width: 80%;
      margin: 2em;
    }
    @media (max-width: 600px) {
      width: 100%;
      margin: 1em 0;
    }`,
  car: css`   
    transform: translate(-15em, -3em);
    @media(max-width:1280px){
      transform: translate(-1em,-3em);
    }
    @media (max-width: 600px) {
      display: none;
    }`,
    link:css`
    margin: 0 0.5em;
    width: 2em;`,
    mainBtn: `
    margin: 0 0 0 5em;
    background: ${colors.brandSecondary};
    @media (max-width:1024px){
       margin: auto;
      }; 
    @media (max-width:600px){
      width: 12em;
    }`
}


// FooterBottom
export const footerBottomStyles = {
  footerMenusContainer: css`
    margin: 0.5em;
    @media (max-width: 800px) {
      font-size: 1rem;
      margin: 0 auto;
    }
    @media (max-width: 600px) {
      display: none;
    }`,
  footerMenusH: css`
    font-size: 1.2rem;
    color: #f9b19f;
     @media (max-width: 800px) {
        font-size: 1.2rem;
     }`,
  footerMenusUl: css`
     padding: 0;
     list-style-type: none;`,
  footerBottomContainer: css`
   justify-content: space-around;
   color: #f9b19f;
   display: flex;
   width: 90%;
   margin: auto;
   max-width: 90em;
   @media (max-width: 800px) {
     flex-flow: wrap;
     width: 100%;
     justify-content: right;
   }`
}

import bulgarianFlag from '../../../assets/icons/global/bulgaria-flag.png'
import usaFlag from '../../../assets/icons/global/united-states-flag.png'
import israelFlag from '../../../assets/icons/global/israel-flag.png'
import russiaFlag from '../../../assets/icons/global/russia-flag.png'


export const languageSwitchStyles ={
  radioStyles: css`opacity:0`,
  labelStyles: css`font-size:1rem`,
  containerStyles: css`
  ${flex.col}
  margin:2em 0 0;
  label::before {
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: contain;
    content: '';
  }
  #bg::before {
    background: url(${bulgarianFlag});
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: contain;
    content: '';
  }
  #en::before {
    background: url(${usaFlag});
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: contain;
    content: '';
  }
  #heb::before {
    background: url(${israelFlag});
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: contain;
    content: '';
  }
  #ru::before {
    background: url(${russiaFlag});
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: contain;
    content: '';
  }
  label {
    margin: 0.3em 0;
    color: #f9b19f;
    cursor: pointer;
    display: flex;
    transition: all 0.5s ease-out;
    align-items:center;
  }
  `
}