import './FeedbackForm.scss';
import * as yup from 'yup';
import { QuestionsSchema } from './schemes/QuestionsSchema';
import { SubmitHandler, useForm } from 'react-hook-form';
import { closeModalCommon, openModalCommon, selectisOpenModalInfo } from '../../../../store/reducers/commonModalWindowSlice';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import CommonModalWindow from '../../../../components/CommonModalWindow/CommonModalWindow';
import React from 'react';

export type NewQuestionsForm = yup.InferType<typeof QuestionsSchema>;

const FeedbackForm = () => {
  const dispatch = useDispatch();
  const commonModalActive = useSelector(selectisOpenModalInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewQuestionsForm>({
    mode: 'onBlur',
    resolver: yupResolver(QuestionsSchema),
  });

  const onSubmit: SubmitHandler<NewQuestionsForm> = (data) => {
    dispatch(openModalCommon());
    setTimeout(() => dispatch(closeModalCommon()), 3000);
    reset();
  };

  return (
    <>
      {commonModalActive && (
        <CommonModalWindow>
          <span className="title">Спасибо за вопрос!</span>
          <p>В скором времени мы с вами свяжемся по оставленному телефону.</p>
        </CommonModalWindow>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="feedback-form">
        <span className="caption">Напишите нам, и мы ответим на все Ваши вопросы</span>
        <input type="text" placeholder="Имя" className={errors.name ? 'error' : ''} {...register('name')} />
        <input type="text" placeholder="Телефон" className={errors.phone ? 'error' : ''} {...register('phone')} />
        <textarea placeholder="Сообщение" className={errors.comment ? 'error' : ''} {...register('comment')} />
        <label className={errors.agreement ? 'form-checkbox error' : 'form-checkbox'}>
          <input className="checkbox-input" type="checkbox" {...register('agreement')} />
          <span className="checkbox-style"></span>
          Соглашение на обработку данных и пользовательское соглашение
        </label>
        <input type="submit" value="Отправить" className="btn blue" />
      </form>
    </>
  );
};

export default FeedbackForm;
