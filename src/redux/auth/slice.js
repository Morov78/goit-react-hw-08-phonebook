import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, registerUser } from './operations';

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
      console.log('SLICE-Register');
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },

    [logIn.fulfilled](state, action) {
      console.log('SLICE-Login');
      console.log(action.payload);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [logOut.fulfilled](state) {
      console.log('SLICE-logOut');
      state.user = { name: '', email: '' };
      state.isLogged = false;
      state.token = null;
    },
    [logIn.pending](state, action) {},
  },
});

export const authReducer = authSlice.reducer;
