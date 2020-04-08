import * as React from 'react'
import { css } from '@emotion/core'
import { flex, colors } from '../../styles/variables'
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
      css={css`${flex.col}
    background: url('${MassageCardBackgroundImage}');
    background-repeat: no-repeat;
    background-position: center;
    width: 25%;
    min-height: 28em;
    margin: 2em;
    align-items: center;
    @media (max-width:1024px){
      width: 40%;
      min-height: 28em;
      margin: 1em 1.8em 1em;
    }
    @media (max-width:600px){
      width: 80%;
    }
    `}
    >
      <img
        src={props.MassageTypeImg}
        alt="Swedish Massage"
        css={css`
          width: 11em;
          margin: 2em auto 2em;
        `}
      />
      <h3
        className="massage-card-title"
        css={css`
          margin: 1em;
          color: #e87b68;
        `}
      >
        {props.MassageCardTitle}
      </h3>
      <p
        css={css`
          width: 75%;
          text-align: center;
          max-height: 4em;
          line-height: 20px;
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
        width: 80%;
        max-width: 80em;
        margin: 2em auto 0;
        background-position: center;
        background-repeat: repeat-y;
        background-size: 100%;
        @media (max-width: 1024px) {
          background: url(${MassageTypesWrapperTabletBackground}) center center no-repeat;
          background-repeat: repeat-y;
          width: 95%;
        }
        @media (max-width: 600px) {
          margin: 5em 0 0;
          background: none;
        }
      `}
    >
      <PageLine
        txtContent="TYPE OF MASSAGES"
        addHCss={`background:${colors.mainBackground};margin-top:-3em; @media(max-width:600px){margin:-2.45em 0;}`}
        addLineCss="height:65em"
      />

      <h2
        css={css`
          margin: 0 0 0 2em;
          font-size: 3rem;
          color: ${colors.primaryTitleColor};
          @media (max-width: 600px) {
            text-align: center;
            margin: 0;
          }
        `}
      >
        Most popular
      </h2>
      <div
        className="massage-cards-container row"
        css={css`
          ${flex.row};
          flex-flow: wrap;
          justify-content: center;
        `}
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
