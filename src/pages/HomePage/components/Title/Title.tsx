import './Title.scss';
import { Link } from 'react-router-dom';
import PhotoTitleHomepage from './assets/PhotoTitleHomepage.png';
import PhotoTitleHomepageMobile from './assets/PhotoTitleHomepageMobile.png';
import React from 'react';

export const Title = () => {
  return (
    <div className="title-homepage">
      <div className="section">
        <span className="title">
          Все самое <br className="mobile-only" /> необходимое для вашего ребенка
        </span>
        <p>
          Посмотрите нашу новую подборку <br /> для ухода за вашим ребенком
        </p>
        <Link to="/" className="btn blue">
          Смотреть
        </Link>
        <picture>
          <source srcSet={PhotoTitleHomepage} media="(min-width: 851px)" />
          <img src={PhotoTitleHomepageMobile} alt="PhotoMother" className="poster mobile-only" />
        </picture>
      </div>
    </div>
  );
};
