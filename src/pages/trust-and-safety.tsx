import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { TrustAndSafetyHeader } from '../components/shared/TopPictureHeader'
import Guarantees from '../components/shared/Guarantees'
import { ClientSafety, TherapistSafety } from '../components/trustAndSafetyComponents/SafetyWrapper'
import { AppStoreAdd, ExtendBuisnessAdd } from '../components/shared/Advertisements'

import TrustAndSafetyHeaderImg from '../../assets/images/trust-and-safety/t-a-s-top-background.png'

const AboutUsPage = () => (
  <IndexLayout>
    <Page>
      <TrustAndSafetyHeader headerBackground={TrustAndSafetyHeaderImg} />
      <Guarantees />
      <Container>
        <ClientSafety />
        <AppStoreAdd />
        <TherapistSafety />
        <ExtendBuisnessAdd />
      </Container>
    </Page>
  </IndexLayout>
)

export default AboutUsPage
