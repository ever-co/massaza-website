import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import {navLinkStyles} from '../../styles/componentStyles/header'

let currentLink = ['about-us','trust-and-safety', 'pricing','','' ]

const StyledNavLinks = styled(Link)`
  ${navLinkStyles.styledNavlinks}
`
const NavLinksList = (props: any) => {
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
      {props.navLinks.map((li: any, key: number) => (
        <StyledNavLinks
          to={`/${currentLink[key]}`}
          key={key}
          css={css`
            flex-flow: ${props.flexFlow};
          `}
        >
          {li}
        </StyledNavLinks>
      ))}
    </ul>
  )
}

export default NavLinksList
