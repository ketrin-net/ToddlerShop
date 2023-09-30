import './RestorePasswordPage.scss';
import { Link } from 'react-router-dom';
import { Path } from '../../enums/Path';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

type RestorePasswordForm = {
  email: string;
};

const RestorePasswordPage = () => {
  const dispatch = useDispatch();
  const [isSentRequest, setIsSentRequest] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RestorePasswordForm>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<RestorePasswordForm> = (data) => {
    setIsSentRequest(true);
  };

  return (
    <div className="main restore-password-page">
      {isSentRequest ? (
        <>
          <span className="header">Спасибо</span>
          <p>Письмо с инструкцией по восстановлению пароля мы отправили на Ваш электронный адрес</p>
          <Link to={Path.HomePage} className="btn blue">
            На главную
          </Link>
        </>
      ) : (
        <>
          <span className="header">Восстановление пароля</span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Ваш электронный адрес"
              className={errors.email ? 'error' : ''}
              {...register('email', { required: true, maxLength: 100, pattern: /@/ })}
            />
            <input type="submit" value="Восстановить пароль" className="btn blue" />
          </form>
        </>
      )}
    </div>
  );
};

export default RestorePasswordPage;
