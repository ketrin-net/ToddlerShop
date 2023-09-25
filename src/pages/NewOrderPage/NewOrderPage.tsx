import './NewOrderPage.scss';
import * as yup from 'yup';
import { Cities, deliveryAddressesCDEK } from './mokCities/DeliveryAddresses';
import { EnumMethodPayment } from './enum/EnumMethodPayment';
import { EnumTypeDelivery } from './enum/EnumTypeDelivery';
import { SubmitHandler, UseFormRegisterReturn, useForm } from 'react-hook-form';
import { closeModalCommon, openModalCommon, selectisOpenModalInfo } from '../../store/reducers/commonModalWindowSlice';
import { createOrderSchema } from './schemes/CreateOrderSchema';
import { selectDeliveryCost } from '../../store/reducers/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import BtnDeliveryType from './components/BtnDeliveryType/BtnDeliveryType';
import CommonModalWindow from '../../components/CommonModalWindow/CommonModalWindow';
import DeliveryForm from './components/DeliveryForm/DeliveryForm';
import OrderComposition from './components/OrderComposition/OrderComposition';
import React, { useState } from 'react';
import TotalAmountPrice from '../CartPage/components/TotalAmountPrice/TotalAmountPrice';
import iconSend from '../../assets/iconSend.svg';

export type NewOrderForm = yup.InferType<typeof createOrderSchema>;

const NewOrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const commonModalActive = useSelector(selectisOpenModalInfo);
  const [typeDelivery, setTypeDelivery] = useState(EnumTypeDelivery.TransportCompany);
  const [cityDelivery, setCityDelivery] = useState<Cities>(Cities.Moscow);
  const costDelivery = useSelector(selectDeliveryCost);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<NewOrderForm>({
    mode: 'onBlur',
    resolver: yupResolver(createOrderSchema),
    defaultValues: { paymentMethod: EnumMethodPayment.CardOnline, mailingApproval: true },
  });

  const setMethodReceiving = (value: EnumTypeDelivery) => {
    setTypeDelivery(value);
    setValue('receivingMethod', value);
  };

  const onSubmit: SubmitHandler<NewOrderForm> = (data) => {
    dispatch(openModalCommon());
    setTimeout(() => {
      dispatch(closeModalCommon());
      navigate('/');
    }, 5000);
  };

  return (
    <>
      {commonModalActive && (
        <CommonModalWindow>
          <img src={iconSend} alt="iconSend" />
          <span className="title">Спасибо за заказ!</span>
          <p>Счет на оплату придет по адрессу </p>
        </CommonModalWindow>
      )}
      <div className="main checkoutpage">
        <span className="header">Оформление заказа</span>
        <div className="checkout-info">
          <div className="new-order-form">
            <OrderComposition />
            <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
              <label htmlFor="cities" className="title-input">
                Город получателя <br />
                <select
                  id="cities"
                  className={errors.city ? 'error in-city' : 'in-city'}
                  {...register('city')}
                  onChange={(event) => setCityDelivery(event.target.value as unknown as Cities)}
                >
                  {Object.values(Cities).map((item, key) => (
                    <option key={key} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <div className="choose-delivery-type">
                <span className="title-input">Способ получения</span>
                <div className="list">
                  <button
                    type="button"
                    onClick={() => setMethodReceiving(EnumTypeDelivery.TransportCompany)}
                    className={typeDelivery !== EnumTypeDelivery.TransportCompany ? 'btn white-delivery' : 'btn white-delivery-active'}
                  >
                    <BtnDeliveryType
                      title={'Транспортной компанией'}
                      description={'СДЕК, Деловые линии'}
                      costDelivery={'Цена зависит от выбора ТК'}
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => setMethodReceiving(EnumTypeDelivery.PostOffice)}
                    className={typeDelivery !== EnumTypeDelivery.PostOffice ? 'btn white-delivery' : 'btn white-delivery-active'}
                  >
                    <BtnDeliveryType title={'Почтой'} description={'В ближайшее отделение почти России'} costDelivery={'Бесплатно'} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setMethodReceiving(EnumTypeDelivery.Pickup)}
                    className={typeDelivery !== EnumTypeDelivery.Pickup ? 'btn white-delivery' : 'btn white-delivery-active'}
                  >
                    <BtnDeliveryType title={'Самовывоз'} description={'В пункте выдачи'} costDelivery={'Бесплатно'} />
                  </button>
                </div>
              </div>
              <DeliveryForm
                costDelivery={costDelivery}
                typeDelivery={typeDelivery}
                register={register}
                errors={errors}
                setValue={setValue}
                cityDelivery={cityDelivery}
              />
              <label className="title-input">
                Дополнительно <br /> <textarea placeholder="Комментарий к заказу" {...register('comment')} className="in-comment" />
              </label>
              <label className="form-checkbox">
                <input className="checkbox-input" type="checkbox" {...register('mailingApproval')} />
                <span className="checkbox-style"></span>
                Сообщать мне об акциях и скидках
              </label>
              <input type="submit" value="Подтвердить заказ" className="btn blue" />
            </form>
          </div>
          <TotalAmountPrice costDelivery={costDelivery} />
        </div>
      </div>
    </>
  );
};

export default NewOrderPage;
