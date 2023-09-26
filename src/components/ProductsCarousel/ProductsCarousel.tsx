import './ProductsCarousel.scss';
import { Product } from '../../models/product';
import { ProductCard } from '../ProductCard/ProductCard';
import { Сarousel } from '../Сarousel/Сarousel';
import React from 'react';

interface ProductsCarouselProps {
  title: string;
  products: Product[];
  slidesCount: number;
  spaceBetweenCards: number;
}

export const ProductsCarousel = (props: ProductsCarouselProps) => {
  return (
    <div className="products-carousel">
      <div className="section">
        <span className="title">{props.title}</span>
        <Сarousel slidesCount={props.slidesCount} spaceBetweenCard={props.spaceBetweenCards}>
          {props.products.map((item, index) => (
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
        </Сarousel>
      </div>
    </div>
  );
};
