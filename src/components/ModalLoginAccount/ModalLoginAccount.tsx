import './ModalLoginAccount.scss';
import { AppDispatch } from '../../store/store';
import { Link, useNavigate } from 'react-router-dom';
import { Path } from '../../enums/Path';
import { User } from '../../models/user';
import { UserLogIn } from '../../models/userLogin';
import { closeLoginModal } from '../../store/reducers/loginModalSlice';
import { currentUser, currentUserAuth, login, loginAuth, logout, selectAllAuthState, selectIsAuthState } from '../../store/reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import iconClose from './assets/iconX.svg';

const ModalLoginAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const authUser = useSelector(selectAllAuthState);

  const loginUser: UserLogIn = {
    email: '',
    password: '',
  };

  // const loginFunct = () => {
  //   loginUser 
  // }

  return (
    <div className="modal-login-account">
      {/* {!authUser.isAuth ? (
        <>
          <div className="registration">
            <Link to={Path.RegistrationPage} onClick={() => dispatch(closeLoginModal())}>
              Регистрация
            </Link>
            <button className="icon-close" onClick={() => dispatch(closeLoginModal())}>
              <img src={iconClose} alt="iconClose" />
            </button>
          </div>
          <div className="line"></div>
          <form onSubmit={() => dispatch(loginAuth(user))}>
            <input type="text" placeholder="Электронный адрес" />
            <input type="text" placeholder="Пароль" />
            <div className="navigations">
              <input type="submin" value="Войти" className="btn blue" />
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
      )} */}
    </div>
  );
};

export default ModalLoginAccount;
