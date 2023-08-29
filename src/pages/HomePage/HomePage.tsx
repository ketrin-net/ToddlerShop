import './HomePage.scss';
import { ProductsCarousel } from './components/ProductsCarousel/ProductsCarousel';
import { PromoAction } from './components/PromoAction/PromoAction';
import { Title } from './components/Title/Title';
import { newProducts, popularProducts, saleProducts } from '../../Models/models';
import React from 'react';

export const HomePage = () => {
  return (
    <div className="main-homepage">
      <Title />
      <ProductsCarousel title="Новинки" products={newProducts} slidesCount={4} />
      <PromoAction />
      <ProductsCarousel title="Выгодное предложение" products={saleProducts} slidesCount={4} />
      <ProductsCarousel title="Популярные товары" products={popularProducts} slidesCount={4} />
    </div>
  );
};
