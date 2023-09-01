import { CSSTransition } from 'react-transition-group';
import ModalProductAddition from '../../ModalProductAddition/ModalProductAddition';
import React, { useState } from 'react';

const ButtonsAddProductToCard = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        className="btn blue"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        В корзину
      </button>

      <CSSTransition in={openModal} timeout={2000} classNames="modal-product-add" unmountOnExit onExited={() => setOpenModal(false)}>
        <ModalProductAddition closeModal={setOpenModal} />
      </CSSTransition>
    </>
  );
};

export default ButtonsAddProductToCard;
