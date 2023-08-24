import React from 'react';
import './ProductCard.scss';
import { BtnIntoBscket } from '../Buttons/Buttons';
import { Link } from 'react-router-dom';
import moneyIcon from './assets/moneyIcon.svg';
import moneyIconGray from './assets/moneyIconGray.svg';
import vectorOldPrice from './assets/vectorOldPrice.svg';
import SwitchHeart from '../SwitchHeart';


interface ProductCardProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    cost: number;
    oldCost?: number;
    iconNew?: boolean;
}

export const ProductCard = ({ imgSrc, imgAlt, title, cost, oldCost, iconNew }: ProductCardProps) => {
    return (
        <div className='product-card'>
            <SwitchHeart />
            {iconNew && <div className='icon-new'>NEW</div>}
            <img src={imgSrc} alt={imgAlt} className="poster" />
            <p className="title">{title}</p>
            <div className="prise">
                <span>{cost}</span>
                <img src={moneyIcon} alt="moneyIcon"/>
                {oldCost && 
                    <div className="old-price">
                    <span>{oldCost}</span>
                    <img src={moneyIconGray} alt="moneyIconGray" />
                    </div>
                }
            </div>
            <BtnIntoBscket  />
            <Link to="/orders" className='buyClick'>Купить в один клик</Link>
        </div>
    );
};