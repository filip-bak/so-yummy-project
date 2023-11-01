import axios from "axios";

const { createAsyncThunk } = require("@reduxjs/toolkit");

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearToken = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk(
  "auth/Register",
  async (registerData, thunkApi) => {
    try {
      const res = await axios.post("/users/signup", registerData);
      setToken(res.data.token);

      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/Login",
  async (loginData, thunkApi) => {
    try {
      const res = await axios.post("/users/login", loginData);
      setToken(res.data.token);

      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const logout = createAsyncThunk("auth/Logout", async (_, thunkApi) => {
  try {
    const res = await axios.post("/users/logout");
    clearToken();

    return res.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

export const updateUser = createAsyncThunk(
  "auth/UpdateUser",
  async (_, thunkApi) => {
    try {
      const res = await axios.patch("/users");

      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/RefreshUser",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;

    if (token === null) {
      return thunkApi.rejectWithValue("Unable to fetch user");
    }

    try {
      setToken(token);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
