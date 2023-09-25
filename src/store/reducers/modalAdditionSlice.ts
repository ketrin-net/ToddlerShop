import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/product';
import { RootState } from '../store';

export interface ModalAddProductState {
  isOpen: boolean;
  idProduct: number;
}

const initialState: ModalAddProductState = {
  isOpen: false,
  idProduct: 0,
};

export const modalAddProductSlice = createSlice({
  name: 'modalAddProduct',
  initialState,
  reducers: {
    openModalAddProduct: (state, action: PayloadAction<{ id: number }>) => {
      state.isOpen = true;
      state.idProduct = action.payload.id;
    },
    closeModalAddProduct: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModalAddProduct, closeModalAddProduct } = modalAddProductSlice.actions;
export const selectModalAddProductInfo = (state: RootState) => state.modalAddProduct;
export const modalAddProductReducer = modalAddProductSlice.reducer;
