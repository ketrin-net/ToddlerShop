import { Product } from '../../../models/product';
import { addProductInCart } from '../../../store/reducers/cartSlice';
import { openmodalAddProduct } from '../../../store/reducers/modalAdditionSlice';
import { useDispatch } from 'react-redux';
import React from 'react';

interface ButtonAddProductToCartProps {
  product: Product;
}

const ButtonAddProductToCart = (props: ButtonAddProductToCartProps) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openmodalAddProduct({ id: props.product.id }));
    dispatch(addProductInCart(props.product));
  };

  return (
    <>
      <button className="btn blue" onClick={handleClick}>
        В корзину
      </button>
    </>
  );
};

export default ButtonAddProductToCart;
