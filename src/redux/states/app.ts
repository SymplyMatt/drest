import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AppState {
  theme: "light" | "dark";
  language: string;
  showSearch: boolean;
  loggedInUser: User | null;
}

const initialState: AppState = {
  theme: "light",
  showSearch:false,
  language: "en",
  loggedInUser: null,
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },
    setShowSearch: (state, action: PayloadAction<boolean>) => {
      state.showSearch = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setLoggedInUser: (state, action: PayloadAction<User | null>) => {
      state.loggedInUser = action.payload;
    },
  },
});

export const { setTheme, setLanguage, setLoggedInUser, setShowSearch } = app.actions;
export default app.reducer;
