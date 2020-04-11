import * as React from 'react'
import { css } from '@emotion/core'
import { flex } from '../../styles/variables'
import { guaranteesStyles,guaranteesPageLine } from '../../styles/componentStyles/shared'

import QualifiedIcon from '../../../assets/icons/about-us/qualified-icon.svg'
import CheckedIcon from '../../../assets/icons/about-us/background-checked-icon.svg'
import SecurePaymentIcon from '../../../assets/icons/about-us/secure-payment-icon.svg'
import ScamPreventionIcon from '../../../assets/icons/about-us/scam-prevention-icon.svg'
import HealthIcon from '../../../assets/icons/about-us/health-icon.svg'
import GuaranteesBackground from '../../../assets/images/about-us/guaranties-background.png'

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
      ${guaranteesStyles.guarantee}
    `}
  >
    <img
      src={props.imgUrl}
      alt=""
      css={css`
        ${guaranteesStyles.guaranteeImg}
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
     ${guaranteesStyles.guarantees}
    `}
  >
    <Container>
      <PageLine
        txtContent="WE GARANTIESE"
        addLineCss={guaranteesPageLine.line}
        addHCss={guaranteesPageLine.h}
      />
      <div
        className="guaranties-wrapper row"
        css={css`
          background: url(${GuaranteesBackground});
          ${guaranteesStyles.guaranteesWrapper}
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
