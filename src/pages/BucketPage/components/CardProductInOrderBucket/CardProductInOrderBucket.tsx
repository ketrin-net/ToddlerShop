import './CardProductInOrderBucket.scss';
import { BasicPriceProduct } from '../../../../components/BasicPriceProduct/BasicPriceProduct';
import { Product } from '../../../../models/product';
import ButtonsAddOneUnit from '../../../../components/Buttons/ButtonsAddOneUnit/ButtonsAddOneUnit';
import React, { useState } from 'react';
import SwitchHeart from '../../../../components/SwitchHeart';
import iconTrash from '../../assets/iconTrash.svg';
import iconX from '../../assets/iconX.svg';


const CardProductInOrderBucket = (item: Product) => {
  const [deleteProduct, productValueChange] = useState(true);

  return (
    <>
      {deleteProduct && { productValueChange } ? (
        <div className="card-product-in-order">
          <img src={item.imgSrc} alt={item.imgAlt} className="poster" />
          <div className="info">
            <p className="title">{item.title}</p>
            <ButtonsAddOneUnit id={item.id} />
            <BasicPriceProduct cost={item.cost} />
            <div className="in-stock">
              {item.inStock ? <span className="in-stock true">В наличии</span> : <span className="in-stock false">Нет в наличии</span>}
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
            <p> Вы удалили {item.title}</p>
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
