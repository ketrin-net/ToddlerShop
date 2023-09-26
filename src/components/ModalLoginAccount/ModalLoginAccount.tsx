import './ModalLoginAccount.scss';
import { AppDispatch } from '../../store/store';
import { Link } from 'react-router-dom';
import { Path } from '../../enums/Path';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserLogIn } from '../../models/userLogin';
import { closeLoginModal } from '../../store/reducers/loginModalSlice';
import { loginAuth, logout, selectAllAuthState } from '../../store/reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import NavLinkAccount from './components/NavLinkAccount/NavLinkAccount';
import React from 'react';
import boxOrdersIcon from './assets/boxOrdersIcon.svg';
import heartFavouritesIcon from './assets/heartFavouritesIcon.svg';
import iconClose from './assets/iconX.svg';
import logoutIcon from './assets/logoutIcon.svg';
import photoAccountIcon from './assets/photoAccountIcon.svg';
import settingsIcon from './assets/settingsIcon.svg';

const ModalLoginAccount = () => {
  const dispatch = useDispatch<AppDispatch>();
  const authUser = useSelector(selectAllAuthState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogIn>({ defaultValues: { email: 'ivan@gmail.cam', password: 'sFe7&#ic' } });

  const onSubmit: SubmitHandler<UserLogIn> = (data) => {
    dispatch(loginAuth(data));
  };

  return (
    <div className="modal-login-account">
      {!authUser.isAuth ? (
        <>
          <div className="registration">
            <Link to={Path.RegistrationPage}>Регистрация</Link>
            <button onClick={() => dispatch(closeLoginModal())}>
              <img src={iconClose} alt="iconClose" />
            </button>
          </div>
          <div className="line"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Электронный адрес"
              {...register('email', { required: true, maxLength: 100, pattern: /@/ })}
              className={errors.email ? 'error' : ''}
            />
            <input
              type="text"
              placeholder="Пароль"
              {...register('password', { required: true, maxLength: 200 })}
              className={errors.password ? 'error' : ''}
            />
            {authUser.error !== null && <p className="error-auth">{authUser.error}</p>}
            <div className="navigations">
              <input type="submit" value="Войти" className="btn blue" />
              <Link to="/restore-password" onClick={() => dispatch(closeLoginModal())}>
                Забыли пароль?
              </Link>
            </div>
          </form>
        </>
      ) : (
        <>
          <button className="icon-close" onClick={() => dispatch(closeLoginModal())}>
            <img src={iconClose} alt="iconClose" />
          </button>
          <div className="user-info">
            <img src={photoAccountIcon} alt="" />
            <span className="name">{authUser.user?.name}</span>
            <span className="email">{authUser.user?.email}</span>
          </div>
          <nav>
            <NavLinkAccount icon={boxOrdersIcon} name={'Мои заказы'} linkTo={Path.OrdersPage} />
            <NavLinkAccount icon={heartFavouritesIcon} name={'Мое избранное'} linkTo={Path.FavoritesPage} />
            <NavLinkAccount icon={settingsIcon} name={'Настройки личных данных'} linkTo={Path.PersonalDataPage} />
            <button className="navlink-account" onClick={() => dispatch(logout())}>
              <img src={logoutIcon} alt="icon" />
              Выйти
            </button>
          </nav>
        </>
      )}
    </div>
  );
};

export default ModalLoginAccount;
