import { logIn, logOut, refreshUser, register } from './authOperations';

const { createSlice } = require('@reduxjs/toolkit');

const handlePending = state => {
  state.authIsLoading = true;
};

const handlRejected = (state, action) => {
  state.authIsLoading = false;
  state.authError = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    authIsLoading: false,
    authError: null,
  },
  extraReducers: {
    [register.pending]: handlePending,
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]: handlRejected,

    [logIn.pending]: handlePending,
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.authIsLoading = false;
      state.authError = null;
    },
    [logIn.rejected]: handlRejected,
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.authIsLoading = false;
      state.authError = null;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.authIsLoading = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.authIsLoading = false;
      state.authError = null;
    },
    [refreshUser.rejected](state, action) {
      state.isRefreshing = false;
      state.authIsLoading = false;
      state.authError = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
