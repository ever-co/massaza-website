import * as React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { MainStyledButton } from '../buttons/MainButtons'

import FacebookLogoIcon from '../../../assets/icons/logos/facebook.svg'
import TwitterLogoIcon from '../../../assets/icons/logos/twitter.svg'
import CarIcon from '../../../assets/icons/global/car.svg'

import { colors } from '../../styles/variables'

const FooterMiddle = () => {
  return (
    <div
      css={css`
        background-color: #60454a;
        position: relative;
        display: flex;
      `}
    >
      <div
        css={css`
          align-items: center;
          width: 55%;
          margin: 1em auto;
          display: inherit;
          @media (max-width: 1024px) {
            width: 80%;
            margin: 2em;
          }
          @media (max-width: 600px) {
            width: 100%;
            margin: 1em 0;
          }
        `}
      >
        <Link to="/">
          <img
            src={FacebookLogoIcon}
            alt=""
            css={css`
              margin: 0 0.5em;
              width: 2em;
            `}
          />
        </Link>
        <Link to="/">
          <img
            src={TwitterLogoIcon}
            alt=""
            css={css`
              margin: 0 0.5em;
              width: 2em;
            `}
          />
        </Link>
        <MainStyledButton
          btnTxt="Become a Practitioner"
          background={colors.brandSecondary}
          addCss={`margin: 0 0 0 5em; @media (max-width:1024px){ margin: auto;}; @media (max-width:600px){width: 12em;}`}
        />
      </div>
      <img
        src={CarIcon}
        css={css`
          transform: translate3d(-15em, -3em, 0);
          @media (max-width: 600px) {
            display: none;
          }
        `}
      />
    </div>
  )
}

export default FooterMiddle
