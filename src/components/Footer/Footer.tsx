import { Link } from 'react-router-dom';
import React from 'react';
import './Footer.scss';
import Logo from './assets/footer-logo.png';
import WhatsappLogo from './assets/bx_bxl-whatsapp.png';
import FbLogo from './assets/fb.png';
import InstaLogo from './assets/ant-design_instagram-outlined.png';
import VkLogo from './assets/vk.png';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="logo-section">
          <img src={Logo} alt={'logo'} />
          <div className="footer-logo description">
            Онлайн гипермаркет
            <br />
            товаров для детей
          </div>
        </div>
        <div className="footer-links">
          <Link to="/about" className="click">
            О нас
          </Link>
          <Link to="/promos" className="click">
            Акции
          </Link>
          <Link to="/blog" className="click">
            Блог
          </Link>
          <Link to="/contacts" className="click">
            Контакты
          </Link>
        </div>
        <div className="footer-links2">
          <Link to="/return-goods" className="click">
            Возврат и гарантия
          </Link>
          <Link to="/return-goods" className="click">
            Оплата и доставка
          </Link>
        </div>
        <div className="footer-links3">
          <Link to="/wholesalers" className="click">
            {' '}
            Оптовым клиентам
          </Link>
        </div>
        <div className="footer-social-media click">
          Мы в социальных сетях
          <div className="social-media">
            <img className="item" src={VkLogo} alt={'VKontakte'} />
            <img className="item" src={InstaLogo} alt={'Instagram'} />
            <img className="item" src={FbLogo} alt={'Facebook'} />
            <img className="item" src={WhatsappLogo} alt={'whatsApp'} />
          </div>
        </div>
      </div>
      <div className="footer-rights">
        <div className="date click"> Ⓒ 2020 karapuz05.ru </div>
        <div className="agreement">
          <Link to="/" className="click">
            Пользовательское соглашение / политика конфиденциальности
          </Link>
        </div>
      </div>
    </div>
  );
};
