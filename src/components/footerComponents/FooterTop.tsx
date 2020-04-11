import * as React from 'react'
import { css } from '@emotion/core'
import { footerTopStyles, footerTopAppStoreBtnStyles } from '../../styles/componentStyles/footer'

import TopBackgroundImg from '../../../assets/images/global/footer-top-background.png'
import TopBackgroundImgMobile from '../../../assets/images/global/footer-top-mobile-background.png'

import AppStoreBtns from '../buttons/AppStoreBtns'

const FooterTop = () => (
  <div
    css={css`
      background: url(${TopBackgroundImg});
      ${footerTopStyles.footerTopContainer}
      @media (max-width: 600px) {
        background: url(${TopBackgroundImgMobile});
        ${footerTopStyles.footerTopContainerMobileQuery}
      }
    `}
  >
    <div
      css={css`
        ${footerTopStyles.footerTopTxtContainer}
      `}
    >
      <h1
        css={css`
          ${footerTopStyles.footerTopH}
        `}
      >
        We’re helping people <br />
        Find the best Therapist <br />
        in the city.
      </h1>
      <AppStoreBtns addStoreBtnWrapperCss={footerTopAppStoreBtnStyles.wrapper} addCssBtn={footerTopAppStoreBtnStyles.btn} />
    </div>
  </div>
)

export default FooterTop
