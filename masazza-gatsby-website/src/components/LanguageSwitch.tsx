import React from 'react';
import { useTranslation } from 'react-i18next';

const langSwitches = {
  en: {
    title: 'English',
    slug: 'en',
  },
  de: {
    title: 'Bulgarian',
    slug: 'bg',
  },
};



const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const handleSelectLanguage = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const lang: string = target.id;

    i18n.changeLanguage(lang).then((t)=> {t('a')})
  };

  const langSwitch = Object.values(langSwitches).map(langSwitch => {
    return (
      <div
        key={langSwitch.slug}
        // style={styles.langSwitch}
        id={langSwitch.slug}
        onClick={handleSelectLanguage}
      >
        {langSwitch.title}
      </div>
    );
  });

  return <div >{langSwitch}</div>;
};

export default LanguageSwitch;
