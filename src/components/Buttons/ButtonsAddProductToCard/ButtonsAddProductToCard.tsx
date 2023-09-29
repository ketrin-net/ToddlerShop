import { Product } from '../../../models/product';
import { addProductInCart } from '../../../pages/CartPage/slice/cartSlice';
import { openModalAddProduct } from '../../../store/slices/modalAdditionSlice';
import { useDispatch } from 'react-redux';
import React from 'react';

interface ButtonAddProductToCartProps {
  product: Product;
}

const ButtonAddProductToCart = (props: ButtonAddProductToCartProps) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openModalAddProduct({ id: props.product.id }));
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
