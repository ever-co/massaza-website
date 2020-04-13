import * as React from 'react'
import { guaranteesStyles, guaranteesPageLine } from '../../styles/componentStyles/shared'


import PageLine from './PageLine'
import Container from '../Container'

import { useTranslation } from 'react-i18next'
import { guaranteesImages } from '../../data/data'
const dict = require('../../../i18n/dictionary')

const Guarantee = (props: any) => (
  <article className="guarantie row" css={guaranteesStyles.guarantee}>
    <img src={props.imgUrl} alt="" css={guaranteesStyles.guaranteeImg} />
    <div className="guarantie-descr">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  </article>
)

const Guarantees = () => {
  const { t } = useTranslation()
  let currentLang = useTranslation().i18n.languages[0]
  const guaranteesData = dict.default[`${currentLang}`].translation.guaranteesData
  return (
    <div className="guaranties" css={guaranteesStyles.guarantees}>
      <Container>
        <PageLine txtContent={t('guaranteesLineH')} addLineCss={guaranteesPageLine.line} addHCss={guaranteesPageLine.h} />
        <div className="guaranties-wrapper row" css={guaranteesStyles.guaranteesWrapper}>
          {guaranteesData.map((g, key) => (
            <Guarantee title={g.title} key={key} description={g.description} imgUrl={guaranteesImages[key]} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Guarantees
