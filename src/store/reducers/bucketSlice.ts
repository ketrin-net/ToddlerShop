import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/product';
import { RootState } from '../store';

type ProductInBucket = Array<Product & { count: number }>;

const item = localStorage.getItem('products') !== null ? JSON.parse(localStorage.getItem('products') as string) : [];

const saveProductsInStorage = (item: ProductInBucket) => {
  localStorage.setItem('products', JSON.stringify(item));
};

export interface Bucket {
  products: ProductInBucket;
}

const initialState: Bucket = {
  products: item,
};

export const bucketSlice = createSlice({
  name: 'bucket',
  initialState,
  reducers: {
    addProductInBucket: (state, action: PayloadAction<Product>) => {
      const prod = state.products.find((item) => item.id === action.payload.id);

      if (prod === undefined) {
        state.products.push({ ...action.payload, count: 1 });
      }

      saveProductsInStorage(state.products);
    },
    changeCountProduct: (state, action: PayloadAction<{ id: number; addOrDelete: boolean }>) => {
      const prod = state.products.find((item) => item.id === action.payload.id);

      if (prod !== undefined) {
        prod.count = action.payload.addOrDelete ? prod.count + 1 : prod.count > 1 ? prod.count - 1 : prod.count;
      }

      saveProductsInStorage(state.products);
    },
    deleteProductInBucket: (state, action: PayloadAction<{ id: number }>) => {
      const prod = state.products.find((item) => item.id === action.payload.id);
      const indexProd = state.products.findIndex((item) => item === prod);

      state.products.splice(indexProd, 1);

      saveProductsInStorage(state.products);
    },
  },
});

export const { addProductInBucket, changeCountProduct, deleteProductInBucket } = bucketSlice.actions;

export const selectProductsInBucket = (state: RootState) => state.bucket.products;

export const selectCountProductsInBucket = (state: RootState): number => {
  let allCount: number = 0;

  state.bucket.products.forEach((item) => {
    allCount += item.count;
  });

  return allCount;
};

export const totalCostProductsInBucket = (state: RootState): number => {
  let allCost: number = 0;

  state.bucket.products.forEach((item) => {
    allCost += item.count * item.cost;
  });

  return allCost;
};

export const bucketReducer = bucketSlice.reducer;
