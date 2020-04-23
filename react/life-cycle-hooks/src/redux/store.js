import { configureStore, createReducer } from "@reduxjs/toolkit";

const reducer = createReducer(
  { name: "Ben" },
  {
    ADD_USER_BASE_NAME: (state, { payload }) => ({ ...state, name: payload }),
  }
);

export const store = configureStore({
  reducer,
});
