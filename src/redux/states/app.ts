import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../utils/utils";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AppState {
  theme: "light" | "dark";
  language: string;
  searchMode: string | null;
  showAccount: boolean;
  loggedInUser: User | null;
  cart: any[];
  products: Product[];
  categories: any[];
}

const initialState: AppState = {
  theme: "light",
  searchMode: null,
  showAccount: false,
  language: import.meta.env.VITE_LANGUAGE || "us",
  loggedInUser: null,
  cart: [1,2,3,4,5,6],
  products: [],
  categories: [],
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      if (Array.isArray(action.payload)) state.products = action.payload;
    },
    setCategories: (state, action: PayloadAction<Product[]>) => {
      if (Array.isArray(action.payload)) state.categories = action.payload;
    },
    setSearchMode: (state, action: PayloadAction<string | null>) => {
      state.searchMode = action.payload;
    },
    setShowAccount: (state, action: PayloadAction<boolean>) => {
      state.showAccount = action.payload;
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

export const { setTheme, setLanguage, setLoggedInUser, setSearchMode, emptyCart, setShowAccount, setProducts, setCategories } = app.actions;
export default app.reducer;
