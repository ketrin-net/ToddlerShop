import './NewProducts.scss';
import { ProductCard } from '../../../../components/ProductCard/ProductCard';
import { newProductCards } from '../../../../mokBase';
import { Сarousel } from '../../../../components/Сarousel/Сarousel';
import React from 'react';

export const NewProducts = () => {
  return (
    <div id="newProduct-homepage">
      <div className="section">
        <h2>Новинки</h2>
        <Сarousel slidesCount={4}>
          {newProductCards.map((item, i) => (
            <ProductCard imgSrc={item.imgSrc} imgAlt={item.imgAlt} title={item.title} cost={item.cost} iconNew={item.iconNew} />
          ))}
        </Сarousel>
      </div>
    </div>
  );
};
