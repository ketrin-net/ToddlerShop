import './ModalLoginAccount.scss';
import { AppDispatch } from '../../store/store';
import { Link } from 'react-router-dom';
import { Path } from '../../enums/Path';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserLogIn } from '../../models/userLogin';
import { closeLoginModal } from '../../store/reducers/loginModalSlice';
import { loginAuth, logout, selectAllAuthState } from '../../store/reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from '../../customHooks/useMediaQuery';
import AuthAccount from './components/AuthAccount/AuthAccount';
import React from 'react';
import iconClose from './assets/iconX.svg';

const ModalLoginAccount = () => {
  const matches = useMediaQuery('(max-width: 900px)');
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
    <>
      {!authUser.isAuth ? (
        <>
          <div className="modal-login-account">
            <div className="registration">
              <Link to={Path.RegistrationPage}>Регистрация</Link>
              <button onClick={() => dispatch(closeLoginModal())}>
                <img src={iconClose} alt="iconClose" />
              </button>
            </div>
            <div className="line"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
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
                <Link to={Path.RestorePasswordPage} onClick={() => dispatch(closeLoginModal())}>
                  Забыли пароль?
                </Link>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>{matches ? <></> : <AuthAccount />}</>
      )}
    </>
  );
};

export default ModalLoginAccount;
