import * as React from 'react'
import { css } from '@emotion/core'
import NavLinksList from './NavLinks'
import { MainStyledButton } from '../buttons/MainButtons'
import { colors, flex } from '../../styles/variables'

const StyledHiddenMenu = css`
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

  }
`

const HiddenMenu = (props: any) => {
  let oppened = props.oppened

  return (
    <div
      id="hidden-menu"
      css={css`
        ${StyledHiddenMenu} ${!oppened
          ? css`
              transform: translate(-600px, 0);
              @media (max-width: 600px) {
                transform: translate(25%, 0);
              }
            `
          : css`
              transform: translate(0, 0);
              @media (max-width: 600px) {
                transform: translate(-69%, 0);
              }
            `}
      `}
    >
      <NavLinksList navLinks={props.navLinks} flexFlow="column" mediaQueryParam="block" />
      <div
        css={css`
          ${flex.col}
        `}
      >
        <MainStyledButton
          btnTxt="Create account"
          addCss="
            height: auto;
            max-width:15em;
            width: 90%;
            margin: 0 auto;"
          background="#96525c"
        />
        <MainStyledButton
          btnTxt="Become therapist "
          addCss="
        height: auto;
        max-width:15em;
        width: 90%;
        margin: 1em auto;"
          background={colors.brandSecondary}
        />
      </div>
    </div>
  )
}

export default HiddenMenu
