import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface User{
    uid: string;
    email: string | null;
}
interface AuthState {
  user:User | null; // User object with uid and email
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: true,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ uid: string; email: string }>) => {
      state.user = { uid: action.payload.uid, email: action.payload.email };
      state.isLoading = false;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { login, logout, setLoading, setError } = authSlice.actions;

export default authSlice.reducer;
