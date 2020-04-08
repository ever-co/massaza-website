import * as React from 'react'
import { css } from '@emotion/core'

const MainStyledButton = (props: any) => (
  <button
    css={css`
      margin: auto 1rem;
      height: 75%;
      padding: 0.8rem 0.5rem;
      border-radius: 10px;
      border: none;
      min-width: max-content;
      outline: none;
      background: ${props.background};
      font-size: 1rem;
      font-weight: 600;
      color: #fff;
      min-height: 3em;
      &:hover {
        cursor: pointer;
      }
      ${props.addCss}
    `}
  >
    {props.btnTxt}
  </button>
)

export { MainStyledButton }
