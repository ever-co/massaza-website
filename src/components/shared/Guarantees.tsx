import * as React from 'react'
import { guaranteesStyles, guaranteesPageLine } from '../../styles/componentStyles/shared'
import PageLine from './PageLine'
import Container from '../Container'
import { useTranslation } from 'react-i18next'
import { guaranteesImages } from '../../data/data'
import { DataTypes } from '../../data/data'

const dict = require('../../../i18n/dictionary')
interface IGuaranteeProps {
  imgUrl: string
  title: string
  description: string
  key: number
}

const Guarantee: React.SFC<IGuaranteeProps> = ({ imgUrl, title, description }) => (
  <article className="guarantie row" css={guaranteesStyles.guarantee}>
    <img src={imgUrl} alt="guarantee icon" css={guaranteesStyles.guaranteeImg} />
    <div className="guarantie-descr">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </article>
)

const Guarantees: React.SFC = () => {
  const { t } = useTranslation()
  let currentLang = useTranslation().i18n.languages[0]
  const guaranteesData = dict.default[`${currentLang}`].translation.guaranteesData
  return (
    <div className="guaranties" css={guaranteesStyles.guarantees}>
      <Container>
        <PageLine addLineCss={guaranteesPageLine.line} addHCss={guaranteesPageLine.h}>
          {t('guaranteesLineH')}
        </PageLine>
        <div className="guaranties-wrapper row" css={guaranteesStyles.guaranteesWrapper}>
          {guaranteesData.map((g: DataTypes, key: number) => (
            <Guarantee title={g.title} key={key} description={g.description} imgUrl={guaranteesImages[key]} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Guarantees
