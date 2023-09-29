/* eslint-disable no-useless-escape */
import * as yup from 'yup';
import { EnumCompanyDelivery } from '../enum/EnumCompanyDelivery';
import { EnumMethodPayment } from '../enum/EnumMethodPayment';
import { EnumTypeDelivery } from '../enum/EnumTypeDelivery';

export const createOrderSchema = yup.object().shape({
  city: yup.string().matches(/[a-zA-ZА-Яа-я]/),
  receivingMethod: yup.mixed<EnumTypeDelivery>(),
  name: yup.string().matches(/[a-zA-ZА-Яа-я]/),
  email: yup.string().email().required().matches(/@/),
  phone: yup
    .string()
    .required()
    .matches(/^8\d{10}$/),
  street: yup.string().nullable(),
  house: yup.string().matches(/^\d+$/),
  apartment: yup.string().matches(/^\d+$/),
  paymentMethod: yup.mixed<EnumMethodPayment>(),
  comment: yup.string(),
  mailingApproval: yup.boolean(),
  transportCompany: yup.string(),
  pointsOfDelivery: yup.string(),
});
