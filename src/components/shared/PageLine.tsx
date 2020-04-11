import * as React from 'react'
import { css } from '@emotion/core'
import {pageLineStyles} from '../../styles/componentStyles/shared'

const PageLine = (props: any) => (
  <div
    css={css`
     ${pageLineStyles.pageLine}
      ${props.addLineCss}
    `}
  >
    <h5
      css={css`
      ${pageLineStyles.pageLineH}
        ${props.addHCss};
      `}
    >
      {props.txtContent}
    </h5>
  </div>
)

export default PageLine
