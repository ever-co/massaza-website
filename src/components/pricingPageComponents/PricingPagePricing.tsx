import * as React from 'react'
import Pricing from '../shared/Pricing'
import { css } from '@emotion/core'
import { pricingPageStyles, pricingPageLineStyles } from '../../styles/componentStyles/pricing'

import PageLine from '../shared/PageLine'

import PricingPagePricingBackgroundImg from '../../../assets/images/pricing/pricing-offeers-background.png'

const PricingPagePricing = (props: any) => (
  <Pricing
    PageLineHTxt="THE FINAL PRICES"
    addWrapperCss={css`
      background: url(${PricingPagePricingBackgroundImg});
      ${pricingPageStyles.wrapperCss}
    `}
    addOfferCss={pricingPageStyles.offerCss}
    addLineCss={pricingPageStyles.lineCss}
    addPageLHCss={pricingPageStyles.lineHCss}
  >
    <div
      className="pricing-descr"
      css={css`
        ${pricingPageStyles.pricingDescr}
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
        addHCss={pricingPageLineStyles.h}
      />
    </div>
    <div
      className="comissions"
      css={css`
        ${pricingPageStyles.comissions}
      `}
    >
      <p
        css={css`
          ${pricingPageStyles.paragraph}
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
