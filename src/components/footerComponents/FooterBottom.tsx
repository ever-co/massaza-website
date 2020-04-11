import * as React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import {footerBottomStyles} from '../../styles/componentStyles/footer'

import MasazzaMiniLogo from '../../../assets/icons/logos/massaza-footer-logo.png'

const FooterMenus = (props: any) => {
  let menuTitle = Object.keys(props.menuObj)[0]
  let footerMenuListItems: any = Object.values(props.menuObj)[0]
  return (
    <div
      css={css`
       ${footerBottomStyles.footerMenusContainer}
      `}
    >
      <h5
        css={css`
          ${footerBottomStyles.footerMenusH}
        `}
      >
        {menuTitle}
      </h5>
      <ul
        css={css`
        ${footerBottomStyles.footerMenusUl}
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
       ${footerBottomStyles.footerBottomContainer}
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
