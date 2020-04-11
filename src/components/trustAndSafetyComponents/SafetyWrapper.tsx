import * as React from 'react'
import { css } from '@emotion/core'

import PageLine from '../shared/PageLine'
import {safetyArticleStyles,safetyWrapperStyles, clientSafetyStyles, therapistSafetyStyles,safetyWrapperPageLineStyles } from '../../styles/componentStyles/trustAndSafety'

import ClientSafetyImage from '../../../assets/images/trust-and-safety/client-safety-img.png'
import ClientSafetyBackgroundTabletImage from '../../../assets/images/trust-and-safety/client-safety-background-tablet.png'
import TherapistSafetyImage from '../../../assets/images/trust-and-safety/therapist-safety-img.png'
import TherapistSafetyBackground from '../../../assets/images/trust-and-safety/therapist-safety-background.png'
import TherapistSafetyBackgroundTablet from '../../../assets/images/trust-and-safety/therapist-safety-background-tablet.png'

const ClienSafetyData = [
  {
    num: 1,
    title: 'Communicate with your therapist',
    paragraph:
      ' Let your therapist know what level of pressure you prefer, as well as any tense areas to focus on. Talk with your therapist even after the massage has begun to better tailor the experience to your needs. If you are pregnant, confirm with your physician that you are eligible to receive a prenatal massage.'
  },
  {
    num: 2,
    title: 'Stop if necessary',
    paragraph:
      'If you feel uncomfortable during the massage and wish to stop, simply communicate this to your therapist by saying, “I’d like to discontinue my massage.”'
  },
  {
    num: 3,
    title: 'Dress to your comfort level',
    paragraph:
      'Feel free to undress to your level of comfort whether you prefer to be fully clothed, completely undressed or anything in between. Soothe therapists are trained to properly cover your body to protect your modesty.'
  },
  {
    num: 4,
    title: 'Stay within the app',
    paragraph:
      ' Submitting payment and communicating with your therapist through the Soothe app protects your information and theirs. You should never wire money, provide credit card information, or otherwise pay a massage therapist directly. If you are asked to do so, please report it to us immediately.'
  }
]

const TherapistSafetyData = [
  {
    num: 1,
    title: 'Perform a thorough intake',
    paragraph:
      'Review the expectations for the massage beforehand by confirming the massage type, duration and areas that require extra attention or would like to be avoided.'
  },
  {
    num: 2,
    title: 'Stop if necessary',
    paragraph:
      'If you feel uncomfortable prior to the massage or wish to discontinue at any time, you may always refuse to enter the client’s home or discontinue a massage midway through. You will never be negatively impacted for leaving a Massaza appointment that you feel is unsafe.'
  },
  {
    num: 3,
    title: 'Secure client communication and stay connected',
    paragraph:
      'When you contact your client through the app, Massaza protects your contact information by acting as a bridge between you and the client. Our check-in, check-out feature is designed to protect you during every appointment. If you fail to check out after your appointment, we’ll give you a call to make sure you’re okay.'
  },
  {
    num: 4,
    title: 'Report unsatisfactory experiences',
    paragraph:
      'If a Massaza appointment makes you feel uncomfortable in any way, contact Therapist Success. We continuously review reports and suspend suspicious clients in an effort to prevent future instances from taking place.'
  }
]

const SafetyArticle = (props: any) => (
  <article
    key={props.key}
    className="row"
    css={css`
     ${safetyArticleStyles.article}
    `}
  >
    <section
      className="num"
      css={css`
        ${safetyArticleStyles.num}
      `}
    >
      {props.num}
    </section>
    <section className="t-a-s-article-descr">
      <h3>{props.title} </h3>
      <p
        css={css`
          font-weight: 300;
        `}
      >
        {props.paragraph}
      </p>
    </section>
  </article>
)

const SafetyWrapper = (props: any) => (
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

    <div
      className="t-a-s-article-wrapper"
      css={css`
       ${safetyWrapperStyles.articleWrapper}
      `}
    >
      {props.data.map((d: any, key: any) => (
        <SafetyArticle num={d.num} title={d.title} paragraph={d.paragraph} key={key} />
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

const ClientSafety = () => (
  <SafetyWrapper
    data={ClienSafetyData}
    imgUrl={ClientSafetyImage}
    addImgWrapperCss={`
      ${clientSafetyStyles.imgWrapper}
      @media(max-width:1024px){
       background: url(${ClientSafetyBackgroundTabletImage});
      }`}
    addImgCss={clientSafetyStyles.img}
    pageLineTxtContent="Client SAFETY"
    addLineCss={clientSafetyStyles.lineCss}
    addLineHCss={clientSafetyStyles.lineHCss}
  />
)

const TherapistSafety = () => (
  <SafetyWrapper
    data={TherapistSafetyData}
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
    pageLineTxtContent="THERAPIST SAFETY "
    addLineCss={therapistSafetyStyles.addLineCss}
    addLineHCss={therapistSafetyStyles.addLineHCss}
  />
)

export { ClientSafety, TherapistSafety }
