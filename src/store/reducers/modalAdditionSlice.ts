import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/product';
import { RootState } from '../store';

export interface ModalAddition {
  isOpen: boolean;
  idProduct: number;
}

const initialState: ModalAddition = {
  isOpen: false,
  idProduct: 0,
};

export const modalAdditionSlice = createSlice({
  name: 'modalAddition',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<{ id: number }>) => {
      state.isOpen = true;
      state.idProduct = action.payload.id;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalAdditionSlice.actions;
export const isModalOpen = (state: RootState) => state.ModalAddition;
export const modalAdditionReducer = modalAdditionSlice.reducer;
