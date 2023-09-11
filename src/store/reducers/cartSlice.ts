import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/product';
import { RootState } from '../store';

export type ProductInCart = Product & { count: number; isDeleted: boolean };

const itemInStorage = localStorage.getItem('products') !== null ? JSON.parse(localStorage.getItem('products') as string) : [];

const saveAllProductsInStorage = (item: ProductInCart[]) => {
  localStorage.setItem('products', JSON.stringify(item));
};

export interface CartState {
  products: ProductInCart[];
}

const initialState: CartState = {
  products: itemInStorage,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductInCart: (state, action: PayloadAction<Product>) => {
      const prod = state.products.find((item) => item.id === action.payload.id);
      state.products.push({ ...action.payload, count: 1, isDeleted: false });

      saveAllProductsInStorage(state.products);
    },
    changeCountProductInCart: (state, action: PayloadAction<{ id: number; addOrDelete: boolean }>) => {
      const prod = state.products.find((item) => item.id === action.payload.id);

      if (prod) {
        prod.count = action.payload.addOrDelete ? prod.count + 1 : prod.count > 1 ? prod.count - 1 : prod.count;

        saveAllProductsInStorage(state.products);
      }
    },
    hiddenProductInCart: (state, action: PayloadAction<{ id: number }>) => {
      const prod = state.products.find((item) => item.id === action.payload.id);

      if (prod) {
        prod.isDeleted = true;
        saveAllProductsInStorage(state.products);
      }
    },
    cancelDeleteProductInCart: (state, action: PayloadAction<{ id: number }>) => {
      const prod = state.products.find((item) => item.id === action.payload.id);

      if (prod) {
        prod.isDeleted = false;
        saveAllProductsInStorage(state.products);
      }
    },
    deleteProductInCart: (state, action: PayloadAction<{ id: number }>) => {
      state.products = state.products.filter((item) => item.id !== action.payload.id);

      saveAllProductsInStorage(state.products);
    },
  },
});

export const { addProductInCart, changeCountProductInCart, hiddenProductInCart, deleteProductInCart, cancelDeleteProductInCart } = cartSlice.actions;

export const selectProductsInCart = (state: RootState) => state.cart.products;

export const selectCountProductsInCart = (state: RootState): number => {
  return state.cart.products
    .filter((i) => i.isDeleted === false)
    .reduce(function (sum, current) {
      return sum + current.count;
    }, 0);
};

export const totalCostProductsInCart = (state: RootState): number => {
  return state.cart.products
    .filter((i) => i.isDeleted === false)
    .reduce(function (sum, current) {
      return sum + current.cost;
    }, 0);
};

export const cartReducer = cartSlice.reducer;