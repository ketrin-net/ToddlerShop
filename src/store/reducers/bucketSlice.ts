import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/product';
import { RootState } from '../store';
import { enableMapSet } from 'immer';

enableMapSet();

export interface Bucket {
  products: Map<number, Product & { count: number }>;
}

const initialState: Bucket = {
  products: new Map<number, Product & { count: number }>([]),
};

export const bucketSlice = createSlice({
  name: 'bucket',
  initialState,
  reducers: {
    addProductInBucket: (state, action: PayloadAction<Product>) => {
      const item = state.products.get(action.payload.id);

      if (item === undefined) {
        state.products.set(action.payload.id, { ...action.payload, count: 1 });
      }
    },
    changeCountProduct: (state, action: PayloadAction<{ id: number; addOrDelete: boolean }>) => {
      const item = state.products.get(action.payload.id);

      if (item !== undefined) {
        item.count = action.payload.addOrDelete ? item.count + 1 : item.count + 1;
      }
    },
    deleteProductInBucket: (state, action: PayloadAction<{ id: number }>) => {
      state.products.delete(action.payload.id);
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

export const bucketReducer = bucketSlice.reducer;
