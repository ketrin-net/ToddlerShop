import './BucketPage.scss';
import { Product } from '../../models/product';
import { ProductsCarousel } from '../../components/ProductsCarousel/ProductsCarousel';
import { selectCountProductsInBucket } from '../../store/reducers/bucketSlice';
import { useSelector } from 'react-redux';
import CardProductInOrderBucket from './components/CardProductInOrderBucket/CardProductInOrderBucket';
import React, { useState } from 'react';
import TableProductsInBucket from './components/TableProductsInBucket/TableProductsInBucket';
import TotalAmountPrice from './components/TotalAmountPrice/TotalAmountPrice';

export const popularProducts: Product[] = [
  {
    id: 1,
    imgSrc: `./components/ProductCard/assets/cot.png`,
    imgAlt: 'cot',
    title: 'Кроватка Riko Basic, Польша',
    cost: 52000,
    inStock: true,
  },
  {
    id: 2,
    imgSrc: `./components/ProductCard/assets/linen.png`,
    imgAlt: 'linen',
    title: 'Постельное белье Forest Sky (3 предмета)',
    cost: 2000,
    inStock: true,
  },
  {
    id: 3,
    imgSrc: `./components/ProductCard/assets/wheelchair1.png`,
    imgAlt: 'wheelchair1',
    title: 'Коляска Riko Basic, Польша',
    cost: 52000,
    inStock: true,
  },
  {
    id: 4,
    imgSrc: `./components/ProductCard/assets/wheelchair2.png`,
    imgAlt: 'wheelchair2',
    title: 'Коляска Riko Basic, Польша',
    cost: 12000,
    inStock: true,
  },
  {
    id: 5,
    imgSrc: `./components/ProductCard/assets/cot.png`,
    imgAlt: 'cot',
    title: 'Кроватка Riko Basic, Польша',
    cost: 52000,
    inStock: true,
  },
  {
    id: 6,
    imgSrc: `./components/ProductCard/assets/linen.png`,
    imgAlt: 'linen',
    title: 'Постельное белье Forest Sky (3 предмета)',
    cost: 2000,
    inStock: true,
  },
  {
    id: 7,
    imgSrc: `./components/ProductCard/assets/wheelchair1.png`,
    imgAlt: 'wheelchair1',
    title: 'Коляска Riko Basic, Польша',
    cost: 52000,
    inStock: true,
  },
  {
    id: 8,
    imgSrc: `./components/ProductCard/assets/wheelchair2.png`,
    imgAlt: 'wheelchair2',
    title: 'Коляска Riko Basic, Польша',
    cost: 12000,
    inStock: true,
  },
];

const BucketPage = () => {
  const productsCountInBucket = useSelector(selectCountProductsInBucket);

  return (
    <div className="main-backetpage">
      <div className="header">В корзине {productsCountInBucket} товара</div>
      <TableProductsInBucket />
      <TotalAmountPrice costProducts={[5, 10]} />
      <ProductsCarousel title="С этим покупают" products={popularProducts} slidesCount={3} spaceBetweenCards={0} />
    </div>
  );
};

export default BucketPage;
