import * as React from 'react'
import { css } from '@emotion/core'
import { flex } from '../../styles/variables'
import { topPageStyles, pageLine, topPageAppStoreBtnsStyles } from '../../styles/componentStyles/home'

import AppStoreBtns from '../buttons/AppStoreBtns'
import PageLine from '../shared/PageLine'

import TopBackgroundImg from '../../../assets/images/home/backgrounds/top-background.png'
import TopBackgroundMobileImg from '../../../assets/images/home/backgrounds/top-background-mobile.png'
import Container from '../Container'

import { useTranslation } from 'react-i18next'

const TopContainer = () => {
  const { t } = useTranslation()
  console.log()
  return (
    <Container>
      <div
        css={css`
          background: url(${TopBackgroundImg});
          ${topPageStyles.topContainer}
          @media (max-width: 600px) {
            background: url(${TopBackgroundMobileImg});
            ${topPageStyles.topContainerMobile}
          }
        `}
      >
        <PageLine txtContent={t('homePage.topPage.pageLine')} addLineCss={pageLine.topLine} addHCss={pageLine.topLineH} />
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
            {t('homePage.topPage.h')}
          </h1>
          <p
            css={css`
              ${topPageStyles.paragraph}
            `}
          >
            {t('homePage.topPage.p1')}

            <br />
            {t('homePage.topPage.p2')}
          </p>
          <AppStoreBtns addCssBtn={topPageAppStoreBtnsStyles.btnS} addStoreBtnWrapperCss={topPageAppStoreBtnsStyles.btnWrapper} />
        </header>
        <AppStoreBtns addCssBtn={topPageAppStoreBtnsStyles.btnF} addStoreBtnWrapperCss={topPageAppStoreBtnsStyles.btnWrapper} />
      </div>
    </Container>
  )
}

export default TopContainer
