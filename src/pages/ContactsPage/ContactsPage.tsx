import './ContactsPage.scss';
import { useMediaQuery } from '../../customHooks/useMediaQuery';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import React from 'react';
import СontactsInfo from './components/СontactsInfo/СontactsInfo';

const ContactsPage = () => {
  const matches = useMediaQuery('(max-width: 850px)');

  console.log(matches);

  return (
    <div className="main-contacts">
      <span className="header">Контакты</span>
      <div className="info">
        <СontactsInfo />
        <FeedbackForm />
      </div>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1372.9422381313834!2d30.312912030974555!3d59.93997783837421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310b32cbe2e9%3A0x74e032aa0505dfc!2z0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCt0YDQvNC40YLQsNC2!5e0!3m2!1sru!2sru!4v1695159164348!5m2!1sru!2sru"
        width={matches ? '471' : '1456'}
        height={matches ? '597' : '591'}
        style={{ border: '0' }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default ContactsPage;
