/* eslint-disable no-useless-escape */
import * as yup from 'yup';
import { Cities } from '../../../NewOrderPage/mokCities/DeliveryAddresses';

export const WholesaleSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(/[a-zA-ZА-Яа-я]/),
  phone: yup
    .string()
    .required()
    .matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/),
  email: yup.string().required().email().matches(/@/),
  city: yup.mixed<Cities>(),
  agreement: yup.boolean().required().oneOf([true]),
});
