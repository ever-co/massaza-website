import * as React from 'react'
import { css } from '@emotion/core'
import {howItWorksStyles, howItWorksPageLineStyles} from '../../styles/componentStyles/home'

import PageLine from '../shared/PageLine'

import StepsWeb from '../../../assets/images/home/steps-section-web.png'
import StepsTablet from '../../../assets/images/home/steps-section-tablet.png'
import StepsMobile from '../../../assets/images/home/steps-section-mobile.png'

const HowItWorks = () => (
  <div
    className="how-it-works col"
    css={css`${howItWorksStyles.howItWorks}`}
  >
    <PageLine
      txtContent="How it works"
      addLineCss={howItWorksPageLineStyles.line}
      addHCss={howItWorksPageLineStyles.h}
    />
    <picture>
      <source media="(max-width: 650px)" srcSet={StepsMobile} />
      <source media="(max-width: 1025px)" srcSet={StepsTablet} />
      <img src={StepsWeb} alt="" />
    </picture>
    <h5
      css={css`${howItWorksStyles.h5}`}
    >
      get a massage from the best
    </h5>
  </div>
)

export default HowItWorks
