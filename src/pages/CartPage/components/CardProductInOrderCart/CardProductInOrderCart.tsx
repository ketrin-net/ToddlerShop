import './CardProductInOrderCart.scss';
import { BasicPriceProduct } from '../../../../components/BasicPriceProduct/BasicPriceProduct';
import { ProductInCart, cancelDeleteProductInCart, deleteProductInCart, hiddenProductInCart } from '../../../../store/reducers/cartSlice';
import { useDispatch } from 'react-redux';
import ButtonAddOneUnit from '../../../../components/Buttons/ButtonsAddOneUnit/ButtonsAddOneUnit';
import React, { useState } from 'react';
import SwitchHeart from '../../../../components/SwitchHeart';
import iconTrash from '../../assets/iconTrash.svg';
import iconX from '../../assets/iconX.svg';

interface OrderProductCardProps {
  product: ProductInCart;
}

const OrderProductCard = (props: OrderProductCardProps) => {
  const dispatch = useDispatch();
  const [isDeleted, setIsDeleted] = useState(true);

  return (
    <>
      {!props.product.isDeleted ? (
        <div className="card-product-in-order">
          <img src={props.product.imgSrc} alt={props.product.imgAlt} className="poster" />
          <div className="info">
            <p className="title">{props.product.title}</p>
            <ButtonAddOneUnit id={props.product.id} />
            <BasicPriceProduct cost={props.product.cost} />
            <div className="in-stock">
              {props.product.inStock ? <span className="in-stock true">В наличии</span> : <span className="in-stock false">Нет в наличии</span>}
            </div>
          </div>
          <div className="interaction-panel">
            <SwitchHeart />
            <button onClick={() => dispatch(hiddenProductInCart({ id: props.product.id }))}>
              <img src={iconTrash} alt="iconTrash" />
            </button>
          </div>
        </div>
      ) : (
        <div className="card-product-in-order delete">
          <p> Вы удалили {props.product.title}</p>
          <button className="cancel" onClick={() => dispatch(cancelDeleteProductInCart({ id: props.product.id }))}>
            Отменить
          </button>
          <button onClick={() => dispatch(deleteProductInCart({ id: props.product.id }))}>
            <img src={iconX} alt="iconX" />
          </button>
        </div>
      )}
    </>
  );
};

export default OrderProductCard;
