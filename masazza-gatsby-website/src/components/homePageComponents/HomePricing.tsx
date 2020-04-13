import * as React from 'react'
import {pricingHomeStyles} from '../../styles/componentStyles/home'
import Pricing from '../shared/Pricing'
import {useTranslation} from 'react-i18next'

const HomePricing = () => {
  const {t} = useTranslation()
  return(
  <Pricing
    addWrapperCss={pricingHomeStyles.addWrapperCss}
    addOfferCss={pricingHomeStyles.addOfferCss}
    addDescrCss={pricingHomeStyles.addDescrCss}
    PageLineHTxt={t("homePage.pricing.lineH")}
  />
)}

export default HomePricing
