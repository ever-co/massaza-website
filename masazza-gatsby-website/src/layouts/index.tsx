import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import i18n from '../../i18n/initI18n'
import { useTranslation } from 'react-i18next'
import 'modern-normalize'
import '../styles/normalize'
import SEO from '../components/seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => {
  const { t } = useTranslation()
  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={(data: StaticQueryProps) => (
        <LayoutRoot>
          <SEO
            title={t('title')}
            meta={[
              { name: 'title', content: t('title') },
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: data.site.siteMetadata.keywords }
            ]}
            lang={i18n.languages[0]}
          />
          <Header />
          <LayoutMain>{children}</LayoutMain>
          <Footer />
        </LayoutRoot>
      )}
    />
  )
}

export default IndexLayout
