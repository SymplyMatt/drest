import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AppState {
  theme: "light" | "dark";
  language: string;
  searchMode: string | null;
  loggedInUser: User | null;
}

const initialState: AppState = {
  theme: "light",
  searchMode: null,
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
    setSearchMode: (state, action: PayloadAction<string | null>) => {
      state.searchMode = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setLoggedInUser: (state, action: PayloadAction<User | null>) => {
      state.loggedInUser = action.payload;
    },
  },
});

export const { setTheme, setLanguage, setLoggedInUser, setSearchMode } = app.actions;
export default app.reducer;
