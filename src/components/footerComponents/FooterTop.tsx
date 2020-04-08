import * as React from 'react'
import { css } from '@emotion/core'

import TopBackgroundImg from '../../../assets/images/global/footer-top-background.png'
import TopBackgroundImgMobile from '../../../assets/images/global/footer-top-mobile-background.png'

import AppStoreBtns from '../buttons/AppStoreBtns'

const FooterTop = () => (
  <div
    css={css`
      display: flex;
      flex-flow: column;
      background: url(${TopBackgroundImg});
      min-height: 25rem;
      background-size: cover;
      background-repeat: no-repeat;
      @media (max-width: 1024px) {
        background-position: 65%;
      }
      @media (max-width: 600px) {
        background: url(${TopBackgroundImgMobile});
        background-repeat: no-repeat;
        background-size: 100% 101%;
      }
    `}
  >
    <div
      css={css`
        width: 45%;
        margin: auto;
        @media (max-width: 1024px) {
          margin: 3em 5em;
        }
        @media (max-width: 600px) {
          width: 95%;
          margin: 3em auto 0;
        }
      `}
    >
      <h1
        css={css`
          color: #ffffff;
          margin: 2em 0 0;
          &::before {
            content: url('../../../assets/icons/global/footer-leaves.png');
            width: 1em;
            margin: -1em;
            transform: translate(-1em, 1em);
            display: block;
          }
          @media (max-width: 600px) {
            font-size: 1.7rem;
            margin: 0;
            text-align: center;
          }
        `}
      >
        We’re helping people <br />
        Find the best Therapist <br />
        in the city.
      </h1>
      <AppStoreBtns
        addStoreBtnWrapperCss={`
      @media (max-width:1024px){
        flex-flow: column;
        margin: 0 0 7em;
      }
      @media (max-width:600px){
        margin: -2em auto 7em;
      }`}
        addCssBtn="
         height: inherit;
          width: 20%;
          margin: 0 1em 0 0;
          @media (max-width:1024px){
            width: 45%;
            height: 6em;
          }
          @media (max-width:600px){
            margin: auto;
            width: 50%;
            height: 5em;
          }
          "
      />
    </div>
  </div>
)

export default FooterTop
