import './ModalProductAddition.scss';
import { BasicPriceProduct } from '../BasicPriceProduct/BasicPriceProduct';
import { Link } from 'react-router-dom';
import { closemodalAddProduct } from '../../store/reducers/modalAdditionSlice';
import { selectProductsInCart } from '../../store/reducers/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import ButtonAddOneUnit from '../Buttons/ButtonsAddOneUnit/ButtonsAddOneUnit';
import React from 'react';
import iconClose from './assets/iconX.svg';

const ModalAddProduct = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  const currentProduct = useSelector(selectProductsInCart).find((item) => item.id === id);
  setTimeout(() => dispatch(closemodalAddProduct()), 5000);

  return (
    <>
      {currentProduct && (
        <div className="modal-product-add">
          <span className="header-modal">Товар добавлен в корзину</span>
          <button className="icon-close" onClick={() => dispatch(closemodalAddProduct())}>
            <img src={iconClose} alt="iconClose" />
          </button>
          <img src={currentProduct?.imgSrc} alt={currentProduct?.imgAlt} className="poster" />
          <div>
            <p className="description">{currentProduct?.title}</p>
            <BasicPriceProduct cost={currentProduct.cost} />
          </div>
          <ButtonAddOneUnit id={currentProduct.id} />
          <Link to="/Cart" className="btn white">
            Перейти в корзину
          </Link>
        </div>
      )}
    </>
  );
};

export default ModalAddProduct;
