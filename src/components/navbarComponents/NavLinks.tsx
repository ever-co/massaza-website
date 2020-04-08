import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { colors } from '../../styles/variables'

let currentLink = ['about-us','trust-and-safety', 'pricing','','' ]

const StyledNavLinks = styled(Link)`
  color: ${colors.brand};
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 1rem;
  color: #96525c;
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
`
const NavLinksList = (props: any) => {
  return (
    <ul
      css={css`
        display: flex;
        width: 100%;
        flex-flow: ${props.flexFlow};
        margin: 1em 0;
        padding: 0;
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
