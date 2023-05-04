import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { postsAPI } from "./services/postData";


// Path: src\store.js

export const store = configureStore({

  reducer: {
    // users: userReducer,
    users: userSlice,
    [postsAPI.reducerPath]: postsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsAPI.middleware),
});


setupListeners(store.dispatch);