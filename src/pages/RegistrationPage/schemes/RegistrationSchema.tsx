/* eslint-disable no-useless-escape */
import * as yup from 'yup';

export const RegistrationSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(/[a-zA-ZА-Яа-я]/),
  email: yup.string().required().email().matches(/@/),
  phone: yup
    .string()
    .required()
    .matches(/^8\d{10}$/),
  password: yup.string().required().min(8, 'Пароль должен содержать не менее 8 символов'),
  passwordRepeat: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Пароли не совпадают'),
  acceptancePrivacyPolicy: yup.boolean().required().oneOf([true]),
});
