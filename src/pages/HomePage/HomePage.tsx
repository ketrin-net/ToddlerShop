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

export const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:7000/products')
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
