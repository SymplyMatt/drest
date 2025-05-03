import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignupValues {
  email: string;
  password: string;
  name?: string;
}

interface LoginValues {
  email: string;
  password: string;
}

interface AuthState {
  signupValues: SignupValues;
  loginValues: LoginValues;
  authPage: string | null;
}

const initialState: AuthState = {
  signupValues: { email: "", password: "" },
  loginValues: { email: "", password: "" },
  authPage: null,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignupValues: (state, action: PayloadAction<SignupValues>) => {
      state.signupValues = action.payload;
    },
    setLoginValues: (state, action: PayloadAction<LoginValues>) => {
      state.loginValues = action.payload;
    },
    setAuthPage: (state, action: PayloadAction<string | null>) => {
      state.authPage = action.payload;
    },
  },
});

export const { setSignupValues, setLoginValues, setAuthPage } = auth.actions;
export default auth.reducer;
