import './CheckoutPage.scss';
import { CheckoutForm } from './components/interfaces/CheckoutForm';
import { EnumTypeDelivery } from './components/enum/EnumTypeDelivery';
import { RegisterOptions, SubmitHandler, UseFormRegisterReturn, useForm } from 'react-hook-form';
import BtnDeliveryType from './components/BtnDeliveryType/BtnDeliveryType';
import DeliveryForm from './components/DeliveryForm/DeliveryForm';
import OrderComposition from './components/OrderComposition/OrderComposition';
import React, { useState } from 'react';
import TotalAmountPrice from '../CartPage/components/TotalAmountPrice/TotalAmountPrice';

const CheckoutPage = () => {
  const { register, handleSubmit, setValue } = useForm<CheckoutForm>();
  const [typeDelivery, setTypeDelivery] = useState(EnumTypeDelivery.transportCompany);

  const submit: SubmitHandler<CheckoutForm> = (forma) => {
    console.log(forma);
  };

  const setMethodReceiving = (value: EnumTypeDelivery) => {
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
            <button
              type="button"
              onClick={() => setMethodReceiving(EnumTypeDelivery.transportCompany)}
              className={typeDelivery !== EnumTypeDelivery.transportCompany ? 'btn white-delivery' : 'btn white-delivery-active'}
            >
              <BtnDeliveryType title={'Транспортной компанией'} description={'СДЕК, Деловые линии'} costDelivery={'Цена зависит от выбора ТК'} />
            </button>
            <button
              type="button"
              onClick={() => setMethodReceiving(EnumTypeDelivery.postOffice)}
              className={typeDelivery !== EnumTypeDelivery.postOffice ? 'btn white-delivery' : 'btn white-delivery-active'}
            >
              <BtnDeliveryType title={'Почтой'} description={'В ближайшее отделение почти России'} costDelivery={'Бесплатно'} />
            </button>
            <button
              type="button"
              onClick={() => setMethodReceiving(EnumTypeDelivery.pickup)}
              className={typeDelivery !== EnumTypeDelivery.pickup ? 'btn white-delivery' : 'btn white-delivery-active'}
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
