import { bucketReducer } from './reducers/bucketSlice';
import { configureStore } from '@reduxjs/toolkit';
import { modalAdditionReducer } from './reducers/modalAdditionSlice';

export const store = configureStore({
  reducer: {
    bucket: bucketReducer,
    ModalAddition: modalAdditionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
