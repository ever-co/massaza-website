import * as React from 'react'
import { aboutUsStyles } from '../../styles/componentStyles/about-us'

import AppStoreBtns from '../buttons/AppStoreBtns'

import TheStoryPhone from '../../../assets/images/about-us/the-story-phone.png'

import { useTranslation } from 'react-i18next'

const dict = require('../../../i18n/dictionary')

const TheStory = () => {
  let currentLang = useTranslation().i18n.languages[0]
  let storyParagraphData = dict.default[`${currentLang}`].translation.aboutUs.theStory.storyParagraphData

  return (
    <div className="story-wrapper row" css={aboutUsStyles.storyWrapper}>
      <div className="story-descr col" css={aboutUsStyles.storyDescr}>
        {storyParagraphData.map((story: string, key: number) => (
          <p key={key} css={aboutUsStyles.paragraph}>
            {story}
          </p>
        ))}
      </div>
      <div className="story-pics col" css={aboutUsStyles.storyPics}>
        <img src={TheStoryPhone} alt="" className="story-phone" css={aboutUsStyles.storyPicsImg} />
        <AppStoreBtns addStoreBtnWrapperCss={aboutUsStyles.appStoreBtnsAdj.btnWrapper} addCssBtn={aboutUsStyles.appStoreBtnsAdj.btn} />
      </div>
    </div>
  )
}

export default TheStory
