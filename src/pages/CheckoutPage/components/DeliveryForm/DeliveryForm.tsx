import './DeliveryForm.scss';
import { CheckoutForm } from '../interfaces/CheckoutForm';
import { EnumTypeDelivery } from '../enum/EnumTypeDelivery';
import { UseFormRegister, useForm } from 'react-hook-form';
import React from 'react';

interface DeliveryFormProps {
  typeDelivery: EnumTypeDelivery;
  register: UseFormRegister<CheckoutForm>;
}

const DeliveryForm = (props: DeliveryFormProps) => {
  const delivTransportCompany = props.typeDelivery === EnumTypeDelivery.transportCompany;
  const delivPostOffice = props.typeDelivery === EnumTypeDelivery.postOffice;
  const delivPickup = props.typeDelivery === EnumTypeDelivery.pickup;

  const register = props.register;

  return (
    <div className="delivery-form">
      {delivTransportCompany && (
        <div className="choice-company">
          <span className="title-input">Выбор транспортной компании</span>
        </div>
      )}
      <div className="choose-adress">
        <span className="title-input">Адрес получателя</span>
        {delivPostOffice && <input type="text" placeholder="Улица*" {...register('street')} className="in-street" />}
        {delivPostOffice && <input type="text" placeholder="Дом* " {...register('house')} className="in-house" />}
        {delivPostOffice && <input type="text" placeholder="Квартира*" {...register('apartment')} className="in-apart" />}
        <input type="text" placeholder="Фамилия и имя по паспорту*" {...register('name')} className="in-name" />
        <input type="text" placeholder="Электронная почта*" {...register('email')} className="in-email" />
        <input type="text" placeholder="Телефон*" {...register('phone')} className="in-phone" />
      </div>
      <div>
        <span className="title-input"> Способ оплаты </span>
        <div className="form_radio">
          <input id="radio-1" type="radio" value="Картой онлайн" {...register('methodPayment')} />
          <label htmlFor="radio-1">Картой онлайн</label>
        </div>
        <div className="form_radio">
          <input id="radio-2" type="radio" value="Наличными курьеру" {...register('methodPayment')} />
          <label htmlFor="radio-2">Наличными курьеру</label>
        </div>
        {delivPickup && (
          <div className="form_radio">
            <input id="radio-2-2" type="radio" value="Наличными при получении" {...register('methodPayment')} />
            <label htmlFor="radio-2-2">Наличными при получении</label>
          </div>
        )}
        <div className="form_radio">
          <input id="radio-3" type="radio" value="Онлайн-платежем PayPal" {...register('methodPayment')} />
          <label htmlFor="radio-3">Онлайн-платежем PayPal</label>
        </div>
      </div>
    </div>
  );
};

export default DeliveryForm;
