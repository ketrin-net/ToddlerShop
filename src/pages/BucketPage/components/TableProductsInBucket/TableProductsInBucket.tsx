import { Product } from '../../../../models/product';
import CardProductInOrderBucket from '../CardProductInOrderBucket/CardProductInOrderBucket';
import React, { useState } from 'react';

interface TableProductsInBucketProps {
  products: Product[];
}

const TableProductsInBucket = (props: TableProductsInBucketProps) => {
  return (
    <div className="products-in-bucket">
      {props.products.map((item, i) => (
        <CardProductInOrderBucket imgSrc={item.imgSrc} imgAlt={item.imgAlt} title={item.title} cost={item.cost} inStock={item.inStock} />
      ))}
    </div>
  );
};

export default TableProductsInBucket;
