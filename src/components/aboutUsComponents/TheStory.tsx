import * as React from 'react'
import { css } from '@emotion/core'
import { flex } from '../../styles/variables'

import AppStoreBtns from '../buttons/AppStoreBtns'

import TheStoryPhone from '../../../assets/images/about-us/the-story-phone.png'
import StoryPicsBackground from '../../../assets/images/about-us/story-pics-background.png'

const storyPData = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  ' Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC Sed ut perspiciatis unde omnis iste natus error si voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
]

const TheStory = () => (
  <div
    className="story-wrapper row"
    css={css`
      ${flex.row};
      width: 80%;

      max-width: 90em;
      margin: 3em auto 0;
      justify-content: space-evenly;
      @media (max-width: 1024px) {
        ${flex.col}
        margin: 2em auto 0;
      }
      @media (max-width: 600px) {
        width: 90%;
        margin: 5em auto 0;
      }
    `}
  >
    <div
      className="story-descr col"
      css={css`
        width: 50%;
        color: #96525c;
        margin: auto;
        @media (max-width: 1024px) {
          font-size: 0.8rem;
          width: 100%;
          margin: 2em auto 0;
        }
        @media (max-width: 600px) {
          font-size: 1rem;
        }
      `}
    >
      {storyPData.map((story: string, key: number) => (
        <p
          key={key}
          css={css`
            margin: 0.5em 0;
            line-height: 30px;
            @media (max-width: 1024px) {
              font-size: 1rem;
              line-height: 25px;
            }
            @media (max-width: 600px) {
              font-size: 1rem;
              line-height: normal;
              margin: 1em 0;
            }
          `}
        >
          {story}
        </p>
      ))}
    </div>
    <div
      className="story-pics col"
      css={css`
        ${flex.col};
        background: url(${StoryPicsBackground});
        width: 40%;
        background-repeat: no-repeat;
        background-size: auto;
        background-position: 100% 0;
        align-items: flex-end;
        @media (max-width: 1024px) {
          flex-flow: row-reverse;
          width: 100%;
        }
        @media (max-width: 600px) {
          flex-flow: column;
          background: none;
        }
      `}
    >
      <img
        src={TheStoryPhone}
        alt=""
        className="story-phone"
        css={css`
          margin: 2em 0 0 -3em;
          @media (max-width: 1024px) {
            width: 70%;
            max-width: 25em;
          }
          @media (max-width: 600px) {
            margin: 0;
            width: 100%;
          }
        `}
      />
      <AppStoreBtns
        addStoreBtnWrapperCss="justify-content: center;
         @media (max-width:1024px){
                 flex-flow: column;
                 width: 60%;
                 margin: auto -5em;
                }
                @media (max-width:600px){
                  width: 100%;
                  margin: auto;
                }"
        addCssBtn="@media(max-width:1024px){
                  width:100%;
                  margin: -4em 0;
                  width: 50%;
                  margin: -3em 3em;
                }"
      />
    </div>
  </div>
)

export default TheStory
