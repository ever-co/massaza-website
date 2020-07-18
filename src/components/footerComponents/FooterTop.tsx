import * as React from 'react'
import { footerTopStyles, footerTopAppStoreBtnStyles } from '../../styles/componentStyles/footer'
import AppStoreBtns from '../buttons/AppStoreBtns'
import { useTranslation } from 'react-i18next'

const FooterTop: React.SFC = () => {
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
