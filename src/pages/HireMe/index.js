import React from 'react';
import PageLayout from '../../layout/PageLayout';
import './index.less';

const HireMe = () => {
  return (
    <PageLayout>
      <div className="hireMe_container">
        <div className="article">
          <div className="title">Tell me your story</div>
          <div className="subtitle">Let&apos;s get to know each other</div>
          <form className="form">
            <textarea placeholder="Add your text here" />
          </form>
          <div className="footer">
            <div className="footerText">baseem36@gmail.com</div>
            <div className="footerText">+46764067607</div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HireMe;
