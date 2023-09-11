import './ModalProductAddition.scss';
import { BasicPriceProduct } from '../BasicPriceProduct/BasicPriceProduct';
import { Link } from 'react-router-dom';
import { Product } from '../../models/product';
import { closeModal } from '../../store/reducers/modalAdditionSlice';
import { selectProductsInBucket } from '../../store/reducers/bucketSlice';
import { useDispatch, useSelector } from 'react-redux';
import ButtonsAddOneUnit from '../Buttons/ButtonsAddOneUnit/ButtonsAddOneUnit';
import React from 'react';
import iconClose from './assets/iconX.svg';

const ModalProductAddition = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  const currentProduct = useSelector(selectProductsInBucket).find((item) => item.id === id);
  setTimeout(() => dispatch(closeModal()), 5000);

  return (
    <>
      {currentProduct && (
        <div className="modal-product-add">
          <span className="header">Товар добавлен в корзину</span>
          <button className="icon-close" onClick={() => dispatch(closeModal())}>
            <img src={iconClose} alt="iconClose" />
          </button>
          <img src={currentProduct?.imgSrc} alt={currentProduct?.imgAlt} className="poster" />
          <div>
            <p className="description">{currentProduct?.title}</p>
            <BasicPriceProduct cost={currentProduct.cost} />
          </div>
          <ButtonsAddOneUnit id={currentProduct.id} />
          <Link to="/bucket" className="btn white">
            Перейти в корзину
          </Link>
        </div>
      )}
    </>
  );
};

export default ModalProductAddition;
