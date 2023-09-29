import './DeliveryForm.scss';
import { Cities, deliveryAddressesBusinessLines, deliveryAddressesCDEK } from '../../mokCities/DeliveryAddresses';
import { EnumCompanyDelivery } from '../../enum/EnumCompanyDelivery';
import { EnumMethodPayment } from '../../enum/EnumMethodPayment';
import { EnumTypeDelivery } from '../../enum/EnumTypeDelivery';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { NewOrderForm } from '../../NewOrderPage';
import { selectDeliveryCost } from '../../../CartPage/slice/cartSlice';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import moneyIconGray from '../../assets/moneyIconGray.svg';
import { Path } from '../../../../enums/Path';

interface DeliveryFormProps {
  typeDelivery: EnumTypeDelivery;
  cityDelivery: Cities;
  costDelivery: number;
  register: UseFormRegister<NewOrderForm>;
  errors: FieldErrors;
  setValue: UseFormSetValue<NewOrderForm>;
}

const DeliveryForm = (props: DeliveryFormProps) => {
  const { register, errors } = props;
  const [companyDelivery, setCompanyDelivery] = useState(EnumCompanyDelivery.CDEK);
  props.setValue('transportCompany', companyDelivery);

  const setNameCompanyDelivery = (value: EnumCompanyDelivery) => {
    setCompanyDelivery(value);
    props.setValue('transportCompany', companyDelivery);
  };

  const delivTransportCompany = props.typeDelivery === EnumTypeDelivery.TransportCompany;
  const delivPostOffice = props.typeDelivery === EnumTypeDelivery.PostOffice;
  const delivPickup = props.typeDelivery === EnumTypeDelivery.Pickup;

  return (
    <div className="delivery-form">
      {delivTransportCompany && (
        <div className="choose-company">
          <span className="title-input">Выбор транспортной компании</span>
          <div className="list">
            <button
              type="button"
              onClick={() => setNameCompanyDelivery(EnumCompanyDelivery.CDEK)}
              className={companyDelivery !== EnumCompanyDelivery.CDEK ? 'btn white-delivery' : 'btn white-delivery-active'}
            >
              <span>{EnumCompanyDelivery.CDEK}</span>
            </button>
            <button
              type="button"
              onClick={() => setNameCompanyDelivery(EnumCompanyDelivery.BusinessLines)}
              className={companyDelivery !== EnumCompanyDelivery.BusinessLines ? 'btn white-delivery' : 'btn white-delivery-active'}
            >
              <div>{EnumCompanyDelivery.BusinessLines}</div>
            </button>
          </div>
          <div className="cost-delivery">
            <span>Стоимость доставки:</span>
            <span className="price">
              {props.costDelivery} <img src={moneyIconGray} alt="" />
            </span>
          </div>
          <label htmlFor="adress-select" className="adress-select">
            Выберите пункт выдачи заказа
          </label>
          <select id="adress-select" {...register('pointsOfDelivery')}>
            {companyDelivery === EnumCompanyDelivery.CDEK
              ? deliveryAddressesCDEK
                  .filter((item) => item.key === props.cityDelivery)
                  ?.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.value}
                    </option>
                  ))
              : deliveryAddressesBusinessLines
                  .filter((item) => item.key === props.cityDelivery)
                  ?.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.value}
                    </option>
                  ))}
          </select>
        </div>
      )}
      <div className="choose-adress">
        <span className="title-input">Адрес получателя</span>
        {!delivTransportCompany && (
          <input type="text" placeholder="Улица*" {...register('street')} className={errors.street ? 'in-street error' : 'in-street'} />
        )}
        {!delivTransportCompany && (
          <input type="text" placeholder="Дом* " {...register('house')} className={errors.house ? 'in-house error' : 'in-house'} />
        )}
        {!delivTransportCompany && (
          <input type="text" placeholder="Квартира*" {...register('apartment')} className={errors.apartment ? 'in-apart error' : 'in-apart'} />
        )}
        <input type="text" placeholder="Фамилия и имя по паспорту*" {...register('name')} className={errors.name ? 'in-name error' : 'in-name'} />
        <input type="text" placeholder="Электронная почта*" {...register('email')} className={errors.email ? 'in-email error' : 'in-email'} />
        <input type="text" placeholder="8 999 999 99 99*" {...register('phone')} className={errors.phone ? 'in-phone error' : 'in-phone'} />
      </div>
      {!delivPickup && (
        <div className="adress-pickup">
          <span className="title-input">Пункт выдачи</span>
          <div className="adress">
            <span>Адрес</span>
            <p>Дворцовая пл., 2, Санкт-Петербург</p>
          </div>
          <div className="phone">
            <span>Телефон</span>
            <p>+7 (812) 710-90-79</p>
          </div>
          <Link to={Path.ContactsPage}>Контакты</Link>
        </div>
      )}
      <div className="choose-payment-method">
        <span className="title-input">Способ оплаты</span>
        <div className="form-radio">
          <input id="radio-1" type="radio" value={EnumMethodPayment.CardOnline} {...register('paymentMethod')} />
          <label htmlFor="radio-1">{EnumMethodPayment.CardOnline}</label>
        </div>
        <div className="form-radio">
          <input id="radio-2" type="radio" value={EnumMethodPayment.CashToCourier} {...register('paymentMethod')} disabled={delivTransportCompany} />
          <label htmlFor="radio-2">{EnumMethodPayment.CashToCourier}</label>
        </div>
        {delivPickup && (
          <div className="form-radio">
            <input id="radio-2-2" type="radio" value={EnumMethodPayment.CashUponReceipt} {...register('paymentMethod')} />
            <label htmlFor="radio-2-2">{EnumMethodPayment.CashUponReceipt}</label>
          </div>
        )}
        <div className="form-radio">
          <input id="radio-3" type="radio" value={EnumMethodPayment.PayPal} {...register('paymentMethod')} />
          <label htmlFor="radio-3">{EnumMethodPayment.PayPal}</label>
        </div>
      </div>
    </div>
  );
};

export default DeliveryForm;
