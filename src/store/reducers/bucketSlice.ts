import { Product } from '../../models/product';
import { createSlice } from '@reduxjs/toolkit';

export interface Bucket {
  products?: Product[];
}

const initialState: Bucket = {
  products: undefined,
};

export const bucketSlice = createSlice({
  name: 'bucket',
  initialState,
  reducers: {
    addInBucket: (state) => {
      state.products = 0;
    },
    deleteUnitInBucket: (state) => {
      state.products = 1;
    }
  }
});

export const { addInBucket, deleteUnitInBucket } = bucketSlice.actions;
