import { AnyAction, PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Category } from '../../../models/category';
import { RootState } from '../../../store/store';
import { baseUrl } from '../../../helpers/baseUrl';

export const fetchCategoryCatalog = createAsyncThunk(`catalog/categoryCatalog`, async () => {
  const response = await fetch(`${baseUrl}/category`, {
    method: 'GET',
  });

  const data = await response.json();

  return data;
});

export interface CatalogSlice {
  category: Category[] | null;
  error: string | null;
}

const initialState: CatalogSlice = {
  category: null,
  error: null,
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryCatalog.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchCategoryCatalog.fulfilled, (state, action) => {
        state.category = action.payload;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
      });
  },
});

// export const {} = catalogSlice.actions;
export const selectCategoriesInState = (state: RootState) => state.catalog.category;

export const catalogReducer = catalogSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
