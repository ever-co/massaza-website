import * as React from 'react'
import { topPageStyles, pageLine, topPageAppStoreBtnsStyles } from '../../styles/componentStyles/home'

import AppStoreBtns from '../buttons/AppStoreBtns'
import PageLine from '../shared/PageLine'

import Container from '../Container'

import { useTranslation } from 'react-i18next'

const TopContainer = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <div css={topPageStyles.topContainer}>
        <PageLine txtContent={t('homePage.topPage.pageLine')} addLineCss={pageLine.topLine} addHCss={pageLine.topLineH} />
        <header css={topPageStyles.header}>
          <h1 css={topPageStyles.h1}>{t('homePage.topPage.h')}</h1>
          <p css={topPageStyles.paragraph}>
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
