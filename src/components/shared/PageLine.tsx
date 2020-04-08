import * as React from 'react'
import { css } from '@emotion/core'

const PageLine = (props: any) => (
  <div
    css={css`
      border-left: 2px solid #f9b19f;
      position: absolute;
      left: 10%;
      @media (min-width: 2300px) {
        left: 20%;
      }
      @media (min-width: 2100px) and (max-width: 2300px) {
        left: 16%;
      }
      @media (min-width: 1900px) and(max-width:2100px) {
        left: 12%;
      }
      @media (min-width: 1750px) and(max-width:1900px) {
        left: 10%;
      }
      @media (max-width: 1750px) {
        left: 7%;
      }
      @media (max-width: 1280px) {
        left: 5%;
      }
      @media (max-width: 1024px) {
        left: 3%;
      }
      @media (max-width: 700px) {
        border: none;
      }
      ${props.addLineCss}
    `}
  >
    <h5
      css={css`
        color: #e87b68;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin: 0 -2em;
        font-weight: 100;
        font-size: 1rem;
        padding: 1em 0;
        position: absolute;
        width: max-content;
        @media (max-width: 1024px) {
          margin: -3em -1em;
        }
        ${props.addHCss};
      `}
    >
      {props.txtContent}
    </h5>
  </div>
)

export default PageLine
