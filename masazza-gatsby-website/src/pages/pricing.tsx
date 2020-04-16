import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { PricingHeader } from '../components/shared/TopPictureHeader'
import PricingPagePricing from '../components/pricingPageComponents/PricingPagePricing'
import { AppStoreAdd } from '../components/shared/Advertisements'

import PricingHeaderImg from '../../assets/images/pricing/pricing-top-header-background.webp'

const PricingPage:React.SFC = () => (
  <IndexLayout>
    <Page>
      <Container>
        <PricingHeader addHeaderBackground={PricingHeaderImg} />
        <PricingPagePricing />
        <AppStoreAdd />
      </Container>
    </Page>
  </IndexLayout>
)

export default PricingPage
