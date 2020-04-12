import * as React from 'react'
import { css } from '@emotion/core'
import { howItWorksStyles, howItWorksPageLineStyles } from '../../styles/componentStyles/home'

import PageLine from '../shared/PageLine'

import StepsWeb from '../../../assets/images/home/steps-section-web.png'
import StepsTablet from '../../../assets/images/home/steps-section-tablet.png'
import StepsMobile from '../../../assets/images/home/steps-section-mobile.png'

import {useTranslation} from 'react-i18next'

const HowItWorks = () => {
  const {t} = useTranslation()
  return (
    <div
      className="how-it-works col"
      css={css`
        ${howItWorksStyles.howItWorks}
      `}
    >
      <PageLine txtContent={t("homePage.howItWorks.pageLine")} addLineCss={howItWorksPageLineStyles.line} addHCss={howItWorksPageLineStyles.h} />
      <picture>
        <source media="(max-width: 650px)" srcSet={StepsMobile} />
        <source media="(max-width: 1025px)" srcSet={StepsTablet} />
        <img src={StepsWeb} alt="" />
      </picture>
      <h5
        css={css`
          ${howItWorksStyles.h5}
        `}
      >
        {t("homePage.howItWorks.h5")}
      </h5>
    </div>
  )
}

export default HowItWorks
