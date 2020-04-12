import * as React from 'react'
import FooterTop from './footerComponents/FooterTop'
import FooterMiddle from './footerComponents/FooterMiddle'
import FooterBottom from './footerComponents/FooterBottom'
import LanguageSwitch from '../components/LanguageSwitch'

const Footer = () => {
  return (
    <footer>
      <FooterTop />
      <FooterMiddle />
      <LanguageSwitch/>
      <FooterBottom />
    </footer>
  )
}
export default Footer
