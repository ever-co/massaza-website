import * as React from 'react'
import { howItWorksStyles, howItWorksPageLineStyles } from '../../styles/componentStyles/home'
import { css } from '@emotion/core'
import { flex, colors } from '../../styles/variables'
import PageLine from '../shared/PageLine'

import StepsWeb from '../../../assets/images/home/steps-section-web.webp'
import StepsTablet from '../../../assets/images/home/steps-section-tablet.webp'
import StepsMobile from '../../../assets/images/home/steps-section-mobile.webp'

import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled'

const StyledStepHeader = styled.h3`
  text-align: center;
  color: ${colors.brand};
  max-width: 15em;
  margin: auto 5%;
  @media (max-width: 600px) {
    width: 7.5em;
  }
`

const HowItWorks: React.FC = () => {
  const { t } = useTranslation()
  const picture = React.useRef(null)

  return (
    <div className="how-it-works col" css={howItWorksStyles.howItWorks}>
      <PageLine addLineCss={howItWorksPageLineStyles.line} addHCss={howItWorksPageLineStyles.h}>
        {t('homePage.howItWorks.pageLine')}
      </PageLine>
      <picture
        css={css`
          margin-top: 5em;
          @media (max-width: 1025px) {
            margin: 2em 0 0;
          }
        `}
        ref={picture}
        id="pic"
      >
        <source media="(max-width: 650px)" srcSet={StepsMobile} />
        <source media="(max-width: 1025px)" srcSet={StepsTablet} />
        <img alt="Download App steps" src={StepsWeb}  css={css`width:90%`}/>
      </picture>
      <div
        css={css`
          ${flex.row};
          position: absolute;
          width: 80%;
          @media (max-width: 1025px) {
           width:80%;
          }
          @media (max-width: 600px) {
            flex-flow: column;
            height: 55em;
            width: 97%;
            left: 5px;
          }
        `}
      >
        <StyledStepHeader
          css={css`
            @media (max-width: 600px) {
              align-self: flex-end;
            }
          `}
        >
          {t('homePage.howItWorksSvg.firstStep')}
        </StyledStepHeader>
        <StyledStepHeader
          css={css`
            @media (max-width: 600px) {
              align-self: flex-start;
            }
          `}
        >
          {t('homePage.howItWorksSvg.secondStep')}
        </StyledStepHeader>
        <StyledStepHeader
          css={css`
            @media (max-width: 600px) {
              align-self: flex-end;
            }
          `}
        >
          {t('homePage.howItWorksSvg.thirdStep')}{' '}
        </StyledStepHeader>
      </div>
      <h5 css={howItWorksStyles.h5}>{t('homePage.howItWorks.h5')}</h5>
    </div>
  )
}

export default HowItWorks
