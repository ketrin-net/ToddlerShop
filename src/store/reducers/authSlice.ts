import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User } from '../../models/user';
import { UserLogIn } from '../../models/userLogin';

const tokenInStorage = localStorage.getItem('token') !== null ? localStorage.getItem('token') : '';

export const loginAuth = createAsyncThunk(`auth/loginAuth`, async (user: UserLogIn, { rejectWithValue, dispatch }) => {
  try {
    const response = await fetch('http://localhost:7000/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) {
      throw new Error('Server Error!');
    }
    const data = await response.json();
    localStorage.setItem('token', JSON.stringify(data.token).slice(1, -1));

    dispatch(login());

    currentUserAuth(data);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const currentUserAuth = createAsyncThunk(`auth/loginAuth`, async (token: string, { rejectWithValue, dispatch }) => {
  try {
    const currentUserResponse = await fetch('http://localhost:7000/auth/current', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (!currentUserResponse.ok) {
      throw new Error('Server Error!');
    }

    const currentUserData = await currentUserResponse.json();
    dispatch(currentUser(currentUserData));
  } catch (error) {
    return rejectWithValue(error);
  }
});

export interface AuthState {
  user: User;
  isAuth: boolean;
  error: boolean;
}

const initialState: AuthState = {
  user: {
    id: 0,
    name: 'undefined',
    email: 'undefined',
    phone: 'undefined',
    token: 'undefined',
  },
  isAuth: Boolean(tokenInStorage),
  error: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    currentUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem('token');
      state.isAuth = false;
    },
  },
});

export const { login, logout, currentUser } = authSlice.actions;
export const selectAllAuthState = (state: RootState) => state.auth;
export const selectIsAuthState = (state: RootState) => state.auth.isAuth;
export const selectAuthUser = (state: RootState) => state.auth.user;
export const authReducer = authSlice.reducer;
