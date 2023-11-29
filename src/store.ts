import { setupListeners } from "@reduxjs/toolkit/query";
import { configureStore } from "@reduxjs/toolkit";
import { pollApi } from "./services/poll";

export const store = configureStore({
  reducer: {
    [pollApi.reducerPath]: pollApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pollApi.middleware),
});

setupListeners(store.dispatch);
