import './ModalProductAddition.scss';
import { BasicPriceProduct } from '../BasicPriceProduct/BasicPriceProduct';
import { Link } from 'react-router-dom';
import ButtonsAddOneUnit from '../Buttons/ButtonsAddOneUnit/ButtonsAddOneUnit';
import React from 'react';
import iconClose from './assets/iconX.svg';
import photo from './assets/mokphoto.png';

interface ModalProductAdditionProps {
  closeModal: (key: boolean) => void;
}

const ModalProductAddition = ({ closeModal }: ModalProductAdditionProps) => {
  setTimeout(() => closeModal(false), 3000);

  return (
    <div className="modal-product-add">
      <span className="header">Товар добавлен в корзину</span>
      <button className="icon-close" onClick={() => closeModal(false)}>
        <img src={iconClose} alt="iconClose" />
      </button>
      <img src={photo} alt="" className="poster" />
      <div>
        <p className="description">Коляска CYBEX PRIAM LUX JEREMY SCOTT SPECIAL EDITION 2 В 1 на раме TREKKING</p>
        <BasicPriceProduct cost={152000} />
      </div>
      <ButtonsAddOneUnit />
      <Link to="/" className="btn white">
        Перейти в корзину
      </Link>
    </div>
  );
};

export default ModalProductAddition;
