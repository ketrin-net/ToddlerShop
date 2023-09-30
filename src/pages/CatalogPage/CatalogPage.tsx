import './CatalogPage.scss';
import { AppDispatch } from '../../store/store';
import { Product } from '../../models/product';
import { ProductsCarousel } from '../../components/ProductsCarousel/ProductsCarousel';
import { fetchCategoryCatalog, selectCategoriesInState } from './slice/catalogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from '../../customHooks/useMediaQuery';
import { Link, useParams } from 'react-router-dom';
import ListSubCategory from './ListSubCategory/ListSubCategory';
import ProductsOnPage from './ProductsOnPage/ProductsOnPage';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../helpers/baseUrl';

export const CatalogPage = () => {
  const matches = useMediaQuery('(min-width: 900px)');
  const [products, setProducts] = useState<Product[]>([]);
  const { categoryId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(selectCategoriesInState);
  const categoryName = categories?.find((i) => i.id === parseInt(categoryId as string))?.name;

  useEffect(() => {
    dispatch(fetchCategoryCatalog());
    fetch(`${baseUrl}/category/${categoryId}/products`)
      .then((response) => response.json())
      .then((products) => setProducts(products.slice(-7)));
  }, [categoryId]);

  return (
    <div className="main catalog-page">
      <Link to={`/category/${categoryId}`} className="header">{categoryName}</Link>
      <ListSubCategory />
      <ProductsOnPage />
      <ProductsCarousel title={'Похожие товары'} products={products} slidesCount={matches ? 3 : 2} spaceBetweenCards={24} />
    </div>
  );
};
