import './СontactsInfo.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import fbIcon from '../../../../assets/facebook-icon.svg';
import instaIcon from '../../../../assets/instagram-icon.svg';
import vkIcon from '../../../../assets/vk-icon.svg';
import whAppIcon from '../../../../assets//whatsapp-icon.svg';

const СontactsInfo = () => {
  return (
    <div id="all-contacts">
      <section className="adress">
        <span className="caption">Адрес</span>
        <p>Дворцовая пл., 2, Санкт-Петербург</p>
      </section>
      <section className="phone">
        <span className="caption">Телефон</span>
        <p>+7 (812) 710-90-79</p>
      </section>
      <section className="email">
        <span className="caption">Электронный адрес</span>
        <p>chancery@hermitage.ru</p>
      </section>
      <section className="social-networks">
        <span className="caption">Мы в социальных сетях</span>
        <div className="list-icons">
          <Link to={'https://www.youtube.com/@thehermitagemuseum/videos'} target="_blank">
            <img src={instaIcon} alt="" />
          </Link>
          <Link to={'https://www.youtube.com/@thehermitagemuseum/videos'} target="_blank">
            <img src={whAppIcon} alt="" />
          </Link>
          <Link to={'https://vk.com/hermitage_museum'} target="_blank">
            <img src={vkIcon} alt="" />
          </Link>
          <Link to={'https://www.youtube.com/@thehermitagemuseum/videos'} target="_blank">
            <img src={fbIcon} alt="" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default СontactsInfo;
