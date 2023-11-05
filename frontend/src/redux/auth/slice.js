import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register, updateUser } from "./actions";

const initialState = {
  user: { name: null, email: null },
  token: null,
  avatar: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  isError: null,
};

const handlePending = (state, action) => {
  state.isError = null;
  state.isLoading = true;
};
const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoading = false;
  state.isLoggedIn = true;
};
const handleReject = (state, action) => {
  state.isError = action.payload;
  state.isLoading = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetError: state => {
      state.isError = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        handleFulfilled(state, action);
        state.avatar = action.payload.user.avatarURL;
      })
      .addCase(register.rejected, handleReject)

      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, handleFulfilled)
      .addCase(login.rejected, handleReject)

      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, state => {
        state.user = initialState.user;
        state.token = null;
        state.avatar = null;
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, handleReject)

      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(updateUser.rejected, handleReject)

      .addCase(refreshUser.pending, state => {
        state.isError = null;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.avatar = action.payload.avatar;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.isError = action.payload;
      });
  },
});

export const { resetError } = authSlice.actions;
export const authReducer = authSlice.reducer;
