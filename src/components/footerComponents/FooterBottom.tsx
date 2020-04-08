import * as React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import MasazzaMiniLogo from '../../../assets/icons/logos/massaza-footer-logo.png'

const FooterMenus = (props: any) => {
  let menuTitle = Object.keys(props.menuObj)[0]
  let footerMenuListItems: any = Object.values(props.menuObj)[0]
  return (
    <div
      css={css`
        margin: 0.5em;
        @media (max-width: 800px) {
          font-size: 1rem;
          margin: 0 auto;
        }
        @media (max-width: 600px) {
          display: none;
        }
      `}
    >
      <h5
        css={css`
          font-size: 1.2rem;
          color: #f9b19f;
          @media (max-width: 800px) {
            font-size: 1.2rem;
          }
        `}
      >
        {menuTitle}
      </h5>
      <ul
        css={css`
          padding: 0;
          list-style-type: none;
        `}
      >
        {footerMenuListItems.map((li: String, key: number) => (
          <li key={key}>
            <Link
              to="/"
              css={css`
                color: #f9b19f;
              `}
            >
              {li}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const FooterBottom = () => (
  <div
    css={css`
      background: #4a3337;
    `}
  >
    <div
      css={css`
        justify-content: space-around;
        color: #f9b19f;
        display: flex;
        width: 90%;
        margin: auto;
        max-width: 90em;
        @media (max-width: 800px) {
          flex-flow: wrap;
          width: 100%;
          justify-content: right;
        }
      `}
    >
      <div>
        <img
          src={MasazzaMiniLogo}
          alt="massaza"
          css={css`
            margin: 1em 2em 0;
          `}
        />
        <ul
          css={css`
            list-style-type: none;
          `}
        >
          <li>Call us</li>
          <li>+359 879 000 000</li>
        </ul>
        <ul
          css={css`
            list-style-type: none;
          `}
        >
          <li>Contact us</li>
          <li>Hello@massaza.com</li>
        </ul>
      </div>

      <FooterMenus menuObj={{ Lifestyle: ['Pricing', 'Type of massage', 'Partner Saloons', 'Therapists'] }} />
      <FooterMenus menuObj={{ 'About us': ['Help', 'Trust & Safety', 'Who are we', 'Advertisement'] }} />
      <FooterMenus menuObj={{ Legals: ['Privacy', 'Terms of use'] }} />

      <div css={css`flex.col`}>
        <h5
          css={css`
            color: #f9b19f;
          `}
        >
          English
        </h5>
      </div>
    </div>
  </div>
)

export default FooterBottom
