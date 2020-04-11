import * as React from 'react'
import { css } from '@emotion/core'
import { colors } from '../../styles/variables'
import {mainAddStyles, appStoreStyles,extendBuisnessAddStyles} from '../../styles/componentStyles/shared'

import AppStoreBtns from '../buttons/AppStoreBtns'
import { MainStyledButton } from '../buttons/MainButtons'

import Add1BackgroundWebImg from '../../../assets/images/adds/comBackground.png'
import Add2BackgroundWebImg from '../../../assets/images/adds/com-extend-background.png'


const MainAdd = (props: any) => {
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
          Available on Android and iOS
        </h2>
        {props.isExtend ? (
          <MainStyledButton background={colors.brandSecondary} addCss={props.addMainBtnCss} btnTxt={props.MainBtnTxt} />
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

const ExtendBuisnessAdd = () => (
  <MainAdd
    backgroundWebUrl={Add2BackgroundWebImg}
    addAddWrapperCss={extendBuisnessAddStyles.addWrapper}
    comertialDescrCss={extendBuisnessAddStyles.addDescr}
    comertialLabelCss={extendBuisnessAddStyles.label}
    addMainBtnCss={extendBuisnessAddStyles.mainBtn}
    isExtend={true}
    MainBtnTxt="Subscribe your salon"
  />
)

export { AppStoreAdd, ExtendBuisnessAdd }
