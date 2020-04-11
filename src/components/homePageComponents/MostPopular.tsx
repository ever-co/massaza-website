import * as React from 'react'
import { css } from '@emotion/core'
import {  colors } from '../../styles/variables'
import { massageCardStyles, mostPopularStyles } from '../../styles/componentStyles/home'
import { MainStyledButton } from '../buttons/MainButtons'
import PageLine from '../shared/PageLine'

import MassageTypesWrapperBackground from '../../../assets/images/home/backgrounds/small-background.png'
import MassageTypesWrapperTabletBackground from '../../../assets/images/home/backgrounds/small-background-tablet.png'
import MassageCardBackgroundImage from '../../../assets/images/home/massage-card-background.svg'

import SwedishImg from '../../../assets/images/home/swedish-massage.png'
import DeppTissueImg from '../../../assets/images/home/deep-tissue.png'
import SportsImg from '../../../assets/images/home/sports.png'
import PrenatalImg from '../../../assets/images/home/prenatal.png'
import CouplesImg from '../../../assets/images/home/couples.png'
import WorkImg from '../../../assets/images/home/massage.png'

let MasageTypeData = [
  {
    title: 'Swedish',
    imgUrl: SwedishImg,
    description: 'Long, gliding strokes, kneading and circular movements.'
  },
  {
    title: 'Deep Tissue',
    imgUrl: DeppTissueImg,
    description: 'Focused stretching improves flexibility and muscle recovery.'
  },
  {
    title: 'Sports',
    imgUrl: SportsImg,
    description: 'Focused stretching improves flexibility and muscle recovery'
  },
  {
    title: 'Prenatal',
    imgUrl: PrenatalImg,
    description: 'Gentle, nurturing movements to promote wellness during pregnancy.'
  },
  {
    title: 'Couples Massage',
    imgUrl: CouplesImg,
    description: 'Share the relaxation with someone you care about. Back-to-back sessions available.'
  },
  {
    title: 'Massage at Work',
    imgUrl: WorkImg,
    description: 'Decrease stress & improve productivity with in-office massages'
  }
]

const MassageCard = (props: any) => {
  return (
    <article
      className="massage-card col"
      css={css`
      background: url('${MassageCardBackgroundImage}');
      ${massageCardStyles.massageCard}
    `}
    >
      <img
        src={props.MassageTypeImg}
        alt="Swedish Massage"
        css={css`
          ${massageCardStyles.img}
        `}
      />
      <h3
        className="massage-card-title"
        css={css`
          ${massageCardStyles.h3}
        `}
      >
        {props.MassageCardTitle}
      </h3>
      <p
        css={css`
          ${massageCardStyles.paragraph}
        `}
      >
        {props.MassageCardDescr}
      </p>
      <MainStyledButton btnTxt="More info" background={colors.brandSecondary} addCss="height: auto;" />
    </article>
  )
}

const MostPopular = (props: any) => {
  return (
    <div
      className="types-wrapper"
      css={css`
        background: url(${MassageTypesWrapperBackground});
        ${mostPopularStyles.wrapper}
        @media (max-width: 1024px) {
          background: url(${MassageTypesWrapperTabletBackground}) center center no-repeat;
          ${mostPopularStyles.wrapperTablet}
        }
      `}
    >
      <PageLine
        txtContent="TYPE OF MASSAGES"
        addHCss={`background:${colors.mainBackground};margin-top:-3em; @media(max-width:600px){margin:-2.45em 0;}`}
        addLineCss="height:65em"
      />

      <h2
        css={css`${mostPopularStyles.h2}`}
      >
        Most popular
      </h2>
      <div
        className="massage-cards-container row"
        css={css`${mostPopularStyles.massageCardsContainer}`}
      >
        {MasageTypeData.map((cardData: any, key: number) => {
          return (
            <MassageCard
              MassageTypeImg={`${cardData.imgUrl}`}
              MassageCardTitle={cardData.title}
              MassageCardDescr={cardData.description}
              key={key}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MostPopular
