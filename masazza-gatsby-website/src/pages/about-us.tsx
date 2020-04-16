import * as React from 'react'
import { lineAdjStyles, appStoreAddStyles } from '../styles/componentStyles/about-us'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { AboutUsHeader } from '../components/shared/TopPictureHeader'

import AboutUsHeaderImg from '../../assets/images/about-us/about-us-top-background.webp'
import TheStory from '../components/aboutUsComponents/TheStory'
import { ExtendBuisnessAdd, AppStoreAdd } from '../components/shared/Advertisements'
import Guarantees from '../components/shared/Guarantees'
import PageLine from '../components/shared/PageLine'

import { useTranslation } from 'react-i18next'

const AboutUsPage: React.SFC = () => {
  const { t } = useTranslation()
  return (
    <IndexLayout>
      <Page>
        <AboutUsHeader headerBackground={AboutUsHeaderImg} />
        <Container>
          <PageLine addLineCss={lineAdjStyles.line} addHCss={lineAdjStyles.h}>
            {t('aboutUs.theStory.pageLineH')}
          </PageLine>
          <TheStory />
          <ExtendBuisnessAdd />
        </Container>
        <Guarantees />
        <Container>
          <AppStoreAdd addWrapperCss={appStoreAddStyles.wrapper} />
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default AboutUsPage
