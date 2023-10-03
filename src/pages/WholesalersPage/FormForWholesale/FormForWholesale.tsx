import './FormForWholesale.scss';
import * as yup from 'yup';
import { Cities } from '../../NewOrderPage/mokCities/DeliveryAddresses';
import { SubmitHandler, useForm } from 'react-hook-form';
import { WholesaleSchema } from './schemes/WholesaleSchema';
import { closeModalCommon, openModalCommon, selectisOpenModalInfo } from '../../../store/slices/commonModalWindowSlice';
import { selectAuthUser } from '../../../store/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import CommonModalWindow from '../../../components/CommonModalWindow/CommonModalWindow';
import React from 'react';

export type NewWholesaleForm = yup.InferType<typeof WholesaleSchema>;

const FormForWholesale = () => {
  const dispatch = useDispatch();
  const commonModalActive = useSelector(selectisOpenModalInfo);
  const currentUser = useSelector(selectAuthUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewWholesaleForm>({
    mode: 'onBlur',
    resolver: yupResolver(WholesaleSchema),
    defaultValues: {
      name: currentUser?.name,
      email: currentUser?.email,
      phone: currentUser?.phone,
    },
  });

  const onSubmit: SubmitHandler<NewWholesaleForm> = (data) => {
    dispatch(openModalCommon());
    setTimeout(() => dispatch(closeModalCommon()), 3000);
    reset();
  };

  return (
    <>
      {commonModalActive && (
        <CommonModalWindow>
          <span className="title">Спасибо!</span>
          <p>В скором времени вам на указанный электронный адрес придет документ с условиями.</p>
        </CommonModalWindow>
      )}
      <form onSubmit={handleSubmit(onSubmit)} id="form-for-wholesale">
        <input type="text" placeholder="Имя" className={errors.name ? 'error' : ''} {...register('name')} />
        <input type="text" placeholder="Телефон" className={errors.phone ? 'error' : ''} {...register('phone')} />
        <input type="email" placeholder="Электронный адрес" className={errors.phone ? 'error' : ''} {...register('email')} />
        <select id="cities" className={errors.city ? 'error in-city' : 'in-city'} {...register('city')}>
          {Object.values(Cities).map((item, key) => (
            <option key={key} value={item}>
              {item}
            </option>
          ))}
        </select>
        <label className={errors.agreement ? 'form-checkbox error' : 'form-checkbox'}>
          <input className="checkbox-input" type="checkbox" {...register('agreement')} />
          <span className="checkbox-style"></span>
          Соглашение на обработку данных и пользовательское соглашение
        </label>
        <input type="submit" value="Отправить" className="btn blue" />
      </form>
    </>
  );
};

export default FormForWholesale;
