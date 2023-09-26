import './RegistrationPage.scss';
import * as yup from 'yup';
import { AppDispatch } from '../../store/store';
import { RegistrationSchema } from './schemes/RegistrationSchema';
import { SubmitHandler, useForm } from 'react-hook-form';
import { closeModalCommon, openModalCommon, selectisOpenModalInfo } from '../../store/reducers/commonModalWindowSlice';
import { registrationAuth } from '../../store/reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import CommonModalWindow from '../../components/CommonModalWindow/CommonModalWindow';
import React from 'react';

export type RegistrationForm = yup.InferType<typeof RegistrationSchema>;

const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatchApp = useDispatch<AppDispatch>();
  const dispatch = useDispatch();
  const commonModalActive = useSelector(selectisOpenModalInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationForm>({
    mode: 'onBlur',
    resolver: yupResolver(RegistrationSchema),
    defaultValues: {
      name: 'Владимир Владимирович',
      email: 'vovander666@yandex.ru',
      phone: '89994445566',
      password: 'qwertyui',
      passwordRepeat: 'qwertyui',
    },
  });

  const onSubmit: SubmitHandler<RegistrationForm> = (data) => {
    dispatch(openModalCommon());
    dispatchApp(
      registrationAuth({
        name: data.name,
        phone: data.phone,
        email: data.email,
        password: data.password,
      }),
    );
    setTimeout(() => {
      dispatch(closeModalCommon());
      navigate('/');
    }, 3000);
  };

  return (
    <div className="main registrationpage">
      {commonModalActive && (
        <CommonModalWindow>
          <span className="title">Регистрация прошла успешно!</span>
          <p>Приятных покупок.</p>
        </CommonModalWindow>
      )}
      <span className="header">Регистрация</span>
      <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
        <input type="text" placeholder="Имя" className={errors.name ? 'error' : ''} {...register('name')} />
        <input type="text" placeholder="8 999 999 99 99" className={errors.phone ? 'error' : ''} {...register('phone')} />
        <input type="text" placeholder="Электронный адрес" className={errors.email ? 'error' : ''} {...register('email')} />
        <input type="text" placeholder="Пароль" className={errors.password ? 'error' : ''} {...register('password')} />
        {/* {errors.password && <p className="error-text">{errors.password.message}</p>} */}
        <input type="text" placeholder="Повторите пароль" className={errors.passwordRepeat ? 'error' : ''} {...register('passwordRepeat')} />
        {/* {errors.passwordRepeat && <p className="error-text">{errors.passwordRepeat.message}</p>} */}
        <label className={errors.acceptancePrivacyPolicy ? 'form-checkbox error' : 'form-checkbox'}>
          <input className="checkbox-input" type="checkbox" {...register('acceptancePrivacyPolicy')} />
          <span className="checkbox-style"></span>
          Согласие с пользовательским соглашением и политикой конфиденциальности
        </label>
        <input type="submit" value="Зарегистрироваться" className="btn blue" />
      </form>
    </div>
  );
};

export default RegistrationPage;
