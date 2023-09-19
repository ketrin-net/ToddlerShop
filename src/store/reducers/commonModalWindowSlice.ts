import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface CommonModalWindowSliceState {
  isOpen: boolean;
}

const initialState: CommonModalWindowSliceState = {
  isOpen: false,
};

export const commonModalWindowSlice = createSlice({
  name: 'commonModalWindow',
  initialState,
  reducers: {
    openModalCommon: (state) => {
      state.isOpen = true;
    },
    closeModalCommon: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModalCommon, closeModalCommon } = commonModalWindowSlice.actions;
export const selectisOpenModalInfo = (state: RootState) => state.commonModalWindow.isOpen;
export const commonModalWindowReducer = commonModalWindowSlice.reducer;
