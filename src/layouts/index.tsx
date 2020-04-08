import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import Footer from '../components/Footer'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      navLinks: Array<string>
      createAccountBtn: string
      becomeTherapistBtn: string
      isOppened: boolean
      description: string
      keywords: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            navLinks
            isOppened
            createAccountBtn
            becomeTherapistBtn
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          // title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
        />
        <Header
          navLinks={data.site.siteMetadata.navLinks}
          createAccountBtn={data.site.siteMetadata.createAccountBtn}
          becomeTherapistBtn={data.site.siteMetadata.becomeTherapistBtn}
          isOppened={data.site.siteMetadata.isOppened}
        />
        <LayoutMain>{children}</LayoutMain>
        <Footer />
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
