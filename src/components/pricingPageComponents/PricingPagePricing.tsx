import * as React from 'react'
import Pricing from '../shared/Pricing'
import { css } from '@emotion/core'

import PageLine from '../shared/PageLine'

import PricingPagePricingBackgroundImg from '../../../assets/images/pricing/pricing-offeers-background.png'

const PricingPagePricing = (props: any) => (
  <Pricing
    PageLineHTxt="THE FINAL PRICES"
    addWrapperCss={css`
      background: url(${PricingPagePricingBackgroundImg});
      background-repeat: no-repeat;
      background-position: top right;
      @media (max-width: 600px) {
        background: none;
      }
    `}
    addOfferCss=" margin: auto;"
    addLineCss="height:95em; @media (max-width:1024px){height:120em}"
    addPageLHCss="font-weight: bold;
                  font-size: .8rem;
                  width: 7em;
                  @media(max-width:1024px){
                    margin: 0;
                    top: -3%;}"
  >
    <div
      className="pricing-descr"
      css={css`
        margin: 5em;
        width: 50%;
        @media (max-width: 1024px) {
          margin: 5em auto 0;
          width: 90%;
        }
      `}
    >
      <p
        css={css`
          color: #96525c;
        `}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p
        css={css`
          color: #96525c;
        `}
      >
        Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>

      <PageLine
        txtContent="COMISSIONS"
        addHCss="background: #FDFAF9;
                font-weight: bold;
                font-size: .8rem;
                width: 7em;
                @media(max-width:1024px){margin:-1em 0}"
      />
    </div>
    <div
      className="comissions"
      css={css`
        width: 85%;
        max-width: 90em;
        margin: 0 auto 3em;
      `}
    >
      <p
        css={css`
          color: #96525c;
          @media (max-width: 1024px) {
            margin: 4em auto 0;
          }
        `}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </Pricing>
)

export default PricingPagePricing
