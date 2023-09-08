import { Product } from '../../../models/product';
import { addProductInBucket } from '../../../store/reducers/bucketSlice';
import { openModal } from '../../../store/reducers/modalAdditionSlice';
import { useDispatch } from 'react-redux';
import ModalProductAddition from '../../ModalProductAddition/ModalProductAddition';
import React from 'react';

interface ButtonsAddProductToCardProps {
  product: Product;
}

const ButtonsAddProductToCard = (props: ButtonsAddProductToCardProps) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openModal({ id: props.product.id }));
    dispatch(addProductInBucket(props.product));
  };

  return (
    <>
      <button className="btn blue" onClick={handleClick}>
        В корзину
      </button>
    </>
  );
};

export default ButtonsAddProductToCard;
