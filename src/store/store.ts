import { authReducer } from './slices/authSlice';
import { cartReducer } from '../pages/CartPage/slice/cartSlice';
import { commonModalWindowReducer } from './slices/commonModalWindowSlice';
import { configureStore } from '@reduxjs/toolkit';
import { loginModalReducer } from './slices/loginModalSlice';
import { modalAddProductReducer } from './slices/modalAdditionSlice';
import { catalogReducer } from '../pages/CatalogPage/slice/catalogSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modalAddProduct: modalAddProductReducer,
    auth: authReducer,
    commonModalWindow: commonModalWindowReducer,
    loginModal: loginModalReducer,
    catalog: catalogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
