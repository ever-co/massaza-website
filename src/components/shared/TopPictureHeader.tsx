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
import { DataTypes } from '../../data/data'

const TopPictureHeader: React.SFC<DataTypes> = ({
  headerParagraph,
  addHeaderParagraphCss,
  bottomPicHeaderTxt,
  topPicHeaderTxt,
  addHeaderBackground,
  addHContainerCss,
  addHTxtContainerCss,
  addHCss
}) => {
  return (
    <header
      className="header-with-img about-us-header row"
      css={css`
        background: url(${addHeaderBackground});
        ${topPictureHeaderStyles.headerWithImg}
      `}
    >
      <Container>
        <div
          className="header-container col"
          css={css`
            ${topPictureHeaderStyles.headerContainer}
            ${addHContainerCss}
          `}
        >
          <div
            className="header-txt-container"
            css={css`
              ${addHTxtContainerCss}
            `}
          >
            <h1
              css={css`
                ${topPictureHeaderStyles.h}
                ${addHCss}
              `}
            >
              {topPicHeaderTxt} <br />
              {bottomPicHeaderTxt}
            </h1>
            <p
              css={css`
                ${addHeaderParagraphCss}
              `}
            >
              {headerParagraph}
            </p>
          </div>
        </div>
      </Container>
    </header>
  )
}

const AboutUsHeader = (props: any) => {
  const { t } = useTranslation()

  return (
    <TopPictureHeader
      topPicHeaderTxt={t('aboutUs.topContainer.topPicHeaderTxt')}
      bottomPicHeaderTxt={t('aboutUs.topContainer.bottomPicHeaderTxt')}
      addHCss={topPictureHeaderAboutUsStyles.addH}
      addHeaderBackground={props.headerBackground}
    />
  )
}

const TrustAndSafetyHeader:React.SFC<DataTypes>= ({headerBackground}) => {
  const { t } = useTranslation()

  return (
    <TopPictureHeader
      topPicHeaderTxt={t('trustAndSafety.topContainer.topPicHeaderTxt')}
      headerParagraph={t('trustAndSafety.topContainer.headerParagraph')}
      addHTxtContainerCss={topPictureHeaderTrustAndSafety.txtContainer}
      addHCss={topPictureHeaderTrustAndSafety.addH}
      addHeaderParagraphCss={topPictureHeaderTrustAndSafety.addParagraph}
      addHeaderBackground={headerBackground}
    />
  )
}

const PricingHeader:React.SFC<DataTypes>= ({addHeaderBackground}) => {
  const { t } = useTranslation()

  return (
    <TopPictureHeader
      topPicHeaderTxt={t('pricing.topContainer.topPicHeaderTxt')}
      headerParagraph={t('pricing.topContainer.headerParagraph')}
      addHContainerCss={topPictureHeaderPricing.addHContainer}
      addHTxtContainerCss={topPictureHeaderPricing.addTxtContainer}
      addHCss={topPictureHeaderPricing.addH}
      addHeaderParagraphCss={topPictureHeaderPricing.addParagraph}
      addHeaderBackground={addHeaderBackground}
    />
  )
}

export { AboutUsHeader, TrustAndSafetyHeader, PricingHeader }
