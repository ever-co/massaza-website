import * as React from 'react'
import { css } from '@emotion/core'
import {miniMenuStyles} from '../../styles/componentStyles/header'
import HiddenMenu from './HiddenMenu'

const MiniMenuBtn:React.FC = () => {
  let [oppened, toggleClass] = React.useState(false)

  return (
    
    <div>
      <svg
        id="mini-menu"
        onClick={() => toggleClass(oppened = !oppened)}
        data-name="Group 18"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 25 23"
        css={css`
         ${miniMenuStyles.mainIconCss}
          ${oppened
            ? css`
               ${miniMenuStyles.oppened}
              `
            : css`
              ${miniMenuStyles.closed}
              `}
        `}
      >
        <g id="second-line">
          <path id="oval" d="M4.5,5a2.5,2.5,0,0,0,0-5C3.119,0,0,2.5,0,2.5S3.119,5,4.5,5Z" transform="translate(18 9)" fill="#f9b19f" />
          <rect id="line" data-name="Rectangle Copy 15" width="15" height="3" rx="1.5" transform="translate(0 10)" fill="#f9b19f" />
        </g>
        <g id="ex">
          <rect id="third-line" width="25" height="3" rx="1.5" transform="translate(0 20)" fill="#f9b19f" />
          <rect id="first-line" data-name="Rectangle Copy 7" width="25" height="3" rx="1.5" fill="#f9b19f" />
        </g>
      </svg>
      <HiddenMenu toggleClass={toggleClass} oppened={oppened} />
    </div>
  )
}

export default MiniMenuBtn
