import * as React from 'react'
import { css } from '@emotion/core'
import NavLinksList from './NavLinks'
import { MainStyledButton } from '../buttons/MainButtons'
import { flex } from '../../styles/variables'
import { hiddenMenuStyles, hiddenMenuButtonStyles } from '../../styles/componentStyles/header'

import { useTranslation } from 'react-i18next'

interface IHiddenMenuProps {
  oppened: boolean
  toggleClass: Function
}

const StyledHiddenMenu = css`
  ${hiddenMenuStyles.styledHiddenMenu}
`

const HiddenMenu: React.FC<IHiddenMenuProps> = ({ oppened, toggleClass }) => {
  const { t } = useTranslation()
  const hiddenMenu = React.useRef(null)
  
  if (typeof document !== 'undefined') {
  document.addEventListener('click', e=>{
    e.preventDefault();
    hide(e)
  })
}

const hide = (e)=>{
  if (e.target !== hiddenMenu.current && oppened === true) {
    return toggleClass((oppened = !oppened))
  }
}
  return (
    <div
      id="hidden-menu"
      ref={ hiddenMenu }
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
      <NavLinksList flexFlow="column" mediaQueryParam="block" />
      <div
        css={css`
          ${flex.col}
        `}
      >
        <MainStyledButton addCss={hiddenMenuButtonStyles.btnF} >{t('navbar.createAccount')}</MainStyledButton>
        <MainStyledButton  addCss={hiddenMenuButtonStyles.btnS} >{t('navbar.becomeTherapist')}</MainStyledButton>
      </div>
    </div>
  )
}

export default HiddenMenu
