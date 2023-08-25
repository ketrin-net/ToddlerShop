import React from 'react';
import './Title.scss';
import { BtnBlue } from '../../../../components/Buttons/Buttons';

export const Title = () => {
    return (
        <div className="title-homepage">
            <div className="section">
                <h1>Все самое необходимое для вашего ребенка</h1>
                <span>Посмотрите нашу новую подборку для ухода за вашим ребенком</span>
                <BtnBlue textBtn='Смотреть' />
                <img src="" alt="" />
            </div>
        </div>
    );
};