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
      {openModal && <ModalProductAddition closeModal={setOpenModal} />}
    </>
  );
};

export default ButtonsAddProductToCard;
