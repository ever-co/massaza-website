import * as React from 'react'
import { css } from '@emotion/core'

import PageLine from '../shared/PageLine'
import { flex } from '../../styles/variables'

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
      color: #97515d;
      margin: 1em auto;
      ${flex.row};
      align-items: center;
      @media (max-width: 600px) {
        flex-flow: column;
        align-items: flex-start;
      }
    `}
  >
    <section
      className="num"
      css={css`
        border: 2px solid #f7d4cd;
        border-radius: 50%;
        height: fit-content;
        padding: 0 1em;
        text-align: center;
        margin: 0 2em;
        font-weight: bold;
        width: 1em;
        @media (max-width: 600px) {
          margin: 0 0 1em;
        }
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
      ${flex.row};
      width: 80%;
      max-width: 90em;
      margin: 3em auto;
      @media (max-width: 1024px) {
        flex-flow: column;
        margin: 2em auto 0;
      }
      @media (max-width: 600px) {
        width: 95%;
      }
      ${props.addTASCss};
    `}
  >
    <PageLine
      txtContent={props.pageLineTxtContent}
      addLineCss={`height: 65em;
                  ${props.addLineCss}`}
      addHCss={` background: #fdfaf9;
                 z-index: 5;
                 height: fit-content;
                 margin: -2em;
                 font-weight: bold;
                 font-size: .8rem;
                 @media (max-width:1024px){
                   margin: 0 0 0 -1em;
                  }
                  @media (max-width:600px){
                    margin: 0;
                  }
                  ${props.addLineHCss};`}
    />

    <div
      className="t-a-s-article-wrapper"
      css={css`
        width: 45%;
        @media (max-width: 1024px) {
          width: 90%;
          margin: auto;
        }
      `}
    >
      {props.data.map((d: any, key: any) => (
        <SafetyArticle num={d.num} title={d.title} paragraph={d.paragraph} key={key} />
      ))}
    </div>

    <div
      className="t-a-s-img-wrapper t-a-s-client-img-wrapper col"
      css={css`
        ${flex.col};
        width: 50%;
        justify-content: flex-end;
        @media (max-width: 1024px) {
          width: 90%;
          margin: auto;
          background-repeat: no-repeat;
          background-position: center;
        }
        @media (max-width: 600px) {
          background-size: 100% 50%;
          background-position: top;
        }
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
                        align-items: flex-end;
                        @media(max-width:1024px){
                          align-items: center;
                          margin: 0 0 2em;
                          background: url(${ClientSafetyBackgroundTabletImage});
                        }`}
    addImgCss="width:80%; @media(max-width:1024px){width:55%}; @media(max-width:600px){width:80%}"
    pageLineTxtContent="Client SAFETY"
    addLineCss="height:75em;  @media (max-width:1024px){height: 120em;}"
    addLineHCss="@media(max-width:600px){margin: -2em 0;} "
  />
)

const TherapistSafety = () => (
  <SafetyWrapper
    data={TherapistSafetyData}
    addTASCss="flex-flow: row-reverse; @media(max-width:1024px){flex-flow:column-reverse;}"
    imgUrl={TherapistSafetyImage}
    addImgWrapperCss={`background: url(${TherapistSafetyBackground});
                  background-repeat: no-repeat;
                  @media(max-width:1024px){
                    background: url(${TherapistSafetyBackgroundTablet});
                    background-repeat: no-repeat;
                  }`}
    addImgCss="width:55%; margin: 0 auto; @media(max-width:1024px){width:30%; margin:2em;} @media(max-width:600px){width:50%}"
    pageLineTxtContent="THERAPIST SAFETY "
    addLineCss="@media(max-width:1024px){height: 95em;} @media(max-width:600px){ bottom: 6%;}"
    addLineHCss="@media(max-width:600px){top:-6%}"
  />
)

export { ClientSafety, TherapistSafety }
