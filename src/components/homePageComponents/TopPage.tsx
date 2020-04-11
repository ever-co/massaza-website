import * as React from 'react'
import { css } from '@emotion/core'
import { flex } from '../../styles/variables'
import { topPageStyles, pageLine, topPageAppStoreBtnsStyles } from '../../styles/componentStyles/home'

import AppStoreBtns from '../buttons/AppStoreBtns'
import PageLine from '../shared/PageLine'

import TopBackgroundImg from '../../../assets/images/home/backgrounds/top-background.png'
import TopBackgroundMobileImg from '../../../assets/images/home/backgrounds/top-background-mobile.png'
import Container from '../Container'
const TopContainer = () => {
  return (
    <Container>
      <div
        css={css`
          background: url(${TopBackgroundImg});
          ${topPageStyles.topContainer}
          @media (max-width: 600px) {
            background: url(${TopBackgroundMobileImg});
            ${topPageStyles.topContainerMobile}
          }`}
      >
        <PageLine
          txtContent="Massage. Home or Saloons"
          addLineCss={pageLine.topLine}
          addHCss={pageLine.topLineH}
        />
        <header
          css={css`
           ${topPageStyles.header}
          `}
        >
          <h1
            css={css`
              ${topPageStyles.h1}
            `}
          >
            Find a Massage Therapist close to you!
          </h1>
          <p
            css={css`
             ${topPageStyles.paragraph}
            `}
          >
            Select between different saloons or therapists and select the right one you need.
            <br />
            It’s easy Just download the App and start searching!
          </p>
          <AppStoreBtns
          addCssBtn={topPageAppStoreBtnsStyles.btnS}
            addStoreBtnWrapperCss={topPageAppStoreBtnsStyles.btnWrapper}
          />
        </header>
        <AppStoreBtns
          addCssBtn={topPageAppStoreBtnsStyles.btnF}
          addStoreBtnWrapperCss={topPageAppStoreBtnsStyles.btnWrapper}
        />
      </div>
    </Container>
  )
}

export default TopContainer
