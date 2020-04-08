import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { AboutUsHeader } from '../components/shared/TopPictureHeader'

import AboutUsHeaderImg from '../../assets/images/about-us/about-us-top-background.png'
import TheStory from '../components/aboutUsComponents/TheStory'
import { ExtendBuisnessAdd, AppStoreAdd } from '../components/shared/Advertisements'
import Guarantees from '../components/shared/Guarantees'
import PageLine from '../components/shared/PageLine'

const AboutUsPage = () => (
  <IndexLayout>
    <Page>
      <AboutUsHeader headerBackground={AboutUsHeaderImg} />
      <Container>
        <PageLine
          txtContent="THE STORY"
          addLineCss=" height: 90em;
                       z-index: 1;
                       @media (max-width:1024px){height: 128em;}"
          addHCss="margin: -1em;
                  background: #fdfaf9;
                  font-weight: bold;
                  font-size: .8rem;
                  @media(max-width:1024px){
                    font-size: 1.1rem;
                    top:1%;
                    margin:-3em 0;
                  }"
        />
        <TheStory />
        <ExtendBuisnessAdd />
      </Container>
      <Guarantees />
      <Container>
        <AppStoreAdd addWrapperCss="margin-top:3em; @media(max-width:1024px){margin: 2em auto;}" />
      </Container>
    </Page>
  </IndexLayout>
)

export default AboutUsPage
