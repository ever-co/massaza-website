import * as React from 'react'
import { css } from '@emotion/core'

import QualifiedIcon from '../../../assets/icons/about-us/qualified-icon.svg'
import CheckedIcon from '../../../assets/icons/about-us/background-checked-icon.svg'
import SecurePaymentIcon from '../../../assets/icons/about-us/secure-payment-icon.svg'
import ScamPreventionIcon from '../../../assets/icons/about-us/scam-prevention-icon.svg'
import HealthIcon from '../../../assets/icons/about-us/health-icon.svg'
import GuaranteesBackground from '../../../assets/images/about-us/guaranties-background.png'

import { flex } from '../../styles/variables'
import PageLine from './PageLine'
import Container from '../Container'

const guaranteeData = [
  {
    title: 'Qualified',
    imgUrl: QualifiedIcon,
    description: 'All 11,000+ therapists have completed hundreds of hours of massage training and are fully licensed and certified.'
  },
  {
    title: 'Background Checked',
    imgUrl: CheckedIcon,
    description:
      'We care about the safety of our clients and therapists. That’s why we verify clients’ information before every massage and conduct annual background checks on all therapists.'
  },
  {
    title: 'Secure Payment',
    imgUrl: SecurePaymentIcon,
    description:
      'Our secure platform ensures your money gets to the therapist—that’s why we always ask you to pay through Soothe to guarantee you a receipt and a protected transfer of funds.'
  },
  {
    title: 'Scam Prevention',
    imgUrl: ScamPreventionIcon,
    description:
      'By using Soothe from booking to post-massage transaction, we’re able to ensure a safe and secure experience from beginning to end. That’s why we always ask you to pay and communicate directly through the Soothe app.'
  },
  {
    title: 'Health and Cleanliness',
    imgUrl: HealthIcon,
    description:
      'By using Soothe from booking to post-massage transaction, we’re able to ensure a safe and secure experience from beginning to end. That’s why we always ask you to pay and communicate directly through the Soothe app.'
  }
]

const Guarantee = (props: any) => (
  <article
    className="guarantie row"
    key={props.key}
    css={css`
      ${flex.row};
      width: 40%;
      margin: 1em 0;
      @media (max-width: 1024px) {
        flex-flow: column;
        width: 45%;
      }
      @media (max-width: 600px) {
        width: 100%;
      }
    `}
  >
    <img
      src={props.imgUrl}
      alt=""
      css={css`
        width: 100%;
        max-width: 8em;
        margin: 0 1em;
        @media (max-width: 1024px) {
          max-width: 5em;
        }
      `}
    />
    <div className="guarantie-descr">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  </article>
)

const Guarantees = () => (
  <div
    className="guaranties"
    css={css`
      background: #97515d;
      color: #ffffff;
      padding: 2em 0 0;
    `}
  >
    <Container>
      <PageLine
        txtContent="WE GARANTIESE"
        addLineCss="height:70em"
        addHCss="background:#97515D; color:#F9B19F; font-weight:500;font-size:.9rem; position:relative; z-index:5; margin:-2em;
       @media(max-width:1024px){margin:-2em -1em; };
       @media(max-width:600px){    margin: -2em 0; font-size: 1rem;}"
      />
      <div
        className="guaranties-wrapper row"
        css={css`
          ${flex.row};
          background: url(${GuaranteesBackground});
          background-repeat: no-repeat;
          background-position: 100% 25em;
          flex-flow: wrap;
          width: 80%;
          max-width: 80em;
          margin: auto;
          justify-content: space-between;
          @media (max-width: 1024px) {
            margin: 1em auto;
            width: 90%;
            background-position: 100% 35em;
          }
          @media (max-width: 600px) {
            background: none;
          }
        `}
      >
        {guaranteeData.map((g, key) => (
          <Guarantee key={key} title={g.title} description={g.description} imgUrl={g.imgUrl} />
        ))}
      </div>
    </Container>
  </div>
)

export default Guarantees
