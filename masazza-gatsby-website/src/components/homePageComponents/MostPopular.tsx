import * as React from 'react'
import { massageCardStyles, mostPopularStyles } from '../../styles/componentStyles/home'
import { MainStyledButton } from '../buttons/MainButtons'
import PageLine from '../shared/PageLine'

import { useTranslation } from 'react-i18next'
import { massageTypesImages } from '../../data/data'

const dict = require('../../../i18n/dictionary')

const MassageCard = (props: any) => {
  const { t } = useTranslation()
  return (
    <article className="massage-card col" css={massageCardStyles.massageCard}>
      <img src={props.MassageTypeImg} alt="Swedish Massage" css={massageCardStyles.img} />
      <h3 className="massage-card-title" css={massageCardStyles.h3}>
        {props.MassageCardTitle}
      </h3>
      <p css={massageCardStyles.paragraph}>{props.MassageCardDescr}</p>
      <MainStyledButton btnTxt={t('homePage.mostPopular.btn')} addCss={massageCardStyles.btn} />
    </article>
  )
}

const MostPopular = () => {
  const { t } = useTranslation()

  let currentLang = useTranslation().i18n.languages[0]
  const masageTypeData = dict.default[`${currentLang}`].translation.homePage.massageTypes
  return (
    <div className="types-wrapper" css={mostPopularStyles.wrapper}>
      <PageLine
        txtContent={t('homePage.mostPopular.lineH')}
        addHCss={mostPopularStyles.pageLine.h}
        addLineCss={mostPopularStyles.pageLine.line}
      />

      <h2 css={mostPopularStyles.h2}>{t('homePage.mostPopular.h2')}</h2>
      <div className="massage-cards-container row" css={mostPopularStyles.massageCardsContainer}>
        {masageTypeData.map((cardData: any, key: number) => {
          return (
            <MassageCard
              MassageTypeImg={`${massageTypesImages[key]}`}
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
