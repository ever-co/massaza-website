import * as React from 'react'
import { css } from '@emotion/core'

import PageLine from '../shared/PageLine'
import {
  safetyArticleStyles,
  safetyWrapperStyles,
  clientSafetyStyles,
  therapistSafetyStyles,
  safetyWrapperPageLineStyles
} from '../../styles/componentStyles/trustAndSafety'

import ClientSafetyImage from '../../../assets/images/trust-and-safety/client-safety-img.png'
import ClientSafetyBackgroundTabletImage from '../../../assets/images/trust-and-safety/client-safety-background-tablet.png'
import TherapistSafetyImage from '../../../assets/images/trust-and-safety/therapist-safety-img.png'
import TherapistSafetyBackground from '../../../assets/images/trust-and-safety/therapist-safety-background.png'
import TherapistSafetyBackgroundTablet from '../../../assets/images/trust-and-safety/therapist-safety-background-tablet.png'
import {DataTypes} from '../../data/data'
import { useTranslation } from 'react-i18next'

const dict = require('../../../i18n/dictionary')

interface ISafetyArticleProps{
  num:number
  title: string
  paragraph: string

}

const SafetyArticle: React.SFC<ISafetyArticleProps> = ({num, title, paragraph}) => (
  <article className="row" css={safetyArticleStyles.article}>
    <section className="num" css={safetyArticleStyles.num}>
      {num}
    </section>
    <section className="t-a-s-article-descr">
      <h3>{title} </h3>
      <p css={safetyArticleStyles.p}>{paragraph}</p>
    </section>
  </article>
)

interface ISafetyWrapperProps{
  addTASCss?: string
  pageLineTxtContent: string
  addLineHCss: string
  addLineCss: string
  imgUrl: string
  addImgCss: string
  addImgWrapperCss: string
  data:Array<DataTypes>
}

const SafetyWrapper:React.SFC<ISafetyWrapperProps> = ({data,addLineCss,addImgWrapperCss,addImgCss,imgUrl,addLineHCss,pageLineTxtContent,addTASCss}) => (
    <div
      className="t-a-s row"
      css={css`
        ${safetyWrapperStyles.wrapper}
        ${addTASCss};
      `}
    >
      <PageLine
        txtContent={pageLineTxtContent}
        addLineCss={`${safetyWrapperPageLineStyles.line}
                  ${addLineCss}`}
        addHCss={` ${safetyWrapperPageLineStyles.h}
                  ${addLineHCss};`}
      />

      <div className="t-a-s-article-wrapper" css={safetyWrapperStyles.articleWrapper}>
        {data.map((d: any, key: any) => (
          <SafetyArticle num={key + 1} title={d.title} paragraph={d.paragraph} key={key} />
        ))}
      </div>

      <div
        className="t-a-s-img-wrapper t-a-s-client-img-wrapper col"
        css={css`
          ${safetyWrapperStyles.imgWrapper}
          ${addImgWrapperCss};
          background-repeat: no-repeat;
        `}
      >
        <img
          src={imgUrl}
          alt=""
          css={css`
            ${addImgCss}
          `}
        ></img>
      </div>
    </div>
  )

const ClientSafety = () => {
  const { t } = useTranslation()
  let currentLang = useTranslation().i18n.languages[0]
  const clientSafetyData = dict.default[`${currentLang}`].translation.trustAndSafety.clientSafetyData

  return (
    <SafetyWrapper
      data={clientSafetyData}
      imgUrl={ClientSafetyImage}
      addImgWrapperCss={`
      ${clientSafetyStyles.imgWrapper}
      @media(max-width:1024px){
       background: url(${ClientSafetyBackgroundTabletImage});
      }`}
      addImgCss={clientSafetyStyles.img}
      pageLineTxtContent={t('trustAndSafety.clientSafetyLineH')}
      addLineCss={clientSafetyStyles.lineCss}
      addLineHCss={clientSafetyStyles.lineHCss}
    />
  )
}

const TherapistSafety = () => {
  const { t } = useTranslation()
  let currentLang = useTranslation().i18n.languages[0]
  const therapistSafetyData = dict.default[`${currentLang}`].translation.trustAndSafety.therapistSafetyData

  return (
    <SafetyWrapper
      data={therapistSafetyData}
      addTASCss={therapistSafetyStyles.addWrapperCss}
      imgUrl={TherapistSafetyImage}
      addImgWrapperCss={`
    background: url(${TherapistSafetyBackground});
    background-repeat: no-repeat;
    @media(max-width:1024px){
      background: url(${TherapistSafetyBackgroundTablet});
      background-repeat: no-repeat;
    }`}
      addImgCss={therapistSafetyStyles.addImgCSs}
      pageLineTxtContent={t('trustAndSafety.therapistSafetyLineH')}
      addLineCss={therapistSafetyStyles.addLineCss}
      addLineHCss={therapistSafetyStyles.addLineHCss}
    />
  )
}

export { ClientSafety, TherapistSafety }
