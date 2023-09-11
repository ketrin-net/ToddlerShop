import './ButtonsAddOneUnit.scss';
import { changeCountProduct, selectProductsInBucket } from '../../../store/reducers/bucketSlice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import minus from './assets/minus.svg';
import plus from './assets/plus.svg';

const ButtonsAddOneUnit = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  const quantityProduc = useSelector(selectProductsInBucket).find((item) => item.id === id)?.count;

  return (
    <div className="btns-add-delete-unit">
      <button onClick={() => dispatch(changeCountProduct({ id: id, addOrDelete: false }))}>
        <img src={minus} alt="minus" />
      </button>
      <div className="amount">{quantityProduc}</div>
      <button onClick={() => dispatch(changeCountProduct({ id: id, addOrDelete: true }))}>
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
};

export default ButtonsAddOneUnit;
