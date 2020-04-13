import React from 'react'
import { css } from '@emotion/core'
import { useTranslation } from 'react-i18next'
import {languageSwitchStyles} from '../styles/componentStyles/footer'

const radioStyles = languageSwitchStyles.radioStyles;
const labelStyles = languageSwitchStyles.labelStyles;
const containerStyle = languageSwitchStyles.containerStyles;

const langSwitches = {
  en: {
    title: 'English',
    slug: 'en'
  },
  bg: {
    title: 'Bulgarian',
    slug: 'bg'
  },
  heb: {
    title: 'Hebrew',
    slug: 'heb'
  },
  ru: {
    title: 'Russian',
    slug: 'ru'
  }
}

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation()
  let currentLang = i18n.languages[0]
  const handleSelectLanguage = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    const lang: string = target.id
    i18n.changeLanguage(lang).then(t => {
      t('a')
    })
  }
  let checkedStyle
  const langSwitch = Object.values(langSwitches).map(langSwitch => {
    currentLang === langSwitch.slug
      ? (checkedStyle = css`
          opacity: 1;
        `)
      : (checkedStyle = css`
          opacity: 0.5;
        `)
    return (
      <label
        key={langSwitch.slug}
        id={langSwitch.slug}
        css={css`
          ${checkedStyle};
          ${labelStyles}
        `}
      >
        <input
          type="radio"
          value={langSwitch.slug}
          name="lang"
          id={langSwitch.slug}
          onClick={handleSelectLanguage}
          css={css`
            ${radioStyles}
          `}
        />
        {langSwitch.title}
      </label>
    )
  })

  return <div css={containerStyle}>{langSwitch}</div>
}

export default LanguageSwitch
