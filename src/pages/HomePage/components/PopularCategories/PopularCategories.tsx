import './PopularCategories.scss';
import BlockPromoCategories from './BlockPromoCategories/BlockPromoCategories';
import React from 'react';
import bed from './assets/bed.png';
import carSeats from './assets/carSeats.png';
import wheelchair from './assets/wheelchair.png';
import { Path } from '../../../../enums';

const PopularCategories = () => {
  return (
    <div className="section popular-categories">
      <span className="title">Популярные категории</span>
      <div className="block-info">
        <BlockPromoCategories
          title={'Детская мебель'}
          description={'Baby Expert, Baby Italia и др.'}
          poster={bed}
          backgroundColor={'pink'}
          linkTo={'/category/1'}
        />
        <BlockPromoCategories
          title={'Коляски'}
          description={'Cybex, mima, moon, Hartan и др.'}
          poster={wheelchair}
          backgroundColor={'vanil'}
          linkTo={'/category/2'}
        />
        <BlockPromoCategories
          title={'Детские автокресла'}
          description={'Welldon, HB, Cybex и др.'}
          poster={carSeats}
          backgroundColor={'blue'}
          linkTo={'/category/8'}
        />
      </div>
    </div>
  );
};

export default PopularCategories;
