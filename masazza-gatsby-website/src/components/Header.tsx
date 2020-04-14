import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors } from '../styles/variables'
import { headerStyles } from '../styles/componentStyles/header'

import Container from './Container'
import { MainStyledButton } from './buttons/MainButtons'
import MiniMenuBtn from './navbarComponents/MiniMenuButton'
import NavLinksList from './navbarComponents/NavLinks'

import navLogo from '../../assets/icons/logos/masazza-logo.svg'

import { useTranslation } from 'react-i18next'

const StyledHeader = styled.header`
  ${headerStyles.styledHeader}
`

const HeaderInner = styled(Container)`
  ${headerStyles.headerInner}
`
const LogoLink = styled(Link)`
  ${headerStyles.logoLink}
`

const NavButtonsContainer = styled.div`
  ${headerStyles.navBtnsContainer}
`


const Header: React.SFC = () => {
  let currentScrollTop = 0
  let OnScrollEvent = () => {
    let navbar: HTMLElement | null = document.getElementById('nav')
    if (navbar) {
      if (currentScrollTop > window.scrollY) {
        navbar.style.top = '0'
      } else if (currentScrollTop < window.scrollY) {
        navbar.style.top = '-80px'
      }
      currentScrollTop = window.scrollY
    }
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', OnScrollEvent)
  }
  const { t } = useTranslation()

  return (
    <StyledHeader id="nav">
      <HeaderInner>
        <div css={headerStyles.headerContainer}>
          <MiniMenuBtn />
          <LogoLink to="/" css={headerStyles.logoLink}>
            <img src={navLogo} css={headerStyles.img} />
          </LogoLink>
        </div>
        <NavLinksList mediaQueryParam="none" />
        <NavButtonsContainer>
          <MainStyledButton btnTxt={t('navbar.createAccount')} addCss={`background:${colors.brand}`} />
          <MainStyledButton btnTxt={t('navbar.becomeTherapist')} addCss={`background:${colors.brandSecondary}`} />
        </NavButtonsContainer>
      </HeaderInner>
    </StyledHeader>
  )
}

export default Header
