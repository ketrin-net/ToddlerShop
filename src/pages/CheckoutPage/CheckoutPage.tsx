import './CheckoutPage.scss';
import { CheckoutForm } from './components/interfaces/CheckoutForm';
import { RegisterOptions, SubmitHandler, UseFormRegisterReturn, useForm } from 'react-hook-form';
import BtnDeliveryType from './components/BtnDeliveryType/BtnDeliveryType';
import DeliveryForm from './components/DeliveryForm/DeliveryForm';
import OrderComposition from './components/OrderComposition/OrderComposition';
import React, { useState } from 'react';
import TotalAmountPrice from '../CartPage/components/TotalAmountPrice/TotalAmountPrice';

const CheckoutPage = () => {
  const { register, handleSubmit, setValue } = useForm<CheckoutForm>();
  const [typeDelivery, setTypeDelivery] = useState('transportCompany');

  const submit: SubmitHandler<CheckoutForm> = (forma) => {
    console.log(forma);
  };

  const setMethodReceiving = (value: string) => {
    setTypeDelivery(value);
    setValue('methodReceiving', value);
  };

  return (
    <div className="main-checkoutpage">
      <div className="checkout-info">
        <span className="header">Оформление заказа</span>
        <OrderComposition />
        <form onSubmit={handleSubmit(submit)} className="checkout-form">
          <label className="title-input">
            Город получателя <br /> <input placeholder="Населенный пункт" type="text" {...register('city')} className="in-city" />
          </label>
          <div className="choose-delivery-type">
            <button type="button" onClick={() => setMethodReceiving('transportCompany')} className="btn white-delivery">
              <BtnDeliveryType title={'Транспортной компанией'} description={'СДЕК, Деловые линии'} costDelivery={'Цена зависит от выбора ТК'} />
            </button>
            <button
              type="button"
              onClick={() => {
                setTypeDelivery('postOffice');
                setValue('methodReceiving', 'postOffice');
              }}
              className="btn white-delivery"
            >
              <BtnDeliveryType title={'Почтой'} description={'В ближайшее отделение почти России'} costDelivery={'Бесплатно'} />
            </button>
            <button
              type="button"
              onClick={() => {
                setTypeDelivery('pickup');
                setValue('methodReceiving', 'pickup');
              }}
              className="btn white-delivery"
            >
              <BtnDeliveryType title={'Самовывоз'} description={'В пункте выдачи'} costDelivery={'Бесплатно'} />
            </button>
          </div>
          <DeliveryForm typeDelivery={typeDelivery} register={register} />
          <label className="title-input">
            Дополнительно <br /> <textarea placeholder="Комментарий к заказу" {...register('comment')} className="in-comment" />
          </label>
          <input type="submit" value="Подтвердить заказ" className="btn blue" />
        </form>
      </div>
      <TotalAmountPrice />
    </div>
  );
};

export default CheckoutPage;
