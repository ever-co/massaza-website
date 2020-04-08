import * as React from 'react'
import { css } from '@emotion/core'
import { flex } from '../../styles/variables'
import Container from '../Container'

const TopPictureHeader = (props: any) => {
  return (
    <header
      className="header-with-img about-us-header row"
      css={css`
        ${flex.row};
        width: 90%;
        max-width: 100em;
        min-height: 25em;
        margin: 2em auto;
        background: url(${props.addHeaderBackground});

        @media (max-width: 1024px) {
          width: 100%;
          margin: 0;
          min-height: 15em;
          background-size: cover;
          background-repeat: no-repeat;
        }
        @media (max-width: 600px) {
          margin: 0;
        }
      `}
    >
      <Container>
        <div
          className="header-container col"
          css={css`
            width: 100%;
            justify-content: center;
            color: #ffffff;
            justify-content: center;
            height: inherit;
            ${flex.col};
            ${props.addHContainerCss}
          `}
        >
          <div
            className="header-txt-container"
            css={css`
              ${props.addHTxtContainerCss}
            `}
          >
            <h1
              css={css`
                @media (max-width: 600px) {
                  width: 80%;
                  margin: auto;
                  font-size: 1.5rem;
                  line-height: 2rem;
                  letter-spacing: 1px;
                }
                ${props.addHCss}
              `}
            >
              {props.topPicHeaderTxt} <br />
              {props.bottomPicHeaderTxt}
            </h1>
            <p
              css={css`
                ${props.addHeaderParagraphCss}
              `}
            >
              {props.headerParagraph}
            </p>
          </div>
        </div>
      </Container>
    </header>
  )
}

const AboutUsHeader = (props: any) => (
  <TopPictureHeader
    topPicHeaderTxt=" We’re helping people "
    bottomPicHeaderTxt="Find the best massage saloon and theapists in the city."
    addHCss="width: 15em; margin: 0 4em 0; letter-spacing: 2px; "
    addHeaderBackground={props.headerBackground}
    
  />
)

const TrustAndSafetyHeader = (props: any) => (
  <TopPictureHeader
    topPicHeaderTxt=" Your Trust and Safety is out priority"
    headerParagraph="Every month, therapists on the Soothe network complete thousands of massages across 70+ cities and four countries. We’re proud to be the world’s leading on-demand massage platform that lets you choose the time and place of your massage, and even the preferred gender of your therapist. We take extra steps to ensure that every Soothe massage is a safe and relaxing experience."
    addHTxtContainerCss=" margin: 5em auto; width: 80%;  @media(max-width:600px){width:95%; margin:2em auto 1em}"
    addHCss="  font-size: 2.5rem; line-height: 3rem; width: 10em; @media(max-width:600px){margin: 0 0 .5em}"
    addHeaderParagraphCss=" width: 50em; max-width:100%;"
    addHeaderBackground={props.headerBackground}
  />
)

const PricingHeader = (props: any) => (
  <TopPictureHeader
    topPicHeaderTxt="Pricing in your location"
    headerParagraph="There are no hidden costs or additional fees. Choose your preferred treatment type below"
    addHContainerCss=" background: rgba(234, 209, 141, .5);"
    addHTxtContainerCss=" margin: 0 4em;width:50%; @media(max-width:600px){width: 95%; margin: 3em auto;}"
    addHCss="font-size: 3rem; @media (max-width:600px){ line-height: 1; width: 100%; margin: .4em 0; font-size: 2rem;"
    addHeaderParagraphCss="  font-size: 1.2rem; line-height: 1.8rem;"
    addHeaderBackground={props.addHeaderBackground}
  />
)

export { AboutUsHeader, TrustAndSafetyHeader, PricingHeader }
