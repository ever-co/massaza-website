import * as React from 'react'
import { css, SerializedStyles } from '@emotion/core'
import { mainBtnStyles } from '../../styles/componentStyles/buttons'

type TMainStyledBtnProps={
  addCss?: string | SerializedStyles
}


const MainStyledButton:React.SFC<TMainStyledBtnProps> = ({children,addCss}) => (
  <button
    css={css`
      ${mainBtnStyles}
      ${addCss}
    `}
  >
    {children}
  </button>
)

export { MainStyledButton }
