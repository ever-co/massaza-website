import * as React from 'react'
import { css } from '@emotion/core'
import { aboutUsStyles } from '../../styles/componentStyles/about-us'

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
      ${aboutUsStyles.storyWrapper}
    `}
  >
    <div
      className="story-descr col"
      css={css`
        ${aboutUsStyles.storyDescr}
      `}
    >
      {storyPData.map((story: string, key: number) => (
        <p
          key={key}
          css={css`
            ${aboutUsStyles.paragraph}
          `}
        >
          {story}
        </p>
      ))}
    </div>
    <div
      className="story-pics col"
      css={css`
        background: url(${StoryPicsBackground});
        ${aboutUsStyles.storyPics}
      `}
    >
      <img
        src={TheStoryPhone}
        alt=""
        className="story-phone"
        css={css`
          ${aboutUsStyles.storyPicsImg}
        `}
      />
      <AppStoreBtns
        addStoreBtnWrapperCss={`${aboutUsStyles.appStoreBtnsAdj.btnWrapper}`}
        addCssBtn={`${aboutUsStyles.appStoreBtnsAdj.btn}`}
      />
    </div>
  </div>
)

export default TheStory
