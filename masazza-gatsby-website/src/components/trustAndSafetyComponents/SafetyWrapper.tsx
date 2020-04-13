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

import { useTranslation } from 'react-i18next'

const dict = require('../../../i18n/dictionary')

const SafetyArticle = (props: any) => (
  <article className="row" css={safetyArticleStyles.article}>
    <section className="num" css={safetyArticleStyles.num}>
      {props.num}
    </section>
    <section className="t-a-s-article-descr">
      <h3>{props.title} </h3>
      <p css={safetyArticleStyles.p}>{props.paragraph}</p>
    </section>
  </article>
)

const SafetyWrapper = (props: any) => {
  return (
    <div
      className="t-a-s row"
      css={css`
        ${safetyWrapperStyles.wrapper}
        ${props.addTASCss};
      `}
    >
      <PageLine
        txtContent={props.pageLineTxtContent}
        addLineCss={`${safetyWrapperPageLineStyles.line}
                  ${props.addLineCss}`}
        addHCss={` ${safetyWrapperPageLineStyles.h}
                  ${props.addLineHCss};`}
      />

      <div className="t-a-s-article-wrapper" css={safetyWrapperStyles.articleWrapper}>
        {props.data.map((d: any, key: any) => (
          <SafetyArticle num={key + 1} title={d.title} paragraph={d.paragraph} key={key} />
        ))}
      </div>

      <div
        className="t-a-s-img-wrapper t-a-s-client-img-wrapper col"
        css={css`
          ${safetyWrapperStyles.imgWrapper}
          ${props.addImgWrapperCss};
          background-repeat: no-repeat;
        `}
      >
        <img
          src={props.imgUrl}
          alt=""
          css={css`
            ${props.addImgCss}
          `}
        ></img>
      </div>
    </div>
  )
}

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
