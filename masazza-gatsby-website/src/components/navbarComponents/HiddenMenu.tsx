import * as React from 'react'
import { css } from '@emotion/core'
import NavLinksList from './NavLinks'
import { MainStyledButton } from '../buttons/MainButtons'
import { flex } from '../../styles/variables'
import {hiddenMenuStyles, hiddenMenuButtonStyles} from '../../styles/componentStyles/header'

import { useTranslation } from 'react-i18next'

interface IHiddenMenuProps{
  oppened:boolean
}

const StyledHiddenMenu = css`
${hiddenMenuStyles.styledHiddenMenu}
`

const HiddenMenu:React.SFC<IHiddenMenuProps> = ({oppened}) => {
  const { t } = useTranslation()
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
      <NavLinksList  flexFlow="column" mediaQueryParam="block" />
      <div
        css={css`
          ${flex.col}
        `}
      >
        <MainStyledButton
          btnTxt={t("navbar.createAccount")}
          addCss={hiddenMenuButtonStyles.btnF}
        />
        <MainStyledButton
          btnTxt={t("navbar.becomeTherapist")}
          addCss={hiddenMenuButtonStyles.btnS}
        />
      </div>
    </div>
  )
}

export default HiddenMenu
