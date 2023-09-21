import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User } from '../../models/user';
import { UserLogIn } from '../../models/userLogin';

export interface AuthState {
  user: User;
  isAuth: boolean;
}

const initialState: AuthState = {
  user: {
    id: 0,
    name: 'undefined',
    email: 'undefined',
    phone: 'undefined',
    token: 'undefined',
  },
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserLogIn>) => {
      let curUser;

      fetch('http://localhost:7000/auth/login', {
        method: 'POST',
        body: JSON.stringify(action.payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem('token', JSON.stringify(data.token).slice(1, -1));
        });
      fetch('http://localhost:7000/auth/current', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          curUser = data;
        });

      state.isAuth = true;
      // state.user.email = curUser.email;
      console.log(curUser);
    },
    currentUser: (state) => {
      fetch('http://localhost:7000/auth/current', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    },
    logout: (state) => {
      localStorage.removeItem('token');
      state.isAuth = false;
    },
  },
});

export const { login, logout, currentUser } = authSlice.actions;
export const selectIsAuthState = (state: RootState) => state.auth.isAuth;
export const authReducer = authSlice.reducer;
