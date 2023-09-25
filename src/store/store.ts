import { authReducer } from './reducers/authSlice';
import { cartReducer } from './reducers/cartSlice';
import { commonModalWindowReducer } from './reducers/commonModalWindowSlice';
import { configureStore } from '@reduxjs/toolkit';
import { loginModalReducer } from './reducers/loginModalSlice';
import { modalAddProductReducer } from './reducers/modalAdditionSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modalAddProduct: modalAddProductReducer,
    auth: authReducer,
    commonModalWindow: commonModalWindowReducer,
    loginModal: loginModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
