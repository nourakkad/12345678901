import React from 'react';
import { useLocation } from 'react-router-dom';
import './Awards.css';
import { getLangFromPath, t } from '../utils/i18n';

const Awards: React.FC = () => {
  const location = useLocation();
  const lang = getLangFromPath(location.pathname, 'en');

  return (
    <div className="awards-page">
      <div className="awards-container">
        <div className="awards-icon" aria-hidden="true">
          <i className="fas fa-trophy"></i>
        </div>
        <h1 className="awards-title">{t(lang as any, 'nav.awards')}</h1>
        <p className="awards-coming">{t(lang as any, 'awards.comingSoon')}</p>
      </div>
    </div>
  );
};

export default Awards;


