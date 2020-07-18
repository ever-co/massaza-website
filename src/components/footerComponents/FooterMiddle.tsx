import * as React from 'react'
import { Link } from 'gatsby'
import { footerMiddleStyles } from '../../styles/componentStyles/footer'

import { MainStyledButton } from '../buttons/MainButtons'

import FacebookLogoIcon from '../../../assets/icons/logos/facebook.svg'
import TwitterLogoIcon from '../../../assets/icons/logos/twitter.svg'
import CarIcon from '../../../assets/icons/global/car.svg'

import { useTranslation } from 'react-i18next'

const FooterMiddle: React.SFC = () => {
  const { t } = useTranslation()

  return (
    <div css={footerMiddleStyles.footerMiddleContainer}>
      <div css={footerMiddleStyles.footerMiddleContnentContainer}>
        <Link to="/">
          <img src={FacebookLogoIcon} alt="facebook" css={footerMiddleStyles.link} />
        </Link>
        <Link to="/">
          <img src={TwitterLogoIcon} alt="twitter" css={footerMiddleStyles.link} />
        </Link>
        <MainStyledButton addCss={footerMiddleStyles.mainBtn}>{t('footer.btn')}</MainStyledButton>
      </div>
      <img alt="car" src={CarIcon} css={footerMiddleStyles.car} />
    </div>
  )
}

export default FooterMiddle
