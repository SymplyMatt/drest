import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArrivalsAndCategory, CartItem, Product, ProductCategory } from "../../utils/utils";
interface User {
  name: string;
  email: string;
  displayName: string;
  token: string;
}

interface AppState {
  theme: "light" | "dark";
  language: string;
  searchMode: string | null;
  showAccount: boolean;
  loggedInUser: User | null;
  cart: CartItem[];
  wishlist: Product[];
  products: Product[];
  sales: Product[];
  categories: ProductCategory[];
  newArrivals: ArrivalsAndCategory[];
}

const initialState: AppState = {
  theme: "light",
  searchMode: null,
  showAccount: false,
  language: import.meta.env.VITE_LANGUAGE || "us",
  loggedInUser: null,
  cart: [],
  wishlist: [],
  products: [],
  sales: [],
  categories: [],
  newArrivals: [],
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
    setSales: (state, action: PayloadAction<Product[]>) => {
      if (Array.isArray(action.payload)) state.sales = action.payload;
    },
    setCategories: (state, action: PayloadAction<ProductCategory[]>) => {
      if (Array.isArray(action.payload)) state.categories = action.payload;
    },
    setNewArrivals: (state, action: PayloadAction<ArrivalsAndCategory[]>) => {
      if (Array.isArray(action.payload)) state.newArrivals = action.payload;
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
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cart = [...state.cart, action.payload];
    },
    addToWishlist: (state, action: PayloadAction<Product>) => {
      state.wishlist = [...state.wishlist, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item:CartItem) => item.product.id !== action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.wishlist = state.wishlist.filter((item:Product) => item.id !== action.payload);
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setTheme, setLanguage, setLoggedInUser, setSearchMode, emptyCart, setShowAccount, setProducts, setSales, setCategories, setNewArrivals, addToCart, addToWishlist, removeFromCart, removeFromWishlist} = app.actions;
export default app.reducer;
