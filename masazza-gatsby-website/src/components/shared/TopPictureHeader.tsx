import * as React from 'react'
import { css } from '@emotion/core'
import {
  topPictureHeaderStyles,
  topPictureHeaderAboutUsStyles,
  topPictureHeaderTrustAndSafety,
  topPictureHeaderPricing
} from '../../styles/componentStyles/shared'

import Container from '../Container'

import { useTranslation } from 'react-i18next'


const TopPictureHeader = (props: any) => {
  return (
    <header
      className="header-with-img about-us-header row"
      css={css`
        background: url(${props.addHeaderBackground});
        ${topPictureHeaderStyles.headerWithImg}
      `}
    >
      <Container>
        <div
          className="header-container col"
          css={css`
            ${topPictureHeaderStyles.headerContainer}
            ${props.addHContainerCss}
          `}
        >
          <div
            className="header-txt-container"
            css={css`
              ${props.addHTxtContainerCss}
            `}
          >
            <h1
              css={css`
                ${topPictureHeaderStyles.h}
                ${props.addHCss}
              `}
            >
              {props.topPicHeaderTxt} <br />
              {props.bottomPicHeaderTxt}
            </h1>
            <p
              css={css`
                ${props.addHeaderParagraphCss}
              `}
            >
              {props.headerParagraph}
            </p>
          </div>
        </div>
      </Container>
    </header>
  )
}

const AboutUsHeader = (props: any) => {
const {t}= useTranslation()

return(
  <TopPictureHeader
    topPicHeaderTxt={t("aboutUs.topContainer.topPicHeaderTxt")}
    bottomPicHeaderTxt={t("aboutUs.topContainer.bottomPicHeaderTxt")}
    addHCss={topPictureHeaderAboutUsStyles.addH}
    addHeaderBackground={props.headerBackground}
  />
)}

const TrustAndSafetyHeader = (props: any) => {
  const {t} = useTranslation()

  return(
  <TopPictureHeader
    topPicHeaderTxt= {t("trustAndSafety.topContainer.topPicHeaderTxt")}
    headerParagraph={t("trustAndSafety.topContainer.headerParagraph")}
    addHTxtContainerCss={topPictureHeaderTrustAndSafety.txtContainer}
    addHCss={topPictureHeaderTrustAndSafety.addH}
    addHeaderParagraphCss={topPictureHeaderTrustAndSafety.addParagraph}
    addHeaderBackground={props.headerBackground}
  />
)}

const PricingHeader = (props: any) => {
  
const {t}= useTranslation()
  
  return(
  <TopPictureHeader
    topPicHeaderTxt={t("pricing.topContainer.topPicHeaderTxt")}
    headerParagraph={t("pricing.topContainer.headerParagraph")}
    addHContainerCss={topPictureHeaderPricing.addHContainer}
    addHTxtContainerCss={topPictureHeaderPricing.addTxtContainer}
    addHCss={topPictureHeaderPricing.addH}
    addHeaderParagraphCss={topPictureHeaderPricing.addParagraph}
    addHeaderBackground={props.addHeaderBackground}
  />
)}

export { AboutUsHeader, TrustAndSafetyHeader, PricingHeader }
