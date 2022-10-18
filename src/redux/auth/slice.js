import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, registerUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogged: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },

    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: '', email: '' };
      state.isLogged = false;
      state.token = null;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLogged = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
    [logIn.pending](state, action) {},
  },
});

export const authReducer = authSlice.reducer;
