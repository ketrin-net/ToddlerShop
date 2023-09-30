import './CartPage.scss';
import { Product } from '../../models/product';
import { ProductInCart, selectCountProductsInCart } from './slice/cartSlice';
import { ProductsCarousel } from '../../components/ProductsCarousel/ProductsCarousel';
import { useMediaQuery } from '../../customHooks/useMediaQuery';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import TableProductsInCart from './components/TableProductsInCart/TableProductsInCart';
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
    cost: 4000,
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

const CartPage = () => {
  const productsCountInCart = useSelector(selectCountProductsInCart);
  const matches = useMediaQuery('(min-width: 1025px)');

  let slidesCount = matches ? 3 : 2;

  return (
    <div className="main backet-page">
      <span className="header">В корзине {productsCountInCart} товара</span>
      <TableProductsInCart />
      <TotalAmountPrice />
      <ProductsCarousel title="С этим покупают" products={popularProducts} slidesCount={slidesCount} spaceBetweenCards={0} />
    </div>
  );
};

export default CartPage;
