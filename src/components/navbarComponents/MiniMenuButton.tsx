import * as React from 'react'
import { css } from '@emotion/core'
import HiddenMenu from './HiddenMenu'

const MiniMenuBtn = (props: any) => {
  let [oppened, toggleClass] = React.useState(props.isOppened)

  return (
    <div>
      <svg
        id="mini-menu"
        onClick={() => toggleClass((oppened = !oppened))}
        data-name="Group 18"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 25 23"
        css={css`
          display: none;
          margin: 0 1em 0;
          width: 1.5rem;
          @media screen and (max-width: 1250px) {
            display: block;
          }
          ${oppened
            ? css`
                * {
                  transition: all 0.5s ease-in;
                  transform-origin: center;
                }
                #oval {
                  transform: translate(60px, 0);
                }
                #second-line {
                  transform: translate(-30px, 0);
                }
                #first-line {
                  transition-delay: 0.4s;
                  transform: translate(-10px, 0px) rotate(90deg);
                }
                #third-line {
                  transition-delay: 0.4s;

                  transform: translate(0, 10px);
                }
                #ex {
                  transition-delay: 0.4s;

                  transform: rotate(45deg);
                }
                #nav-btns {
                  opacity: 0;
                }
                #hidden-menu {
                  transform: translate(-300px, 0);
                }
              `
            : css`
                * {
                  transform-origin: center;
                  transition: all 1s ease-out;
                }

                #mini-menu {
                  @media screen and(min-width:1280px) {
                    display: none;
                  }
                  &:hover {
                    cursor: pointer;
                  }
                }
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
      <HiddenMenu oppened={oppened} navLinks={props.navLinks} flexFlow="row" />
    </div>
  )
}

export default MiniMenuBtn
