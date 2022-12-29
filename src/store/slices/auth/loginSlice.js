import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    isLoading: false,
    userInfo: {},
    token: null,
  },
  reducers: {
    login(state) {
      state.isLoading = true;
    },
    loginSuccess(state, { payload }) {
      state.isLoading = false;
      state.userInfo = payload.data.data;
      state.token = payload.data.token;
    },
    loginError(state, action) {
      const { payload } = action;
      message.warning(payload.message);
      state.isLoading = false;
    },
  },
});

export const { login, loginSuccess, loginError } = loginSlice.actions;

export default loginSlice.reducer;
