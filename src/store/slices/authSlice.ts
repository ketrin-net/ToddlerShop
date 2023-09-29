import { AnyAction, PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User } from '../../models/user';
import { UserLogIn } from '../../models/userLogin';
import { UserRegictration } from '../../models/userRegictration';
import { baseUrl } from '../../helpers/baseUrl';

const tokenInStorage = localStorage.getItem('token') !== null ? localStorage.getItem('token') : '';

export const loginAuth = createAsyncThunk(`auth/loginAuth`, async (user: UserLogIn, { rejectWithValue, dispatch }) => {
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (!response.ok) {
    return rejectWithValue('Такого пользователя не существует');
  }
  const data = await response.json();
  localStorage.setItem('token', data.token);

  dispatch(currentUserAuth(data.token));
});

export const currentUserAuth = createAsyncThunk<User, string, { rejectValue: string }>(
  `auth/currentUserAuth`,
  async (token: string, { rejectWithValue }) => {
    const currentUserResponse = await fetch(`${baseUrl}/auth/current`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!currentUserResponse.ok) {
      return rejectWithValue('Пользователь не найден');
    }

    return await currentUserResponse.json();
  },
);

export const registrationAuth = createAsyncThunk(`auth/registrationAuth`, async (newUser: UserRegictration, { rejectWithValue, dispatch }) => {
  const newUserResponse = await fetch(`${baseUrl}/auth/registration`, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (!newUserResponse.ok) {
    return rejectWithValue('Пользователь не зарегистрирован');
  }

  const data = await newUserResponse.json();
  
  dispatch(
    loginAuth({
      email: data.email,
      password: data.password,
    }),
  );
});

export interface AuthState {
  user: User | null;
  isAuth: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuth: Boolean(tokenInStorage),
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAuth.fulfilled, (state, action) => {
        state.isAuth = true;
        state.loading = false;
        state.user = action.payload ?? null;
      })
      .addCase(currentUserAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(currentUserAuth.fulfilled, (state, action) => {
        state.isAuth = true;
        state.loading = false;
        state.user = action.payload ?? null;
      })
      .addCase(registrationAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registrationAuth.fulfilled, (state, action) => {
        state.isAuth = true;
        state.loading = false;
        state.user = action.payload ?? null;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export const selectAllAuthState = (state: RootState) => state.auth;
export const selectIsAuthState = (state: RootState) => state.auth.isAuth;
export const selectAuthUser = (state: RootState) => state.auth.user;
export const authReducer = authSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
