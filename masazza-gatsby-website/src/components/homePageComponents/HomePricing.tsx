import * as React from 'react'
import Pricing from '../shared/Pricing'

const HomePricing = (props: any) => (
  <Pricing
    addWrapperCss={`
  background: url(${props.imgUrl});
  background-repeat: no-repeat;
  background-position: 120% 110%;
  background-size: 60%;

  `}
    addOfferCss="margin: 0 1em 2em;
  @media (max-width:600px){
    margin: 0 auto 2em;
    width: 100%;
  }"
    addDescrCss="
  margin: 6em 0 3em 4em;
  width: 70%;
  @media (max-width:600px){
    margin: 0 auto 2em;
    width: 90%;
  }"
    PageLineHTxt="THE PRICING"
  />
)

export default HomePricing
