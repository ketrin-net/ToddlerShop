import './NotFoundPage.scss';
import { BtnBlueWithLink } from '../../components/Buttons/Buttons';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="not-found-description">
      <span className="eror-cod">404</span>
      <h1>Страница не найдена</h1>
      <p>Мы не можем найти страницу, которую вы ищете. Она может быть еще не зарегестрирована или её не существует</p>
      <BtnBlueWithLink textBtn="На главную" url="/" />
    </div>
  );
};

export default NotFoundPage;
