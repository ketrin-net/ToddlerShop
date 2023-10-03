import { Product } from '../../../models/product';
import { RootState } from '../../../store/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const favoritesInStorage = localStorage.getItem('favorites') !== null ? JSON.parse(localStorage.getItem('favorites') as string) : [];

export interface FavoritesSliceState {
  products: Product[];
}

const initialState: FavoritesSliceState = {
  products: favoritesInStorage,
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addInFavorites: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);

      localStorage.setItem('favorites', JSON.stringify(state.products));
    },
    deleteInFavorites: (state, action: PayloadAction<{id: number}>) => {
      state.products = state.products.filter((item) => item.id !== action.payload.id);

      localStorage.setItem('favorites', JSON.stringify(state.products));
    },
  },
});

export const { addInFavorites, deleteInFavorites } = favoritesSlice.actions;
export const selectProductsInFavorites = (state: RootState) => state.favorites.products;
export const favoritesReducer = favoritesSlice.reducer;
