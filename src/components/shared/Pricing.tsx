import * as React from 'react'
import { css } from '@emotion/core'
import { colors, flex } from '../../styles/variables'
import { pricingStyles } from '../../styles/componentStyles/shared'

import { MainStyledButton } from '../buttons/MainButtons'
import PageLine from './PageLine'

import OfferBackgroundImg from '../../../assets/images/shared/prices-card-background.png'

const Offer = (props: any) => (
  <article
    className="offer"
    css={css`
      background: url(${OfferBackgroundImg});
      ${pricingStyles.Offer.offerCard}
      ${props.addOfferCss}
    `}
  >
    <div
      className="minutes col"
      css={css`
        ${pricingStyles.Offer.minutes}
      `}
    >
      <h2
        css={css`
          ${pricingStyles.Offer.offerH}
        `}
      >
        {props.minutes}
      </h2>
      <h5>min</h5>
    </div>
    <div
      className="price col"
      css={css`
        ${flex.col}
      `}
    >
      <h5>FROM</h5>
      <h2>${props.dollars}</h2>
    </div>
    <p
      css={css`
        ${pricingStyles.Offer.offerP}
      `}
    >
      {props.description}
    </p>
    <MainStyledButton background={colors.brandSecondary} btnTxt="More Info" addCss={pricingStyles.Offer.addMainBtn} />
  </article>
)



const Pricing = (props: any) => {
  return (
    <div
      className="pricing-wrapper"
      css={css`
        ${pricingStyles.Pricing.wrapper}
        ${props.addWrapperCss}
      `}
    >
      <PageLine
        txtContent={props.PageLineHTxt}
        addHCss={`margin-top:-3em; background:${colors.mainBackground};  @media(max-width:600px){ margin: -2em 0em} ${props.addPageLHCss}`}
        addLineCss={css`
          height: 65em;
          ${props.addLineCss}
        `}
      />
      <div
        className="pricing-descr"
        css={css`
          ${pricingStyles.Pricing.description}
          ${props.addDescrCss}
        `}
      >
        <h2
          css={css`
            font-size: 2.5rem;
            color: ${colors.primaryTitleColor};
          `}
        >
          The pricing
        </h2>
        <p
          css={css`
            color: #96525c;
          `}
        >
          Text about how we create and generate prices. <br />
          Boxes include dinamice changed prices according day. <br />
          Prices are subject to change without notice and do not reflect variations in actual amounts to be paid due to region, time of
          appointment, application of surge pricing, tips, discounts, or other factors. Actual charges may vary.
        </p>
      </div>

      <div
        className="offers"
        css={css`
          ${pricingStyles.Pricing.offers}
        `}
      >
        <Offer
          minutes={60}
          dollars={59}
          description="Enjoy one hour of full-body relaxation, perfect for massage beginners and experts alike."
          addOfferCss={props.addOfferCss}
        />
        <Offer
          minutes={90}
          dollars={100}
          description="Enjoy one hour of full-body relaxation, perfect for massage beginners and experts alike."
          addOfferCss={props.addOfferCss}
        />
        <Offer
          minutes={120}
          dollars={140}
          description="Enjoy one hour of full-body relaxation, perfect for massage beginners and experts alike."
          addOfferCss={props.addOfferCss}
        />
      </div>
      {props.children}
    </div>
  )
}

export default Pricing
