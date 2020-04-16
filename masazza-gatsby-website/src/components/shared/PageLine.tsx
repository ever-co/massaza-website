import * as React from 'react'
import { css, SerializedStyles } from '@emotion/core'
import { pageLineStyles } from '../../styles/componentStyles/shared'

interface IPageLineProps{
  addLineCss?: string | SerializedStyles,
  addHCss?:  string | SerializedStyles,
}

const PageLine: React.SFC<IPageLineProps> = ({ addLineCss, addHCss, children }) => (
  <div
    css={css`
      ${pageLineStyles.pageLine}
      ${addLineCss}
    `}
  >
    <h5
      css={css`
        ${pageLineStyles.pageLineH}
        ${addHCss};
      `}
    >
      {children}
    </h5>
  </div>
)

export default PageLine
