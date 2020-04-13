import { css } from '@emotion/core'
import { flex,colors } from '../variables'

export const safetyArticleStyles = {
  article: css`
    color: ${colors.brandLight};
    margin: 1em auto;
    ${flex.row};
    align-items: center;
    @media (max-width: 600px) {
      flex-flow: column;
      align-items: flex-start;
    }
  `,
  num: css`
    border: 2px solid #f7d4cd;
    border-radius: 50%;
    height: fit-content;
    padding: 0 1em;
    text-align: center;
    margin: 0 2em;
    font-weight: bold;
    width: 1em;
    @media (max-width: 600px) {
      margin: 0 0 1em;
    }
  `,
  p: css`
    font-weight: 300;
  `
}

export const safetyWrapperStyles = {
  wrapper: `
    ${flex.row};
    width: 80%;
    max-width: 90em;
    margin: 3em auto;
    @media (max-width: 1024px) {
      flex-flow: column;
      margin: 2em auto 0;
    }
    @media (max-width: 600px) {
      width: 95%;
    }`,
  articleWrapper: css`
    width: 45%;
    @media (max-width: 1024px) {
      width: 90%;
      margin: auto;
    }
  `,
  imgWrapper: `
    ${flex.col};
    width: 50%;
    justify-content: flex-end;
    @media (max-width: 1024px) {
      width: 90%;
      margin: auto;
      background-repeat: no-repeat;
      background-position: center;
    }
    @media (max-width: 600px) {
      background-size: 100% 50%;
      background-position: top;
    }`
}

export const clientSafetyStyles = {
  imgWrapper: `
    align-items: flex-end;
    @media(max-width:1024px){
      align-items: center;
      margin: 0 0 2em
    };`,
  img: `
    width:80%; 
    @media(max-width:1024px){
        width:55%;
    }; 
    @media(max-width:600px){
        width:80%
    }`,
  lineCss: `
    height:75em;  
    @media (max-width:1024px){
        height: 120em;
    }`,
  lineHCss: `
    @media(max-width:600px){
        margin: -2em 0;
    }`
}

export const therapistSafetyStyles = {
  addWrapperCss: `
    flex-flow: row-reverse; 
    @media(max-width:1024px){
        flex-flow:column-reverse;
    }`,
  addImgCSs: `
    width:55%; 
    margin: 0 auto; 
    @media(max-width:1024px){
        width:30%; margin:2em;
    } 
    @media(max-width:600px){
        width:50%
    }`,
  addLineCss: `
    @media(max-width:1024px){
        height: 95em;
    } 
    @media(max-width:600px){
         bottom: 6%;
    }`,
  addLineHCss: `
    @media(max-width:600px){
        top:-6%;
    }`
}

// SafetyWrapper Page line styles
export const safetyWrapperPageLineStyles = {
  line: `height: 65em;`,
  h: `
  background: #fdfaf9;
  z-index: 5;
  height: fit-content;
  margin: -2em;
  font-weight: bold;
  font-size: .8rem;
  @media (max-width:1024px){
    margin: 0 0 0 -1em;
   }
   @media (max-width:600px){
     margin: 0;
   }`
}
