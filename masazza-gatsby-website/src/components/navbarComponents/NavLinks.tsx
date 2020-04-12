import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { navLinkStyles } from '../../styles/componentStyles/header'
import { useTranslation } from 'react-i18next'

let currentLink = ['about-us', 'trust-and-safety', 'pricing', '', '']
let navLinks = ['aboutUs', 'trustAndSafety', 'pricing', 'partnerSaloons', 'therapists']

const StyledNavLinks = styled(Link)`
  ${navLinkStyles.styledNavlinks}
`
const NavLinksList = (props: any) => {
  const { t } = useTranslation();

  return (
    <ul
      css={css`
       ${navLinkStyles.navlinksUl}
        flex-flow: ${props.flexFlow};
        @media screen and (max-width: 1250px) {
          display: ${props.mediaQueryParam};
        }
      `}
    >
      {navLinks.map((li: any, key: number) => (
        <StyledNavLinks
          to={`/${currentLink[key]}`}
          key={key}
          css={css`
            flex-flow: ${props.flexFlow};
          `}
        >
          {t(`navbar.${li}`)}
        </StyledNavLinks>
      ))}
    </ul>
  )
}

export default NavLinksList
