import * as React from 'react'
import { css, SerializedStyles } from '@emotion/core'
import { colors } from '../../styles/variables'
import { mainAddStyles, appStoreStyles, extendBuisnessAddStyles } from '../../styles/componentStyles/shared'

import AppStoreBtns from '../buttons/AppStoreBtns'
import { MainStyledButton } from '../buttons/MainButtons'

import Add1BackgroundWebImg from '../../../assets/images/adds/comBackground.webp'
import Add2BackgroundWebImg from '../../../assets/images/adds/com-extend-background.webp'
import { DataTypes } from '../../data/data'

import { useTranslation } from 'react-i18next'

interface MainAdd  {
  isExtend: boolean
  addMainBtnCss?: string
  addStoreBtnWrapperCSs?: string
  addCssBtn?: string
  backgroundWebUrl: any
  addAddWrapperCss: any
  comertialDescrCss: string
  comertialLabelCss:string,
  MainBtnTxt?: string
}

const MainAdd: React.SFC<MainAdd> = ({
  isExtend,
  addMainBtnCss,
  addStoreBtnWrapperCSs ,
  addCssBtn,
  backgroundWebUrl,
  addAddWrapperCss,
  comertialDescrCss,
  comertialLabelCss,
  MainBtnTxt
}) => {
  const { t } = useTranslation()
  return (
    <div
      css={css`
        background: url(${backgroundWebUrl});
        ${mainAddStyles.addContainer}
        ${addAddWrapperCss}
      `}
    >
      <div
        className="comertial-description"
        css={css`
          ${mainAddStyles.description}
          ${comertialDescrCss}
        `}
      >
        <h2
          className="comertial-label"
          css={css`
            ${mainAddStyles.label}
            ${comertialLabelCss}
          `}
        >
          {t('advertisements.title')}
        </h2>
        {isExtend ? (
          <MainStyledButton addCss={`${addMainBtnCss};background:${colors.brandSecondary}`} >{t(`${MainBtnTxt}`) }</MainStyledButton>
        ) : (
          <AppStoreBtns addCssBtn={addCssBtn} addStoreBtnWrapperCss={addStoreBtnWrapperCSs} />
        )}
      </div>
    </div>
  )
}

const AppStoreAdd: React.SFC<DataTypes> = ({ addWrapperCss }) => (
  <MainAdd
    backgroundWebUrl={Add1BackgroundWebImg}
    addCssBtn={appStoreStyles.addCssBtn}
    isExtend={false}
    comertialDescrCss={appStoreStyles.description}
    comertialLabelCss={appStoreStyles.label}
    addAddWrapperCss={css`
      ${addWrapperCss};
      ${appStoreStyles.addWrapper}
    `}
    addStoreBtnWrapperCSs={appStoreStyles.btnWrapper}
  />
)

const ExtendBuisnessAdd: React.SFC = () => {
  return (
    <MainAdd
      backgroundWebUrl={Add2BackgroundWebImg}
      addAddWrapperCss={extendBuisnessAddStyles.addWrapper}
      comertialDescrCss={extendBuisnessAddStyles.addDescr}
      comertialLabelCss={extendBuisnessAddStyles.label}
      addMainBtnCss={extendBuisnessAddStyles.mainBtn}
      isExtend={true}
      MainBtnTxt='advertisements.btn'
    />
  )
}

export { AppStoreAdd, ExtendBuisnessAdd }
