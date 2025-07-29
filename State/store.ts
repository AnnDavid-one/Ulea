// store.ts
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import themeReducer from "./themeSlice"

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    theme:themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;