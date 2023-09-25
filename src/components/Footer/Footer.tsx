import { Link } from 'react-router-dom';
import React from 'react';
import './Footer.scss';
import Logo from './assets/footer-logo.png';
import WhatsappLogo from './assets/bx_bxl-whatsapp.png';
import FbLogo from './assets/fb.png';
import InstaLogo from './assets/ant-design_instagram-outlined.png';
import VkLogo from './assets/vk.png';
import { Path } from '../../enums';

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
          <Link to={Path.AboutUsPage} className="click">
            О нас
          </Link>
          <Link to={Path.PromosPage} className="click">
            Акции
          </Link>
          <Link to={Path.BlogsPage} className="click">
            Блог
          </Link>
          <Link to={Path.ContactsPage} className="click">
            Контакты
          </Link>
        </div>
        <div className="footer-links2">
          <Link to={Path.ReturnGoodsPage} className="click">
            Возврат и гарантия
          </Link>
          <Link to={Path.PaymentPage} className="click">
            Оплата и доставка
          </Link>
        </div>
        <div className="footer-links3">
          <Link to={Path.WholesalersPage} className="click">
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
        <div className="date click"> Ⓒ 2023 karapuz05.ru </div>
        <div className="agreement">
          <Link to="/" className="click">
            Пользовательское соглашение / политика конфиденциальности
          </Link>
        </div>
      </div>
    </div>
  );
};
