import './DeliveryForm.scss';
import { Cities, deliveryAddressesBusinessLines, deliveryAddressesCDEK } from '../../mokCities/DeliveryAddresses';
import { EnumCompanyDelivery } from '../../enum/EnumCompanyDelivery';
import { EnumMethodPayment } from '../../enum/EnumMethodPayment';
import { EnumTypeDelivery } from '../../enum/EnumTypeDelivery';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { NewOrderForm } from '../../NewOrderPage';
import { error } from 'console';
import React, { useState } from 'react';

interface DeliveryFormProps {
  typeDelivery: EnumTypeDelivery;
  cityDelivery: Cities;
  register: UseFormRegister<NewOrderForm>;
  errors: FieldErrors;
  setValue: UseFormSetValue<NewOrderForm>;
}

const DeliveryForm = (props: DeliveryFormProps) => {
  const register = props.register;
  const errors = props.errors;
  const [companyDelivery, setCompanyDelivery] = useState(EnumCompanyDelivery.CDEK);

  const setNameCompanyDelivery = (value: EnumCompanyDelivery) => {
    setCompanyDelivery(value);
    props.setValue('transportCompany', value);
  };

  const delivTransportCompany = props.typeDelivery === EnumTypeDelivery.transportCompany;
  const delivPostOffice = props.typeDelivery === EnumTypeDelivery.postOffice;
  const delivPickup = props.typeDelivery === EnumTypeDelivery.pickup;

  return (
    <div className="delivery-form">
      {delivTransportCompany && (
        <div className="choice-company">
          <span className="title-input">Выбор транспортной компании</span>
          <button
            type="button"
            onClick={() => setNameCompanyDelivery(EnumCompanyDelivery.CDEK)}
            className={companyDelivery !== EnumCompanyDelivery.CDEK ? 'btn white-delivery' : 'btn white-delivery-active'}
          >
            <div>{EnumCompanyDelivery.CDEK}</div>
          </button>
          <button
            type="button"
            onClick={() => setNameCompanyDelivery(EnumCompanyDelivery.BusinessLines)}
            className={companyDelivery !== EnumCompanyDelivery.BusinessLines ? 'btn white-delivery' : 'btn white-delivery-active'}
          >
            <div>{EnumCompanyDelivery.BusinessLines}</div>
          </button>
          <input placeholder="Выберите пункт выдачи заказа" list="points" type="text" {...register('pointsOfDelivery')} />
          <datalist id="points">
            {companyDelivery === EnumCompanyDelivery.CDEK
              ? deliveryAddressesCDEK.filter(item => item.key === props.cityDelivery)?.map((item) => <option value={item.value} />)
              : deliveryAddressesBusinessLines.filter(item => item.key === props.cityDelivery)?.map((item) => <option value={item.value} />)}
          </datalist>
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
        <input type="text" placeholder="+7 999 999 99 99*" {...register('phone')} className={errors.phone ? 'in-phone error' : 'in-phone'} />
      </div>
      <div>
        <span className="title-input"> Способ оплаты </span>
        <div className="form_radio">
          <input id="radio-1" type="radio" value={EnumMethodPayment.cardOnline} checked {...register('methodPayment')} />
          <label htmlFor="radio-1">{EnumMethodPayment.cardOnline}</label>
        </div>
        <div className="form_radio">
          <input id="radio-2" type="radio" value={EnumMethodPayment.cashToCourier} {...register('methodPayment')} disabled={delivTransportCompany} />
          <label htmlFor="radio-2">{EnumMethodPayment.cashToCourier}</label>
        </div>
        {delivPickup && (
          <div className="form_radio">
            <input id="radio-2-2" type="radio" value={EnumMethodPayment.cashUponReceipt} {...register('methodPayment')} />
            <label htmlFor="radio-2-2">{EnumMethodPayment.cashUponReceipt}</label>
          </div>
        )}
        <div className="form_radio">
          <input id="radio-3" type="radio" value={EnumMethodPayment.payPal} {...register('methodPayment')} />
          <label htmlFor="radio-3">{EnumMethodPayment.payPal}</label>
        </div>
      </div>
    </div>
  );
};

export default DeliveryForm;
