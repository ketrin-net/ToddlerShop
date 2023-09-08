import { Product } from '../../../../models/product';
import { selectProductsInBucket } from '../../../../store/reducers/bucketSlice';
import { useSelector } from 'react-redux';
import CardProductInOrderBucket from '../CardProductInOrderBucket/CardProductInOrderBucket';
import React, { useState } from 'react';

const TableProductsInBucket = () => {
  const allProductsInBucket = useSelector(selectProductsInBucket);

  return (
    <div className="products-in-bucket">
      {Array.from(allProductsInBucket.values()).map((item) => (
        <CardProductInOrderBucket imgSrc={item.imgSrc} imgAlt={item.imgAlt} title={item.title} cost={item.cost} inStock={item.inStock} />
      ))}
    </div>
  );
};

export default TableProductsInBucket;
