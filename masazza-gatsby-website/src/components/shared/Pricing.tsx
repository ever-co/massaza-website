import * as React from 'react'
import { css } from '@emotion/core'
import { colors, flex } from '../../styles/variables'
import { pricingStyles } from '../../styles/componentStyles/shared'
import { MainStyledButton } from '../buttons/MainButtons'
import PageLine from './PageLine'
import { useTranslation } from 'react-i18next'
import { OfferTypes, DataTypes } from '../../data/data'

import OfferBackgroundImg from '../../../assets/images/shared/prices-card-background.png'

const dict = require('../../../i18n/dictionary')

interface IOfferProps {
  addOfferCss?: string
  minutes: number
  dollars: number
  description: string
  key: number
}

const Offer: React.SFC<IOfferProps> = ({ addOfferCss, minutes, dollars, description }) => {
  const { t } = useTranslation()

  return (
    <article
      className="offer"
      css={css`
        background: url(${OfferBackgroundImg});
        ${pricingStyles.Offer.offerCard}
        ${addOfferCss}
      `}
    >
      <div className="minutes col" css={pricingStyles.Offer.minutes}>
        <h2 css={pricingStyles.Offer.offerH}>{minutes}</h2>
        <h5>{t('homePage.pricing.min')}</h5>
      </div>
      <div
        className="price col"
        css={css`
          ${flex.col}
        `}
      >
        <h5>{t('homePage.pricing.pFrom')}</h5>
        <h2>${dollars}</h2>
      </div>
      <p css={pricingStyles.Offer.offerP}>{description}</p>
      <MainStyledButton addCss={pricingStyles.Offer.addMainBtn} btnTxt={t('pricing.offerBtn')} />
    </article>
  )
}

const Pricing: React.SFC<DataTypes> = ({ children, addWrapperCss, PageLineHTxt, addDescrCss, addOfferCss, addLineCss, addPageLHCss }) => {
  const { t } = useTranslation()
  let currentLang = useTranslation().i18n.languages[0]
  const offersData = dict.default[`${currentLang}`].translation.pricing.offers
  return (
    <div
      className="pricing-wrapper"
      css={css`
        ${pricingStyles.Pricing.wrapper}
        ${addWrapperCss}
      `}
    >
      <PageLine
        txtContent={PageLineHTxt}
        addHCss={`margin-top:-3em; background:${colors.mainBackground};  @media(max-width:600px){ margin: -2em 0em} ${addPageLHCss}`}
        addLineCss={css`
          height: 65em;
          ${addLineCss}
        `}
      />
      <div
        className="pricing-descr"
        css={css`
          ${pricingStyles.Pricing.description}
          ${addDescrCss}
        `}
      >
        <h2
          css={css`
            font-size: 2.5rem;
            color: ${colors.primaryTitleColor};
          `}
        >
          {t('homePage.pricing.h2')}
        </h2>
        <p
          css={css`
            color: ${colors.brand};
          `}
        >
          {t('homePage.pricing.description')}
        </p>
      </div>

      <div
        className="offers"
        css={css`
          ${pricingStyles.Pricing.offers}
        `}
      >
        {offersData.map((offer: OfferTypes, i: number) => (
          <Offer key={i} minutes={offer.minutes} dollars={offer.dollars} description={offer.description} addOfferCss={addOfferCss} />
        ))}
      </div>
      {children}
    </div>
  )
}

export default Pricing
