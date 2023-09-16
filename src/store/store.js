import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../components/reducer/todo";
import { timerSlice } from "../components/reducer/timer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";

const reducers = combineReducers({
  todo: todoSlice.reducer,
  timer: timerSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
