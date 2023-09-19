/* eslint-disable no-useless-escape */
import * as yup from 'yup';
import { EnumCompanyDelivery } from '../enum/EnumCompanyDelivery';
import { EnumMethodPayment } from '../enum/EnumMethodPayment';
import { EnumTypeDelivery } from '../enum/EnumTypeDelivery';

export const CreateOrderSchema = yup.object().shape({
  city: yup.string().matches(/[a-zA-ZА-Яа-я]/),
  methodReceiving: yup.mixed<EnumTypeDelivery>(),
  name: yup.string().matches(/[a-zA-ZА-Яа-я]/),
  email: yup.string().email().required().matches(/@/),
  phone: yup
    .string()
    .required()
    .matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/),
  street: yup.string().nullable(),
  house: yup.string().matches(/^\d+$/),
  apartment: yup.string().matches(/^\d+$/),
  methodPayment: yup.mixed<EnumMethodPayment>(),
  comment: yup.string(),
  approvalMailing: yup.boolean(),
  transportCompany: yup.string(),
  pointsOfDelivery: yup.string(),
});
