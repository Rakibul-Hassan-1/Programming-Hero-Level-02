import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import counterReducer from "./features/counter/counterSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
