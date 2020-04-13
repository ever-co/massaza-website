import { css } from '@emotion/core'
import { heights, colors } from '../variables'
import { transparentize } from 'polished'

// Main header styles
export const headerStyles = {
  styledHeader: ` 
    height: ${heights.header}px;
    background-color: ${colors.white};
    color: ${transparentize(0.5, colors.white)};
    box-shadow: -2px 7px 7px -4px rgba(0, 0, 0, 0.57);
    position: fixed;
    z-index: 5000;
    width: 100%;
    top: 0px;
    transition: all 0.3s ease-out;`,
  headerInner: `
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    max-width:90em;
    display: flex;
    justify-content: space-between;`,
  navBtnsContainer: `
    border-left: 1px solid #e8dbdb;
    display: flex;
    height: 100%;
    padding-left: 1rem;
    justify-content: flex-end;
    width: fit-content;
    border: none;
    @media screen and (max-width: 600px) {
      display: none;
    }`,
  headerContainer: css`
    display: flex;
    height: 100%;
    align-items: center;
    width: 16em;
    @media (max-width: 600px) {
      flex-flow: row-reverse;
      width: 100%;
      justify-content: space-between;
    }
  `,
  logoLink: css`
    width: 10em;
    border-right: 1px solid #e8dbdb;
    margin-left: 1em;
    @media(max-width:1110px) {
      width: 11em;
      padding: 0;
    }
  `,
  img: css`max-width: 88%;`
}

// Navlink styles
export const navLinkStyles = {
  styledNavlinks: `
    color: ${colors.brand};
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 1rem;
    color: ${colors.brand};
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 1rem;
    font-size: 0.9rem;
    display: flex;
    flex-flow: row;
    align-items: center;
    &:hover,
    &:focus {
      text-decoration: none;
    }
    &::after {
      content: '•';
      font-size: 2rem;
      color: #f9b19f;
      margin-left: 5px;
      margin-top: -5px;
      position: relative;
    }
    @media(max-width:1350px){
      font-size: .8rem;
    }`,
  navlinksUl: `
    display: flex;
    width: 100%;
    margin: 1em 0;
    padding: 0;`
}

//MiniMenu Icon styles
export const miniMenuStyles = {
  mainIconCss: `  
    display: none;
    margin: 0 1em 0;
    width: 1.5rem;
    @media screen and (max-width: 1250px) {
      display: block;
    }`,
  oppened: ` 
    * {
        transition: all 0.5s ease-in;
        transform-origin: center;
      }
      #oval {
        transform: translate(60px, 0);
      }
      #second-line {
        transform: translate(-30px, 0);
      }
      #first-line {
        transition-delay: 0.4s;
        transform: translate(-10px, 0px) rotate(90deg);
      }
      #third-line {
        transition-delay: 0.4s;

        transform: translate(0, 10px);
      }
      #ex {
        transition-delay: 0.4s;

        transform: rotate(45deg);
      }
      #nav-btns {
        opacity: 0;
      }
      #hidden-menu {
        transform: translate(-300px, 0);
      }`,
  closed: `
      * {
        transform-origin: center;
        transition: all 1s ease-out;
      }

      #mini-menu {
        @media screen and(min-width:1280px) {
          display: none;
        }
        &:hover {
          cursor: pointer;
        }
      }`
}

// Hidden menu styles
export const hiddenMenuStyles = {
  styledHiddenMenu: `
  text-align: center;
    position: absolute;
    top: 100%;
    height: 100vh;
    background: #fff;
    transition: all 1s;
    z-index: 100;
    width:16em;
    }
    @media (max-width:600px){
      width:150%;
  
    }`,
  oppened: `
    transform: translate(-600px, 0);
    @media (max-width: 600px) {
      transform: translate(25%, 0);
    }`,
  closed: `
    transform: translate(0, 0);
    @media (max-width: 600px) {
      transform: translate(-69%, 0);
    }`
}

// Hidden menu page buttons
export const hiddenMenuButtonStyles = {
  btnF: `
  height: auto;
  max-width:15em;
  width: 90%;
  margin: 0 auto;
  background:${colors.brand};
  display:none;
  @media (max-width:600px){
    display:block;
  }`,
  btnS: `
  height: auto;
  max-width:15em;
  width: 90%;
  margin: 1em auto;
  display:none;
  background:${colors.brandSecondary};
  @media (max-width:600px){
    display:block;
  }`
}
