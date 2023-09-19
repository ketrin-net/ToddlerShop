import { cartReducer } from './reducers/cartSlice';
import { configureStore } from '@reduxjs/toolkit';
import { modalAdditionReducer } from './reducers/modalAdditionSlice';
import { commonModalWindowReducer } from './reducers/commonModalWindowSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    ModalAddition: modalAdditionReducer,
    commonModalWindow: commonModalWindowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
