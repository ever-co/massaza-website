import * as React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import {footerMiddleStyles} from '../../styles/componentStyles/footer'

import { MainStyledButton } from '../buttons/MainButtons'

import FacebookLogoIcon from '../../../assets/icons/logos/facebook.svg'
import TwitterLogoIcon from '../../../assets/icons/logos/twitter.svg'
import CarIcon from '../../../assets/icons/global/car.svg'


const FooterMiddle = () => {
  return (
    <div
      css={css`
       ${footerMiddleStyles.footerMiddleContainer}
      `}
    >
      <div
        css={css`
          ${footerMiddleStyles.footerMiddleContnentContainer}
        `}
      >
        <Link to="/">
          <img
            src={FacebookLogoIcon}
            alt=""
            css={css`
            ${footerMiddleStyles.link}
            `}
          />
        </Link>
        <Link to="/">
          <img
            src={TwitterLogoIcon}
            alt=""
            css={css`
             ${footerMiddleStyles.link}
            `}
          />
        </Link>
        <MainStyledButton
          btnTxt="Become a Practitioner"
          addCss={footerMiddleStyles.mainBtn}
        />
      </div>
      <img
        src={CarIcon}
        css={css`
       ${footerMiddleStyles.car}
        `}
      />
    </div>
  )
}

export default FooterMiddle
