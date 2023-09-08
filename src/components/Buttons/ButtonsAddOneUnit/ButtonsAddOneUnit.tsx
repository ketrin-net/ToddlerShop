import './ButtonsAddOneUnit.scss';
import { Product } from '../../../models/product';
import React, { useState } from 'react';
import minus from './assets/minus.svg';
import plus from './assets/plus.svg';

export const products: Product[] = [
  {
    id: 1,
    imgSrc: `./components/ProductCard/assets/linen.png`,
    imgAlt: 'linen',
    title: 'Постельное белье Forest Sky (3 предмета)',
    cost: 2000,
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

const ButtonsAddOneUnit = () => {
  const [value, valueChange] = useState(1);

  return (
    <div className="btns-add-delete-unit">
      <button
        onClick={() => {
          if (value > 1) {
            valueChange(value - 1);
          }
        }}
      >
        <img src={minus} alt="minus" />
      </button>
      <div className="amount">{value}</div>
      <button onClick={() => valueChange(value + 1)}>
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
};

export default ButtonsAddOneUnit;
