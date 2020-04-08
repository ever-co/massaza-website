import * as React from 'react'
import { css } from '@emotion/core'
import { colors, flex } from '../../styles/variables'

import { MainStyledButton } from '../buttons/MainButtons'
import PageLine from './PageLine'

import OfferBackgroundImg from '../../../assets/images/shared/prices-card-background.png'

const Offer = (props: any) => (
  <article
    className="offer"
    css={css`
      background: url(${OfferBackgroundImg});
      border-radius: 30px;
      color: #ffffff;
      width: 18em;
      text-align: center;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: 5;
      @media (max-width: 1024px) {
        font-size: 1.1rem;
        margin: 0 0.5em;
      }
      ${props.addOfferCss}
      @media (max-width: 600px) {
        margin: 1em auto;
        max-width: 20em;
        width: 80%;
      }
    `}
  >
    <div
      className="minutes col"
      css={css`
        ${flex.col}
        border: 4px dashed #f9b19f;
        border-radius: 50%;
        background: #e87b68;
        height: 6em;
        width: 6em;
        margin: 2em auto 0;
      `}
    >
      <h2
        css={css`
          margin: 0.5em auto 0;
          font-size: 3rem;
          line-height: 38px;
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
        width: 70%;
        margin: 2em auto;
      `}
    >
      {props.description}
    </p>
    <MainStyledButton
      background={colors.brandSecondary}
      btnTxt="More Info"
      addCss="height:auto; margin-bottom: 1em; @media (max-width:1024px){width: 80%;
            font-size: 1.1rem;}"
    />
  </article>
)

const Pricing = (props: any) => {
  return (
    <div
      className="pricing-wrapper"
      css={css`
        width: 85%;
        max-width: 90em;
        margin: auto;
        @media (max-width: 1024px) {
          width: 95%;
          margin: auto;
        }
        @media (max-width: 600px) {
          width: 95%;
          margin: 3em auto 0;
        }
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
          margin: 5em;
          width: 50%;
          ${props.addDescrCss}
          @media(max-width:1024px) {
            margin: 5em 3em 2em;
            width: 70%;
          }
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
          @media (max-width: 600px) {
            flex-flow: column;
          }
          ${flex.row}
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
