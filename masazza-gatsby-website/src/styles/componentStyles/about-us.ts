import {css} from '@emotion/core'
import { flex, colors } from '../variables'


import StoryPicsBackground from '../../../assets/images/about-us/story-pics-background.webp'



export const aboutUsStyles = {
  storyWrapper: css`
    ${flex.row};
      width: 80%;

      max-width: 90em;
      margin: 3em auto 0;
      justify-content: space-evenly;
      @media (max-width: 1024px) {
        ${flex.col}
        margin: 2em auto 0;
      }
      @media (max-width: 600px) {
        width: 90%;
        margin: 5em auto 0;
      }`,
  storyDescr: css`
    ${flex.col}
    width: 50%;
    color: ${colors.brand};
    margin: auto;
    @media (max-width: 1024px) {
      font-size: 0.8rem;
      width: 100%;
      margin: 2em auto 0;
    }
    @media (max-width: 600px) {
      font-size: 1rem;
    }`,
  paragraph: css`
    margin: 0.5em 0;
    line-height: 30px;
    @media (max-width: 1024px) {
      font-size: 1rem;
      line-height: 25px;
    }
    @media (max-width: 600px) {
      font-size: 1rem;
      line-height: normal;
      margin: 1em 0;
    }`,
  storyPics: css`
  background: url(${StoryPicsBackground});
    ${flex.col};
    width: 40%;
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 100% 0;
    align-items: flex-end;
    @media (max-width: 1024px) {
      flex-flow: row-reverse;
      width: 100%;
    }
    @media (max-width: 600px) {
      flex-flow: column;
      background: none;
    }`,
  storyPicsImg:css`
    margin: 2em 0 0 -3em;
    @media (max-width: 1024px) {
      width: 70%;
      max-width: 25em;
    }
    @media (max-width: 600px) {
      margin: 0;
      width: 100%;
    }`,

  appStoreBtnsAdj: {
    btnWrapper: `
    align-items: center;
     @media (max-width:1024px){
         flex-flow: column;
         width: 60%;
         margin: auto -5em;
      }
     @media (max-width:600px){
          width: 100%;
          margin: auto;
      }`,
    btn:`
    @media(max-width:1024px){
        width:100%;
        margin: -4em 0;
        width: 50%;
        margin: -3em 3em;
      }`
  },
 
}

export const lineAdjStyles ={
  line:`height: 90em;
  z-index: 1;
  @media (max-width:1024px){
    height: 128em;
  }`,
  h:`
  margin: -1em;
  background: ${colors.mainBackground};
  font-weight: bold;
  font-size: .8rem;
  @media(max-width:1024px){
  font-size: 1.1rem;
  top:1%;
  margin:-3em 0;
  }`,

}

export const appStoreAddStyles ={
  wrapper: `
    margin-top:3em;
    @media(max-width:1024px){
      margin: 2em auto;
    }`
}