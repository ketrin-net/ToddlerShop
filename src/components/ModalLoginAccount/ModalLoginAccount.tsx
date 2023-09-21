import './ModalLoginAccount.scss';
import { Link, useNavigate } from 'react-router-dom';
import { closeLoginModal } from '../../store/reducers/loginModalSlice';
import { currentUser, login, logout, selectIsAuthState } from '../../store/reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import iconClose from './assets/iconX.svg';

const ModalLoginAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuthState);

  const user = {
    email: 'ivan@gmail.com',
    password: 'sFe7&#ic',
  };

  return (
    <div className="modal-login-account">
      {!isAuth ? (
        <>
          <div className="registration">
            <Link to="/registration" onClick={() => dispatch(closeLoginModal())}>
              Регистрация
            </Link>
            <button className="icon-close" onClick={() => dispatch(closeLoginModal())}>
              <img src={iconClose} alt="iconClose" />
            </button>
          </div>
          <div className="line"></div>
          <form action="">
            <input type="text" placeholder="Электронный адрес" />
            <input type="text" placeholder="Пароль" />
            <div className="navigations">
              <input
                type="submin"
                value="Войти"
                className="btn blue"
                onClick={() => {
                  dispatch(login(user));
                  navigate('/contacts');
                }}
              />
              <Link to="/restore-password" onClick={() => dispatch(closeLoginModal())}>
                Забыли пароль?
              </Link>
            </div>
          </form>
        </>
      ) : (
        <>
          <button className="btn blue" onClick={() => dispatch(logout())}>
            Выйти
          </button>
            <button className="btn blue" onClick={() => dispatch(currentUser())}>
            user
          </button>
        </>
      )}
    </div>
  );
};

export default ModalLoginAccount;
