import * as React from 'react'
import Pricing from '../shared/Pricing'
import styled from '@emotion/styled'
import { pricingPageStyles, pricingPageLineStyles } from '../../styles/componentStyles/pricing'

import PageLine from '../shared/PageLine'


import { useTranslation } from 'react-i18next'
import { colors } from '../../styles/variables'

const StyledParagraph = styled.p`
  color: ${colors.brand};
`

const PricingPagePricing:React.FC = () => {
  const { t } = useTranslation()
  return (
    <Pricing
      PageLineHTxt={t('pricing.pageLineH')}
      addWrapperCss={pricingPageStyles.wrapperCss}
      addOfferCss={pricingPageStyles.offerCss}
      addLineCss={pricingPageStyles.lineCss}
      addPageLHCss={pricingPageStyles.lineHCss}
    >
      <div className="pricing-descr" css={pricingPageStyles.pricingDescr}>
        <StyledParagraph>{t('pricing.paragraphTop')}</StyledParagraph>
        <StyledParagraph>{t('pricing.paragraphBottom')}</StyledParagraph>

        <PageLine txtContent={t('pricing.pageLineComissionH')} addHCss={pricingPageLineStyles.h} />
      </div>
      <div className="comissions" css={pricingPageStyles.comissions}>
        <p css={pricingPageStyles.paragraph}>{t('pricing.comissionsParagraph')}</p>
      </div>
    </Pricing>
  )
}

export default PricingPagePricing
