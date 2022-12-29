import { put, call, takeLatest } from "redux-saga/effects";
import {
  login,
  loginSuccess,
  loginError,
} from "../../../slices/auth/loginSlice";
import { reqLogin } from "../../api/auth/loginApi";

function* loginRequest({ payload }) {
  try {
    const result = yield call(reqLogin, payload);
    if (result?.response?.status === 400) {
      yield put(
        loginError({
          title: "Login Failed",
          message: result?.response?.data?.message,
        })
      );
    } else {
      yield put(loginSuccess(result));
    }
  } catch (error) {
    const { status, data } = error.response;
    if (status === 401 || status === 403 || status === 400) {
      yield put(loginError({ title: "Login Failed", message: data.message }));
    } else {
      yield put(
        loginError({
          title: "Login Failed",
          message: "Please contact support.",
        })
      );
    }
  }
}

// Export the saga (todo-saga)
export default function* loginSaga() {
  yield takeLatest(login.type, loginRequest);
}
