import * as React from 'react'
import { css } from '@emotion/core'
import { flex, colors } from '../../styles/variables'

import PageLine from '../shared/PageLine'

import StepsWeb from '../../../assets/images/home/steps-section-web.png'
import StepsTablet from '../../../assets/images/home/steps-section-tablet.png'
import StepsMobile from '../../../assets/images/home/steps-section-mobile.png'

const HowItWorks = () => (
  <div
    className="how-it-works col"
    css={css`
      ${flex.col} width: 85%;
      max-width: 90em;
      margin: auto;
    `}
  >
    <PageLine
      txtContent="How it works"
      addLineCss="height:65em;"
      addHCss={` color: #E87B68; font-size: 1em; background:${colors.mainBackground}; margin: -3em -2em; @media (max-width:600px){display:none}`}
    />
    <picture>
      <source media="(max-width: 650px)" srcSet={StepsMobile} />
      <source media="(max-width: 1025px)" srcSet={StepsTablet} />
      <img src={StepsWeb} alt="" />
    </picture>
    <h5
      css={css`
        align-self: flex-end;
        text-transform: uppercase;
        color: #96525c;
        margin: 5em 0;
        font-size: 1em;
      `}
    >
      get a massage from the best
    </h5>
  </div>
)

export default HowItWorks
