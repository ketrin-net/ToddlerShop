import { cartReducer } from './reducers/cartSlice';
import { configureStore } from '@reduxjs/toolkit';
import { modalAdditionReducer } from './reducers/modalAdditionSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    ModalAddition: modalAdditionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
