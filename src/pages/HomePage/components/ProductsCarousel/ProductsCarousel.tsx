import './ProductsCarousel.scss';
import { ProductCard, ProductCardProps } from '../../../../components/ProductCard/ProductCard';
import { Сarousel } from '../../../../components/Сarousel/Сarousel';
import React from 'react';

interface ProductsCarouselProps {
  title: string;
  products: ProductCardProps[];
  slidesCount: number;
  spaceBetweenCards: number;
}

export const ProductsCarousel = (props: ProductsCarouselProps) => {
  return (
    <div className="products-carousel">
      <div className="section">
        <span className="title">{props.title}</span>
        <Сarousel slidesCount={props.slidesCount} spaceBetweenCard={props.spaceBetweenCards}>
          {props.products.map((item, i) => (
            <ProductCard
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
              title={item.title}
              cost={item.cost}
              oldCost={item.oldCost}
              iconNew={item.iconNew}
            />
          ))}
        </Сarousel>
      </div>
    </div>
  );
};
