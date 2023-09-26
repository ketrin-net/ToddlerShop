import './HomePage.scss';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { Product } from '../../models/product';
import { ProductsCarousel } from '../../components/ProductsCarousel/ProductsCarousel';
import { PromoAction } from './components/PromoAction/PromoAction';
import { Title } from './components/Title/Title';
import { selectCountProductsInCart } from '../../store/reducers/cartSlice';
import { useMediaQuery } from '../../customHooks/useMediaQuery';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

export const products: Product[] = [
  {
    id: 1,
    imgSrc: `./components/ProductCard/assets/linen.png`,
    imgAlt: 'linen',
    title: 'Постельное белье Forest Sky (3 предмета)',
    cost: 4000,
    inStock: true,
  },
  {
    id: 12,
    imgSrc: `./components/ProductCard/assets/wheelchair1.png`,
    imgAlt: 'wheelchair1',
    title: 'Коляска Riko Basic, Польша',
    cost: 52000,
    inStock: false,
  },
  {
    id: 24,
    imgSrc: `./components/ProductCard/assets/wheelchair2.png`,
    imgAlt: 'wheelchair2',
    title: 'Коляска Riko Basic, Польша',
    cost: 12000,
    inStock: true,
  },
  {
    id: 2732,
    imgSrc: `./components/ProductCard/assets/cot.png`,
    imgAlt: 'cot',
    title: 'Кроватка Riko Basic, Польша',
    cost: 52000,
    oldCost: 112000,
    inStock: true,
  },
  {
    id: 394,
    imgSrc: `./components/ProductCard/assets/linen.png`,
    imgAlt: 'linen',
    title: 'Постельное белье Forest Sky (3 предмета)',
    cost: 2000,
    oldCost: 10000,
    inStock: true,
  },
  {
    id: 111,
    imgSrc: `./components/ProductCard/assets/wheelchair1.png`,
    imgAlt: 'wheelchair1',
    title: 'Коляска Riko Basic, Польша',
    cost: 52000,
    oldCost: 112000,
    inStock: true,
  },
  {
    id: 9383,
    imgSrc: `./components/ProductCard/assets/wheelchair2.png`,
    imgAlt: 'wheelchair2',
    title: 'Коляска Riko Basic, Польша',
    cost: 12000,
    oldCost: 60000,
    inStock: true,
  },
];

export const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://194.87.210.5:7000/products')
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  const productsNew = products.filter((item) => item.iconNew).slice(-7);
  const productsDiscount = products.filter((item) => item.oldCost !== null).slice(-7);
  const matches = useMediaQuery('(min-width: 1441px)');
  const matchesMobile = useMediaQuery('(min-width: 1025px)');

  let slidesCount = matches ? 4 : matchesMobile ? 3 : 2;
  let spaceBetweenCards = matches ? 24 : matchesMobile ? 24 : 5;

  return (
    <div className="homepage">
      <Title />
      <ProductsCarousel title="Новинки" products={productsNew} slidesCount={slidesCount} spaceBetweenCards={spaceBetweenCards} />
      <PromoAction />
      <ProductsCarousel title="Выгодное предложение" products={productsDiscount} slidesCount={slidesCount} spaceBetweenCards={spaceBetweenCards} />
      <ProductsCarousel title="Популярные товары" products={products} slidesCount={slidesCount} spaceBetweenCards={spaceBetweenCards} />
    </div>
  );
};
