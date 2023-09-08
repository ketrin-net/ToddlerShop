import './CardProductInOrderBucket.scss';
import { BasicPriceProduct } from '../../../../components/BasicPriceProduct/BasicPriceProduct';
import ButtonsAddOneUnit from '../../../../components/Buttons/ButtonsAddOneUnit/ButtonsAddOneUnit';
import React, { useState } from 'react';
import SwitchHeart from '../../../../components/SwitchHeart';
import iconTrash from '../../assets/iconTrash.svg';
import iconX from '../../assets/iconX.svg';

interface CardProductInOrderBucketProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  cost: number;
  inStock: boolean;
}

const CardProductInOrderBucket = ({ imgSrc, imgAlt, title, cost, inStock }: CardProductInOrderBucketProps) => {
  const [deleteProduct, productValueChange] = useState(true);

  return (
    <>
      {deleteProduct && { productValueChange } ? (
        <div className="card-product-in-order">
          <img src={imgSrc} alt={imgAlt} className="poster" />
          <div className="info">
            <p className="title">{title}</p>
            <ButtonsAddOneUnit />
            <BasicPriceProduct cost={cost} />
            <div className="in-stock">
              {inStock ? <span className="in-stock true">В наличии</span> : <span className="in-stock false">Нет в наличии</span>}
            </div>
          </div>
          <div className="interaction-panel">
            <SwitchHeart />
            <button onClick={() => productValueChange(false)}>
              <img src={iconTrash} alt="iconTrash" />
            </button>
          </div>
        </div>
      ) : (
        <div className="card-product-in-order delete">
          <p> Вы удалили {title}</p>
          <button className="cancel" onClick={() => productValueChange(true)}>
            Отменить
          </button>
          <button>
            <img src={iconX} alt="iconX" />
          </button>
        </div>
      )}
    </>
  );
};

export default CardProductInOrderBucket;
