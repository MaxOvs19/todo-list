import { configureStore } from "@reduxjs/toolkit";

import todoStore from "./todoSlice";

export const store = configureStore({
  reducer: {
    todoStore: todoStore,
  },
});

export type RootState = ReturnType<typeof store.getState>;
