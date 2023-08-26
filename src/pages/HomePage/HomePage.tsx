import './HomePage.scss';
import { NewProducts } from './components/NewProducts/NewProducts';
import { Title } from './components/Title/Title';

import React from 'react';

export const HomePage = () => {
  return (
    <div className="main-homepage">
      <Title />
      <NewProducts />
    </div>
  );
};
