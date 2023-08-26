import './Title.scss';
import { BtnBlue } from '../../../../components/Buttons/Buttons';
import PhotoTitleHomepage from './assets/PhotoTitleHomepage.png';
import PhotoTitleHomepageMobile from './assets/PhotoTitleHomepageMobile.png';
import React from 'react';

export const Title = () => {
  return (
    <div className="title-homepage">
      <div className="section">
        <h1>
          Все самое <br className="mobile-only" /> необходимое для вашего ребенка
        </h1>
        <p>
          Посмотрите нашу новую подборку <br /> для ухода за вашим ребенком
        </p>
        <BtnBlue textBtn="Смотреть" />
        <img src={PhotoTitleHomepage} alt="ellipse" className="poster desktop-only" />
      </div>
      <img src={PhotoTitleHomepageMobile} alt="ellipse" className="poster mobile-only" />
    </div>
  );
};
