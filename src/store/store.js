import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import rootReducer from "./slices/rootReducer";

//SAGA
import createSagaMiddleware from "redux-saga";
import loginSaga from "./saga/sagas/auth/loginSaga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(saga),
});

//RUN SAGA
saga.run(loginSaga);

export const persistor = persistStore(store);
export default store;
