import { Product } from '../../../models/product';
import { addProductInBucket } from '../../../store/reducers/bucketSlice';
import { useDispatch } from 'react-redux';
import ModalProductAddition from '../../ModalProductAddition/ModalProductAddition';
import React, { useState } from 'react';

interface ButtonsAddProductToCardProps {
  item: Product;
}

const ButtonsAddProductToCard = (props: ButtonsAddProductToCardProps) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button className="btn blue" onClick={() => dispatch(addProductInBucket(props.item))}>
        В корзину
      </button>
      {openModal && <ModalProductAddition closeModal={setOpenModal} />}
    </>
  );
};

export default ButtonsAddProductToCard;
