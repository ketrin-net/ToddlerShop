import './AuthAccount.scss';
import { AppDispatch } from '../../../../store/store';
import { Path } from '../../../../enums/Path';
import { closeLoginModal } from '../../../../store/slices/loginModalSlice';
import { logout, selectAllAuthState } from '../../../../store/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import NavLinkAccount from '../NavLinkAccount/NavLinkAccount';
import React from 'react';
import boxOrdersIcon from '../../assets/boxOrdersIcon.svg';
import heartFavouritesIcon from '../../assets/heartFavouritesIcon.svg';
import iconClose from '../../assets/iconX.svg';
import logoutIcon from '../../assets/logoutIcon.svg';
import photoAccountIcon from '../../assets/photoAccountIcon.svg';
import settingsIcon from '../../assets/settingsIcon.svg';

interface AuthAccountProps {
  closeModal?: () => void;
}

const AuthAccount = ({ closeModal }: AuthAccountProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const authUser = useSelector(selectAllAuthState);

  return (
    <div className="modal-login-account">
      <button className="icon-close" onClick={() => dispatch(closeLoginModal())}>
        <img src={iconClose} alt="iconClose" />
      </button>
      <div className="user-info">
        <img src={photoAccountIcon} alt="" />
        <span className="name">{authUser.user?.name}</span>
        <span className="email">{authUser.user?.email}</span>
      </div>
      <nav>
        <NavLinkAccount icon={boxOrdersIcon} name={'Мои заказы'} linkTo={Path.OrdersPage} closeModal={closeModal} />
        <NavLinkAccount icon={settingsIcon} name={'Настройки личных данных'} linkTo={Path.PersonalDataPage} closeModal={closeModal} />
        <button className="navlink-account" onClick={() => dispatch(logout())}>
          <img src={logoutIcon} alt="icon" />
          Выйти
        </button>
      </nav>
    </div>
  );
};

export default AuthAccount;
