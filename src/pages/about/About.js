/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PageLayout from '../../layout/PageLayout';
import data from './data';
import './index.less';

const About = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState('en');

  return (
    <PageLayout>
      <div className={`about_container ${selectedLanguage}`}>
        <div className="title">{data[selectedLanguage].title}</div>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: data[selectedLanguage].description }}
        />

        <div className="language_container">
          <div
            className={`language ${selectedLanguage === 'en' ? 'selected' : ''}`}
            onClick={() => setSelectedLanguage('en')}
          >
            English
          </div>
          <div
            className={`language ${selectedLanguage === 'ar' ? 'selected' : ''}`}
            onClick={() => setSelectedLanguage('ar')}
          >
            العربية
          </div>
          <div
            className={`language ${selectedLanguage === 'es' ? 'selected' : ''}`}
            onClick={() => setSelectedLanguage('es')}
          >
            Español
          </div>
          <div
            className={`language ${selectedLanguage === 'sv' ? 'selected' : ''}`}
            onClick={() => setSelectedLanguage('sv')}
          >
            Svenska
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
