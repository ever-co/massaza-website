import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import LanguageSwitch from '../LanguageSwitch'
import { footerBottomStyles } from '../../styles/componentStyles/footer'
import MasazzaMiniLogo from '../../../assets/icons/logos/massaza-footer-logo.png'
import { useTranslation } from 'react-i18next'
import { colors } from '../../styles/variables'

const dict = require('../../../i18n/dictionary')

interface IMenuData {
  key: string
  value: Array<string>
}
interface IFooterMenuProps {
  menuObj: IMenuData
}

const StyledUl = styled.ul`
  list-style-type: none;
`
const FooterMenus: React.FC<IFooterMenuProps> = ({ menuObj }) => {
  let menuTitle = Object.keys(menuObj)[0]
  let footerMenuListItems: any = Object.values(menuObj)[0]
  return (
    <div css={footerBottomStyles.footerMenusContainer}>
      <h5 css={footerBottomStyles.footerMenusH}>{menuTitle}</h5>
      <ul css={footerBottomStyles.footerMenusUl}>
        {footerMenuListItems.map((li: String, key: number) => (
          <li key={key}>
            <Link
              to="/"
              css={css`
                color: ${colors.secondaryLinks};
              `}
            >
              {li}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const FooterBottom: React.SFC = () => {
  const { t } = useTranslation()
  let currentLang = useTranslation().i18n.languages[0]
  const footerMenuData = dict.default[`${currentLang}`].translation.footer.footerMenus
  return (
    <div
      css={css`
        background: #4a3337;
      `}
    >
      <div css={footerBottomStyles.footerBottomContainer}>
        <div>
          <img
            src={MasazzaMiniLogo}
            alt="massaza"
            css={css`
              margin: 1em 2em 0;
            `}
          />
          <StyledUl>
            <li>{t('footer.callUs')}</li>
            <li>+359 879 000 000</li>
          </StyledUl>
          <StyledUl>
            <li>{t('footer.contactUs')}</li>
            <li>Hello@massaza.com</li>
          </StyledUl>
        </div>
        {footerMenuData.map((menu: IMenuData, i: number) => (
          <FooterMenus key={menu + i.toString()} menuObj={menu} />
        ))}
        <LanguageSwitch />
      </div>
    </div>
  )
}
export default FooterBottom
