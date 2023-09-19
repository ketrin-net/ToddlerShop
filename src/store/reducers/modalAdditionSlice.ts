import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/product';
import { RootState } from '../store';

export interface ModalAdditionProductState {
  isOpen: boolean;
  idProduct: number;
}

const initialState: ModalAdditionProductState = {
  isOpen: false,
  idProduct: 0,
};

export const modalAdditionSlice = createSlice({
  name: 'modalAddition',
  initialState,
  reducers: {
    openModalAddition: (state, action: PayloadAction<{ id: number }>) => {
      state.isOpen = true;
      state.idProduct = action.payload.id;
    },
    closeModalAddition: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModalAddition, closeModalAddition } = modalAdditionSlice.actions;
export const modalInfo = (state: RootState) => state.ModalAddition;
export const modalAdditionReducer = modalAdditionSlice.reducer;
