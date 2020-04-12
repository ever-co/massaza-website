import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import {  navBreakpoints, colors } from '../styles/variables'
import {headerStyles} from '../styles/componentStyles/header'

import Container from './Container'
import { MainStyledButton } from './buttons/MainButtons'
import MiniMenuBtn from './navbarComponents/MiniMenuButton'
import NavLinksList from './navbarComponents/NavLinks'

import navLogo from '../../assets/icons/logos/masazza-logo.svg'


const StyledHeader = styled.header`
  ${headerStyles.styledHeader}
`

const HeaderInner = styled(Container)`
${headerStyles.headerInner}
`
const LogoLink = styled(Link)`
  width: 10em;
  border-right: 1px solid #e8dbdb;
`

const NavButtonsContainer = styled.div`
  ${headerStyles.navBtnsContainer}
`

const mq = navBreakpoints.map(bp => `@media screen and (max-width: ${bp}px)`)

interface HeaderProps {
  navLinks: Array<String>
  createAccountBtn: string
  becomeTherapistBtn: string
  isOppened: boolean
}

const Header: React.FC<HeaderProps> = ({ navLinks, createAccountBtn, becomeTherapistBtn, isOppened }) => {
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

  window.addEventListener('scroll', OnScrollEvent)
  return (
    <StyledHeader id="nav">
      <HeaderInner>
        <div
          css={css`
            ${headerStyles.headerContainer}
          `}
        >
          <MiniMenuBtn isOppened={isOppened} navLinks={navLinks} />
          <LogoLink
            to="/"
            css={css`
              margin-left: 1em;
              ${mq[0]} {
                width: 11em;
                padding: 0;
              }
            `}
          >
            <img
              src={navLogo}
              css={css`
                max-width: 88%;
              `}
            />
          </LogoLink>
        </div>
        <NavLinksList navLinks={navLinks} mediaQueryParam="none" />
        <NavButtonsContainer
          css={css`
            border: none;
          `}
        >
          <MainStyledButton btnTxt={createAccountBtn} background="#96525c" />
          <MainStyledButton btnTxt={becomeTherapistBtn} background={colors.brandSecondary} />
        </NavButtonsContainer>
      </HeaderInner>
    </StyledHeader>
  )
}

export default Header
