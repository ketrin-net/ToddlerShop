import { authReducer } from './slices/authSlice';
import { cartReducer } from '../pages/CartPage/slice/cartSlice';
import { catalogReducer } from '../pages/CatalogPage/slice/catalogSlice';
import { commonModalWindowReducer } from './slices/commonModalWindowSlice';
import { configureStore } from '@reduxjs/toolkit';
import { favoritesReducer } from '../pages/FavoritesPage/slice/favoritesSlice';
import { loginModalReducer } from './slices/loginModalSlice';
import { modalAddProductReducer } from './slices/modalAdditionSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modalAddProduct: modalAddProductReducer,
    auth: authReducer,
    commonModalWindow: commonModalWindowReducer,
    loginModal: loginModalReducer,
    catalog: catalogReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
