import * as React from 'react'
import { css } from '@emotion/core'
import { flex } from '../../styles/variables'

import AppStoreBtns from '../buttons/AppStoreBtns'
import PageLine from '../shared/PageLine'

import TopBackgroundImg from '../../../assets/images/home/backgrounds/top-background.png'
import TopBackgroundMobileImg from '../../../assets/images/home/backgrounds/top-background-mobile.png'
import Container from '../Container'
const TopContainer = () => {
  return (
    <Container>
      <div
        css={css`
          ${flex.row};
          background: url(${TopBackgroundImg});
          background-size: 100%;
          background-position: 74%;
          background-repeat: no-repeat;
          margin: 0 auto 4em;
          width: 90%;
          max-width: 100em;
          @media screen and (min-width: 1100px) {
            min-height: 40em;
          }
          @media (max-width: 1280px) {
            width: 100%;
            background-size: 150% 100%;
            margin: 0 auto 3em;
          }
          @media (max-width: 1025px) {
            background-size: cover;
          }
          @media (max-width: 850px) {
            background-size: 100% 100%;
            background-position: top;
          }
          @media (max-width: 600px) {
            min-height: 100vh;
            background: url(${TopBackgroundMobileImg});
            background-repeat: no-repeat;
            background-size: 109% 100%;
            background-position: bottom;
            margin: 0 0 2em;
            flex-flow: column;
            justify-content: space-between;
          }
        `}
      >
        <PageLine
          txtContent="Massage. Home or Saloons"
          addLineCss="height:65em;top:1%; @media (min-width:1280px){top: 10%;};"
          addHCss="color:#fff; margin: -1.1em -.2em;@media(max-width:1024px){margin:-1em 0};  @media(max-width:600px){  margin: -2.1em -.2em;}"
        />
        <header
          css={css`
            margin: auto 10em;
            width: 45%;
            color: #fff;
            @media (max-width: 1280px) {
              margin: 4em 7em;
              width: 30em;
            }
            @media (max-width: 1025px) {
              background-size: cover;
            }
            @media (max-width: 850px) {
              margin: 4em;
            }
            @media (max-width: 600px) {
              margin: 5em auto;
              width: 90%;
            }
          `}
        >
          <h1
            css={css`
              font-size: 2rem;
              color: #fff;
              @media (max-width: 600px) {
                font-size: 1.8rem;
              }
              @media (max-width: 360px) {
                font-size: 1.5rem;
              }
            `}
          >
            Find a Massage Therapist close to you!
          </h1>
          <p
            css={css`
              font-size: 1.3rem;
              @media (max-width: 600px) {
                font-size: 1rem;
              }
            `}
          >
            Select between different saloons or therapists and select the right one you need.
            <br />
            It’s easy Just download the App and start searching!
          </p>
          <AppStoreBtns
            addCssBtn=" @media(max-width:600px){display:none}"
            addStoreBtnWrapperCss=" @media (max-width:600px) {
             flex-flow:column;
            width: 90%;
            margin: 6em 0;
           }"
          />
        </header>
        <AppStoreBtns
          addCssBtn="@media(min-width:600px){display:none} @media(max-width:600px){height: 4em;    width: 35%;}"
          addStoreBtnWrapperCss=" @media (max-width:600px) {
             flex-flow:column;
            width: 90%;
            margin: 6em 0;
           }"
        />
      </div>
    </Container>
  )
}

export default TopContainer
