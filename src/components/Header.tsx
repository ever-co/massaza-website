import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { transparentize } from 'polished'
import { Link } from 'gatsby'
import { heights, navBreakpoints, colors } from '../styles/variables'
import Container from './Container'
import navLogo from '../../assets/icons/logos/masazza-logo.svg'

import { MainStyledButton } from './buttons/MainButtons'
import MiniMenuBtn from './navbarComponents/MiniMenuButton'
import NavLinksList from './navbarComponents/NavLinks'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  background-color: ${colors.white};
  color: ${transparentize(0.5, colors.white)};
  box-shadow: -2px 7px 7px -4px rgba(0, 0, 0, 0.57);
  position: fixed;
  z-index: 5000;
  width: 100%;
  top: 0px;
  transition: all 0.3s ease-out;
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  display: flex;
  justify-content: space-between;
`
const LogoLink = styled(Link)`
  width: 10em;
  border-right: 1px solid #e8dbdb;
`

const NavButtonsContainer = styled.div`
  border-left: 1px solid #e8dbdb;
  display: flex;
  height: 100%;
  padding-left: 1rem;
  justify-content: flex-end;
  width: fit-content;
  @media screen and (max-width: 600px) {
    display: none;
  }
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
            display: flex;
            height: 100%;
            align-items: center;
            width: 16em;
            @media (max-width: 600px) {
              flex-flow: row-reverse;
              width: 100%;
              justify-content: space-between;
            }
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
