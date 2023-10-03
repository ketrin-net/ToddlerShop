import './InfoAboutSite.scss';
import BlockInfoAboutSite from './BlockInfoAboutSite/BlockInfoAboutSite';
import React from 'react';
import numberFour from './assets/numberFour.svg';
import numberOne from './assets/numberOne.svg';
import numberThree from './assets/numberThree.svg';
import numberTwo from './assets/numberTwo.svg';

const InfoAboutSite = () => {
  return (
    <div id="info-about-site" className="section">
      <span className="title">
        Карапуз - это онлайн гипермаркет товаров <br /> для детей. С нами вырастают поколения!
      </span>
      <div className="blocks">
        <BlockInfoAboutSite poster={numberOne} text={'Все товары для детей в одном месте'} />
        <BlockInfoAboutSite poster={numberTwo} text={'Цены ниже, чем у конкурентов'} />
        <BlockInfoAboutSite poster={numberThree} text={'Официальные дилеры лучших мировых производителей'} />
        <BlockInfoAboutSite poster={numberFour} text={'Собственное эко-производство'} />
      </div>
    </div>
  );
};

export default InfoAboutSite;
