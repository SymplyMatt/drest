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
  cart: any[];
}

const initialState: AppState = {
  theme: "light",
  searchMode: null,
  language: import.meta.env.VITE_LANGUAGE || "en",
  loggedInUser: null,
  cart: [1,2,3,4,5,6],
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
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setTheme, setLanguage, setLoggedInUser, setSearchMode, emptyCart } = app.actions;
export default app.reducer;
