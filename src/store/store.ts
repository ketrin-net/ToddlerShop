import { cartReducer } from './reducers/cartSlice';
import { commonModalWindowReducer } from './reducers/commonModalWindowSlice';
import { configureStore } from '@reduxjs/toolkit';
import { modalAddProductReducer } from './reducers/modalAdditionSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modalAddProduct: modalAddProductReducer,
    commonModalWindow: commonModalWindowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
