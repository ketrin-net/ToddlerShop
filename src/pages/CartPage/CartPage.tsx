import './CartPage.scss';
import { Product } from '../../models/product';
import { ProductInCart, selectCountProductsInCart } from './slice/cartSlice';
import { ProductsCarousel } from '../../components/ProductsCarousel/ProductsCarousel';
import { baseUrl } from '../../helpers/baseUrl';
import { useMediaQuery } from '../../customHooks/useMediaQuery';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import TableProductsInCart from './components/TableProductsInCart/TableProductsInCart';
import TotalAmountPrice from './components/TotalAmountPrice/TotalAmountPrice';

const CartPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const productsCountInCart = useSelector(selectCountProductsInCart);
  const matches = useMediaQuery('(min-width: 1025px)');
  let slidesCount = matches ? 3 : 2;

  useEffect(() => {
    fetch(`${baseUrl}/products/random`)
      .then((response) => response.json())
      .then((products) => setProducts(products.slice(-7)));
  }, []);

  return (
    <div className="main backet-page">
      <span className="header">В корзине {productsCountInCart} товара</span>
      <TableProductsInCart />
      <TotalAmountPrice />
      <ProductsCarousel title="С этим покупают" products={products} slidesCount={slidesCount} spaceBetweenCards={0} />
    </div>
  );
};

export default CartPage;
