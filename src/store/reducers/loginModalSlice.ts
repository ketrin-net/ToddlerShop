import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface LoginModalSliceState {
  isOpen: boolean;
}

const initialState: LoginModalSliceState = {
  isOpen: false,
};

export const loginModalSlice = createSlice({
  name: 'loginModal',
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.isOpen = true;
    },
    closeLoginModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openLoginModal, closeLoginModal } = loginModalSlice.actions;
export const selectisOpenLoginModalInfo = (state: RootState) => state.loginModal.isOpen;
export const loginModalReducer = loginModalSlice.reducer;
