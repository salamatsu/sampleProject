import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginReducer, { loginSlice } from "./auth/loginSlice";

const authPersistConfig = {
  key: "authAdmin",
  version: 1,
  storage,
  whiteList: ["userInfo"],
};

const rootReducer = combineReducers({
  [loginSlice.name]: persistReducer(authPersistConfig, loginReducer),
});

export default rootReducer;
