import React from 'react';
import './ProductCard.scss';
import { BtnIntoBscket } from '../Buttons/Buttons';
import { Link } from 'react-router-dom';
import moneyIcon from './assets/moneyIcon.svg';

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
            <img src={imgSrc} alt={imgAlt} className="poster" />
            <p className="title">{title}</p>
            <div className="prise">
                <span>{cost}</span>
                <img src={moneyIcon} alt="moneyIcon"/>
                {oldCost && <span className="old-prise">{oldCost}</span>}
            </div>
            <BtnIntoBscket  />
            <Link to="/orders" className='buyClick'>Купить в один клик</Link>
        </div>
    );
};