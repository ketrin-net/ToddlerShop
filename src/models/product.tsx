import React from 'react';

export interface Product {
  imgSrc: string;
  imgAlt: string;
  title: string;
  cost: number;
  oldCost?: number;
  iconNew?: boolean;
  inStock: boolean;
}

export interface ProductsInOrder {
  imgSrc: string;
  imgAlt: string;
  title: string;
  cost: number;
  inStock: boolean;
  amount: number;
}
