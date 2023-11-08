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
      if (err.response.status === 409) {
        return thunkApi.rejectWithValue("Email conflict");
      }
      if (err.response.data.error === '"email" must be a valid email') {
        return thunkApi.rejectWithValue("Invalid email");
      }
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
      if (err.response.data.message === '"email" must be a valid email') {
        return thunkApi.rejectWithValue("Invalid email");
      }
      return thunkApi.rejectWithValue({
        message: err.response.data.message,
      });
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
  async (userName, thunkApi) => {
    try {
      const res = await axios.patch("/users", { name: userName });

      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const updateUserAvatar = createAsyncThunk(
  "auth/updateUserAvatar",
  async (data, thunkApi) => {
    try {
      const form = new FormData();
      form.append("image", data.files[0]);

      const res = await axios.post("/users/upload", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
export const AddRecipePicture = createAsyncThunk(
  "auth/addRecipePicture",
  async (data, thunkApi) => {
    try {
      const form = new FormData();
      form.append("image", data.files[0]);

      const res = await axios.post("/recipe", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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
      const { data } = await axios.get("/users/current");

      const info = {
        user: { name: data.user.name, email: data.user.email },
        avatar: data.user.avatarURL,
      };

      return info;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
