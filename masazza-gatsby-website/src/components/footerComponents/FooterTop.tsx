import * as React from 'react'
import { css } from '@emotion/core'
import { footerTopStyles, footerTopAppStoreBtnStyles } from '../../styles/componentStyles/footer'

import TopBackgroundImg from '../../../assets/images/global/footer-top-background.png'
import TopBackgroundImgMobile from '../../../assets/images/global/footer-top-mobile-background.png'

import AppStoreBtns from '../buttons/AppStoreBtns'

import { useTranslation } from 'react-i18next'

const FooterTop = () => {
  const { t } = useTranslation()

  return (
    <div css={footerTopStyles.footerTopContainer}>
      <div css={footerTopStyles.footerTopTxtContainer}>
        <h1 css={footerTopStyles.footerTopH}>{t('footer.topTitle')}</h1>
        <AppStoreBtns addStoreBtnWrapperCss={footerTopAppStoreBtnStyles.wrapper} addCssBtn={footerTopAppStoreBtnStyles.btn} />
      </div>
    </div>
  )
}

export default FooterTop
