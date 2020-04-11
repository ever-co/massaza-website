import {colors} from '../variables'

// Footer Top
export const footerTopStyles = {
  footerTopContainer: `
    display: flex;
    flex-flow: column;
      min-height: 25rem;
      background-size: cover;
      background-repeat: no-repeat;
      @media (max-width: 1024px) {
        background-position: 65%;
      }
     `,
  footerTopContainerMobileQuery: `
        background-repeat: no-repeat;
        background-size: 100% 101%;
      `,
  footerTopTxtContainer: `
      width: 45%;
      margin: auto;
      @media (max-width: 1024px) {
        margin: 3em 5em;
      }
      @media (max-width: 600px) {
        width: 95%;
        margin: 3em auto 0;
      }`,
  footerTopH: `
      color: #ffffff;
      margin: 2em 0 0;
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
  footerMiddleContainer: `
    background-color: #60454a;
    position: relative;
    display: flex;`,
  footerMiddleContnentContainer: `
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
  car: `   
    transform: translate(-15em, -3em);
    @media(max-width:1280px){
      transform: translate(-1em,-3em);
    }
    @media (max-width: 600px) {
      display: none;
    }`,
    link:`
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
  footerMenusContainer: `
    margin: 0.5em;
    @media (max-width: 800px) {
      font-size: 1rem;
      margin: 0 auto;
    }
    @media (max-width: 600px) {
      display: none;
    }`,
  footerMenusH: `
    font-size: 1.2rem;
    color: #f9b19f;
     @media (max-width: 800px) {
        font-size: 1.2rem;
     }`,
  footerMenusUl: `
     padding: 0;
     list-style-type: none;`,
  footerBottomContainer: `
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
