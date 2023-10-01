import './FavoritesPage.scss';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { selectProductsInFavorites } from './slice/favoritesSlice';
import { useSelector } from 'react-redux';
import React from 'react';

const FavoritesPage = () => {
  const allProductsInFavorites = useSelector(selectProductsInFavorites);

  return (
    <div className="main favorites-page">
      <span className="header">Мое избранное</span>
      <div className="all-favorites-products">
        {allProductsInFavorites.map((item, index) => (
          <ProductCard
            key={index}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            title={item.title}
            cost={item.cost}
            oldCost={item.oldCost}
            iconNew={item.iconNew}
            id={item.id}
            inStock={item.inStock}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
