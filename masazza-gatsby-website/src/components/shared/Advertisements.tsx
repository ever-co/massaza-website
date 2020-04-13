import * as React from 'react'
import { css } from '@emotion/core'
import { colors } from '../../styles/variables'
import {mainAddStyles, appStoreStyles,extendBuisnessAddStyles} from '../../styles/componentStyles/shared'

import AppStoreBtns from '../buttons/AppStoreBtns'
import { MainStyledButton } from '../buttons/MainButtons'

import Add1BackgroundWebImg from '../../../assets/images/adds/comBackground.png'
import Add2BackgroundWebImg from '../../../assets/images/adds/com-extend-background.png'

import { useTranslation } from 'react-i18next'


const MainAdd = (props: any) => {
  const { t } = useTranslation()

  return (
    <div
      css={css`
      background: url(${props.backgroundWebUrl});
        ${mainAddStyles.addContainer}
        ${props.addAddWrapperCss}
      `}
    >
      <div
        className="comertial-description"
        css={css`
         ${mainAddStyles.description}
          ${props.comertialDescrCss}
        `}
      >
        <h2
          className="comertial-label"
          css={css`
            ${mainAddStyles.label}
            ${props.comertialLabelCss}
          `}
        >
          {t('advertisements.title')}
        </h2>
        {props.isExtend ? (
          <MainStyledButton addCss={`${props.addMainBtnCss};background:${colors.brandSecondary}`} btnTxt={props.MainBtnTxt} />
        ) : (
          <AppStoreBtns addCssBtn={props.addCssBtn} addStoreBtnWrapperCss={props.addStoreBtnWrapperCSs} />
        )}
      </div>
    </div>
  )
}

const AppStoreAdd = props => (
  <MainAdd
    backgroundWebUrl={Add1BackgroundWebImg}
    addCssBtn={appStoreStyles.addCssBtn}
    isExtend={false}
    comertialDescrCss={appStoreStyles.description}
    comertialLabelCss={appStoreStyles.label}
    addAddWrapperCss={css`
      ${props.addWrapperCss};
      ${appStoreStyles.addWrapper}
    `}
    addStoreBtnWrapperCSs={appStoreStyles.btnWrapper}
  />
)

const ExtendBuisnessAdd = () => {
  const { t } = useTranslation()
return(
  <MainAdd
    backgroundWebUrl={Add2BackgroundWebImg}
    addAddWrapperCss={extendBuisnessAddStyles.addWrapper}
    comertialDescrCss={extendBuisnessAddStyles.addDescr}
    comertialLabelCss={extendBuisnessAddStyles.label}
    addMainBtnCss={extendBuisnessAddStyles.mainBtn}
    isExtend={true}
    MainBtnTxt={t('advertisements.btn')}
  />
)
}

export { AppStoreAdd, ExtendBuisnessAdd }
