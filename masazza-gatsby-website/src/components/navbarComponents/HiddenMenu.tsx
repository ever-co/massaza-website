import * as React from 'react'
import { css } from '@emotion/core'
import NavLinksList from './NavLinks'
import { MainStyledButton } from '../buttons/MainButtons'
import { flex } from '../../styles/variables'
import {hiddenMenuStyles, hiddenMenuButtonStyles} from '../../styles/componentStyles/header'

const StyledHiddenMenu = css`
${hiddenMenuStyles.styledHiddenMenu}
`

const HiddenMenu = (props: any) => {
  let oppened = props.oppened

  return (
    <div
      id="hidden-menu"
      css={css`
        ${StyledHiddenMenu} 
        ${!oppened
          ? css`
             ${hiddenMenuStyles.oppened}
            `
          : css`
             ${hiddenMenuStyles.closed}
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
          addCss={hiddenMenuButtonStyles.btnF}
        />
        <MainStyledButton
          btnTxt="Become therapist "
          addCss={hiddenMenuButtonStyles.btnS}
        />
      </div>
    </div>
  )
}

export default HiddenMenu
