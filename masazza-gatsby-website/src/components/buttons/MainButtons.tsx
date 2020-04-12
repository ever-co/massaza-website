import * as React from 'react'
import { css } from '@emotion/core'
import {mainBtnStyles} from '../../styles/componentStyles/buttons'

const MainStyledButton = (props: any) => (
  <button
    css={css`
    ${mainBtnStyles}
      background: ${props.background};
      ${props.addCss}
    `}
  >
    {props.btnTxt}
  </button>
)

export { MainStyledButton }