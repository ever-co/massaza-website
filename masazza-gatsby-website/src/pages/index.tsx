import * as React from 'react'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import TopContainer from '../components/homePageComponents/TopPage'
import HowItWorks from '../components/homePageComponents/HowItWorks'
import { AppStoreAdd, ExtendBuisnessAdd } from '../components/shared/Advertisements'
import HomePricing from '../components/homePageComponents/HomePricing'
import MostPopular from '../components/homePageComponents/MostPopular'


const IndexPage:React.SFC = () => (
  <IndexLayout>
    <Page>
      <TopContainer />
      <Container>
        <HowItWorks />
        <AppStoreAdd />
        <HomePricing />
        <ExtendBuisnessAdd />
        <MostPopular />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
