import './NewOrderPage.scss';
import * as yup from 'yup';
import { Cities, deliveryAddressesCDEK } from './mokCities/DeliveryAddresses';
import { CreateOrderSchema } from './schemes/CreateOrderSchema';
import { EnumTypeDelivery } from './enum/EnumTypeDelivery';
import { RegisterOptions, SubmitHandler, UseFormRegisterReturn, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import BtnDeliveryType from './components/BtnDeliveryType/BtnDeliveryType';
import DeliveryForm from './components/DeliveryForm/DeliveryForm';
import React, { useState } from 'react';
import TotalAmountPrice from '../CartPage/components/TotalAmountPrice/TotalAmountPrice';
import OrderComposition from './components/OrderComposition/OrderComposition';

export type NewOrderForm = yup.InferType<typeof CreateOrderSchema>;

const NewOrderPage = () => {
  const [typeDelivery, setTypeDelivery] = useState(EnumTypeDelivery.transportCompany);
  const [cityDelivery, setCityDelivery] = useState<Cities>(Cities.Moscow);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<NewOrderForm>({ mode: 'onBlur', resolver: yupResolver(CreateOrderSchema) });

  const setMethodReceiving = (value: EnumTypeDelivery) => {
    setTypeDelivery(value);
    setValue('methodReceiving', value);
  };

  const onSubmit: SubmitHandler<NewOrderForm> = (data) => {
    console.log(data);
  };

  return (
    <div className="main-checkoutpage">
      <div className="checkout-info">
        <span className="header">Оформление заказа</span>
        <OrderComposition />
        <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
          <label className="title-input">
            Город получателя <br />
            <input
              placeholder="Населенный пункт"
              list="cities"
              type="text"
              {...register('city')}
              className={errors.city ? 'error in-city' : 'in-city'}
              onChange={(event) => setCityDelivery(event.target.value as unknown as Cities)}
            />
            <datalist id="cities">
              {Object.values(Cities).map((item) => (
                <option value={item} />
              ))}
            </datalist>
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
          <DeliveryForm typeDelivery={typeDelivery} register={register} errors={errors} setValue={setValue} cityDelivery={cityDelivery} />
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

export default NewOrderPage;
