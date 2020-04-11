import * as React from 'react'
import { css } from '@emotion/core'
import {
  topPictureHeaderStyles,
  topPictureHeaderAboutUsStyles,
  topPictureHeaderTrustAndSafety,
  topPictureHeaderPricing
} from '../../styles/componentStyles/shared'

import Container from '../Container'

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

const AboutUsHeader = (props: any) => (
  <TopPictureHeader
    topPicHeaderTxt=" We’re helping people "
    bottomPicHeaderTxt="Find the best massage saloon and theapists in the city."
    addHCss={topPictureHeaderAboutUsStyles.addH}
    addHeaderBackground={props.headerBackground}
  />
)

const TrustAndSafetyHeader = (props: any) => (
  <TopPictureHeader
    topPicHeaderTxt=" Your Trust and Safety is out priority"
    headerParagraph="Every month, therapists on the Soothe network complete thousands of massages across 70+ cities and four countries. We’re proud to be the world’s leading on-demand massage platform that lets you choose the time and place of your massage, and even the preferred gender of your therapist. We take extra steps to ensure that every Soothe massage is a safe and relaxing experience."
    addHTxtContainerCss={topPictureHeaderTrustAndSafety.txtContainer}
    addHCss={topPictureHeaderTrustAndSafety.addH}
    addHeaderParagraphCss={topPictureHeaderTrustAndSafety.addParagraph}
    addHeaderBackground={props.headerBackground}
  />
)

const PricingHeader = (props: any) => (
  <TopPictureHeader
    topPicHeaderTxt="Pricing in your location"
    headerParagraph="There are no hidden costs or additional fees. Choose your preferred treatment type below"
    addHContainerCss={topPictureHeaderPricing.addHContainer}
    addHTxtContainerCss={topPictureHeaderPricing.addTxtContainer}
    addHCss={topPictureHeaderPricing.addH}
    addHeaderParagraphCss={topPictureHeaderPricing.addParagraph}
    addHeaderBackground={props.addHeaderBackground}
  />
)

export { AboutUsHeader, TrustAndSafetyHeader, PricingHeader }
