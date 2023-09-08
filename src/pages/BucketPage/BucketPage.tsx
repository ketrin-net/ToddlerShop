import './BucketPage.scss';
import { Product, ProductsInOrder } from '../../models/product';
import { ProductsCarousel } from '../../components/ProductsCarousel/ProductsCarousel';
import CardProductInOrderBucket from './components/CardProductInOrderBucket/CardProductInOrderBucket';
import React, { useState } from 'react';
import TableProductsInBucket from './components/TableProductsInBucket/TableProductsInBucket';
import TotalAmountPrice from './components/TotalAmountPrice/TotalAmountPrice';

export const popularProducts: Product[] = [
  {
    imgSrc: `./components/ProductCard/assets/cot.png`,
    imgAlt: 'cot',
    title: 'Кроватка Riko Basic, Польша',
    cost: 52000,
    inStock: true,
  },
  {
    imgSrc: `./components/ProductCard/assets/linen.png`,
    imgAlt: 'linen',
    title: 'Постельное белье Forest Sky (3 предмета)',
    cost: 2000,
    inStock: true,
  },
  {
    imgSrc: `./components/ProductCard/assets/wheelchair1.png`,
    imgAlt: 'wheelchair1',
    title: 'Коляска Riko Basic, Польша',
    cost: 52000,
    inStock: true,
  },
  {
    imgSrc: `./components/ProductCard/assets/wheelchair2.png`,
    imgAlt: 'wheelchair2',
    title: 'Коляска Riko Basic, Польша',
    cost: 12000,
    inStock: true,
  },
  {
    imgSrc: `./components/ProductCard/assets/cot.png`,
    imgAlt: 'cot',
    title: 'Кроватка Riko Basic, Польша',
    cost: 52000,
    inStock: true,
  },
  {
    imgSrc: `./components/ProductCard/assets/linen.png`,
    imgAlt: 'linen',
    title: 'Постельное белье Forest Sky (3 предмета)',
    cost: 2000,
    inStock: true,
  },
  {
    imgSrc: `./components/ProductCard/assets/wheelchair1.png`,
    imgAlt: 'wheelchair1',
    title: 'Коляска Riko Basic, Польша',
    cost: 52000,
    inStock: true,
  },
  {
    imgSrc: `./components/ProductCard/assets/wheelchair2.png`,
    imgAlt: 'wheelchair2',
    title: 'Коляска Riko Basic, Польша',
    cost: 12000,
    inStock: true,
  },
];

export const orderProducts: ProductsInOrder[] = [
  {
    imgSrc: `./components/ProductCard/assets/linen.png`,
    imgAlt: 'linen',
    title: 'Постельное белье Forest Sky (3 предмета)',
    cost: 2000,
    inStock: true,
    amount: 1,
  },
  {
    imgSrc: `./components/ProductCard/assets/wheelchair1.png`,
    imgAlt: 'wheelchair1',
    title: 'Коляска Riko Basic, Польша',
    cost: 52000,
    inStock: false,
    amount: 1,
  },
  {
    imgSrc: `./components/ProductCard/assets/wheelchair2.png`,
    imgAlt: 'wheelchair2',
    title: 'Коляска Riko Basic, Польша',
    cost: 12000,
    inStock: true,
    amount: 1,
  },
  // {
  //   imgSrc: `./components/ProductCard/assets/cot.png`,
  //   imgAlt: 'cot',
  //   title: 'Кроватка Riko Basic, Польша',
  //   cost: 52000,
  //   oldCost: 112000,
  //   inStock: true,
  // },
  // {
  //   imgSrc: `./components/ProductCard/assets/linen.png`,
  //   imgAlt: 'linen',
  //   title: 'Постельное белье Forest Sky (3 предмета)',
  //   cost: 2000,
  //   oldCost: 10000,
  //   inStock: true,
  // },
  // {
  //   imgSrc: `./components/ProductCard/assets/wheelchair1.png`,
  //   imgAlt: 'wheelchair1',
  //   title: 'Коляска Riko Basic, Польша',
  //   cost: 52000,
  //   oldCost: 112000,
  //   inStock: true,
  // },
  // {
  //   imgSrc: `./components/ProductCard/assets/wheelchair2.png`,
  //   imgAlt: 'wheelchair2',
  //   title: 'Коляска Riko Basic, Польша',
  //   cost: 12000,
  //   oldCost: 60000,
  //   inStock: true,
  // },
];

const BucketPage = () => {
  let costProsucts = orderProducts
    .filter((item) => {
      return item.inStock === true;
    })
    .map((item) => item.cost * item.amount);

  let amountProductsInStock = orderProducts.filter((item) => {
    return item.inStock === true;
  });

  return (
    <div className="main-backetpage">
      <div className="header">В корзине {amountProductsInStock.length} товара</div>
      <TableProductsInBucket products={orderProducts} />
      <TotalAmountPrice costProducts={costProsucts} />
      <ProductsCarousel title="С этим покупают" products={popularProducts} slidesCount={3} spaceBetweenCards={0} />
    </div>
  );
};

export default BucketPage;
