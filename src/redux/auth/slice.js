import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, registerUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogged: false,
  isRefreshing: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.pending](state) {
      state.error = '';
    },
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [registerUser.rejected](state, action) {
      state.error = action.payload;
    },

    [logIn.pending](state) {
      state.error = '';
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [logIn.rejected](state, action) {
      state.error = action.payload;
    },

    [logOut.pending](state) {
      state.error = '';
    },
    [logOut.fulfilled](state) {
      state.user = { name: '', email: '' };
      state.isLogged = false;
      state.token = null;
    },

    [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.error = '';
    },

    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLogged = true;
      state.isRefreshing = false;
      state.error = '';
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
