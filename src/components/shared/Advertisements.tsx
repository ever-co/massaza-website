import * as React from 'react'
import { css } from '@emotion/core'
import { flex, colors } from '../../styles/variables'

import AppStoreBtns from '../buttons/AppStoreBtns'
import { MainStyledButton } from '../buttons/MainButtons'

import Add1BackgroundWebImg from '../../../assets/images/adds/comBackground.png'
import Add1BackgroundTabletImg from '../../../assets/images/adds/com-1-tablet-background.png'
import Add1BackgroundMobileImg from '../../../assets/images/adds/com-1-background-mobile.png'

import Add2BackgroundWebImg from '../../../assets/images/adds/com-extend-background.png'
import Add2BackgroundTabletImg from '../../../assets/images/adds/com-2-background-tablet.png'
import Add2BackgroundMobileImg from '../../../assets/images/adds/com-2-background-mobile.png'

// interface IProps {
//   [key: string]: string,
// }

const MainAdd = (props: any) => {
  return (
    <div
      css={css`
        ${flex.row}
        margin: auto;
        background: url(${props.backgroundWebUrl});
        width: 80%;
        max-width: 60em;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        border-radius: 20px;
        .comertial-description {
          justify-content: center;
          ${flex.col}
        }
        .comertial-label {
          letter-spacing: 2px;
          font-size: 1.8rem;
          color: #ffffff;
          line-height: 2rem;
        }
        @media (max-width: 1280px) {
          width: 80%;
        }
        @media (max-width: 1024px) {
          background-size: cover;
          width: 90%;
        }
        @media (max-width: 600px) {
          flex-flow: column;
          width: 100%;
          border-radius: 0;
        }
        ${props.addAddWrapperCss}
      `}
    >
      <div
        className="comertial-description"
        css={css`
          @media (max-width: 600px) {
            text-align: center;
            width: 100%;
            margin: 0;
          }
          ${props.comertialDescrCss}
        `}
      >
        <h2
          className="comertial-label"
          css={css`
            @media (max-width: 600px) {
              width: 100%;
              margin: 0;
            }
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
    addCssBtn="width: 25%;
    @media (max-width:600px){
      width: 40%;
    }"
    isExtend={false}
    comertialDescrCss=" margin: 0 1em;"
    comertialLabelCss="
    margin: 1em .8em 0;
    @media (max-width: 1280px) {
      width: 60%;
      font-size: 2rem;
      line-height: 1;
    }
    @media (max-width:1024px){
      font-size: 2.5rem;
      margin: 1em 1em 3em;
    }
    @media (max-width:600px){
      margin: 1em auto 0;
      width: 80%;
    }
   "
    addAddWrapperCss={css`
      ${props.addWrapperCss};

      @media (max-width: 1280px) {
        background-position: 70%;
        background: url(${Add1BackgroundTabletImg});
        background-repeat: no-repeat;
        background-size: 100%;
      }
      @media (max-width: 600px) {
        background: url(${Add1BackgroundMobileImg});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 25em;
      }
    `}
    addStoreBtnWrapperCSs="
    max-height: 8em;
    @media (max-width:1024px){
      margin: -6em 1em -1em;
    }
    @media(max-width:600px){
      margin: -1.5em 0 0;
    }"
  />
)

const ExtendBuisnessAdd = () => (
  <MainAdd
    backgroundWebUrl={Add2BackgroundWebImg}
    comertialDescrCss="
    width: 30%;
    margin: 1em;
    @media (max-width:1024px){
      margin: 1em 4em;
    }
    @media (max-width:600px){
      margin: 1em 0;
    }"
    addAddWrapperCss={`
    justify-content: flex-end;
    margin: 5em auto;
    @media (max-width: 1024px){
      background: url(${Add2BackgroundTabletImg});
      background-repeat: no-repeat;
      background-size: 100% 120%;
    }
    @media (max-width: 600px){
      background: url(${Add2BackgroundMobileImg});
      background-size: 100% 100%;
      height: 25em;
      margin: 2em 0 0;
    }`}
    comertialLabelCss="
    margin: 0;
    text-align: center;"
    addMainBtnCss="
    align-self: center;
    width: 14em;
    margin: 1em 0 0;
    font-size: 1rem;
    @media (max-width:1024px){
      width: 11em;
      padding: 0.5rem;
    }
    @media (max-width:600px){
      margin: 1em auto   ;
    }"
    isExtend={true}
    MainBtnTxt="Subscribe your salon"
  />
)

export { AppStoreAdd, ExtendBuisnessAdd }
