import * as React from 'react'
import FooterTop from './footerComponents/FooterTop'
import FooterMiddle from './footerComponents/FooterMiddle'
import FooterBottom from './footerComponents/FooterBottom'

const Footer:React.SFC = () => {
  return (
    <footer>
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </footer>
  )
}
export default Footer
