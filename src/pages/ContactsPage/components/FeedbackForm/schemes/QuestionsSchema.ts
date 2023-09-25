/* eslint-disable no-useless-escape */
import * as yup from 'yup';

export const QuestionsSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(/[a-zA-ZА-Яа-я]/),
  phone: yup
    .string()
    .required()
    .matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/),
  comment: yup.string().required(),
  agreement: yup.boolean().required().oneOf([true]),
});
