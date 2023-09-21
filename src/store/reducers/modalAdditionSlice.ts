import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/product';
import { RootState } from '../store';

export interface ModalAddProductProductState {
  isOpen: boolean;
  idProduct: number;
}

const initialState: ModalAddProductProductState = {
  isOpen: false,
  idProduct: 0,
};

export const modalAddProductSlice = createSlice({
  name: 'modalAddProduct',
  initialState,
  reducers: {
    openmodalAddProduct: (state, action: PayloadAction<{ id: number }>) => {
      state.isOpen = true;
      state.idProduct = action.payload.id;
    },
    closemodalAddProduct: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openmodalAddProduct, closemodalAddProduct } = modalAddProductSlice.actions;
export const selectModalAddProductInfo = (state: RootState) => state.modalAddProduct;
export const modalAddProductReducer = modalAddProductSlice.reducer;
