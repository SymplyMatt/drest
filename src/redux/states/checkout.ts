import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../utils/utils";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CheckoutState {
  cart: CartItem[];
}

const initialState: CheckoutState = {
  cart: [],
};

const checkout = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      state.cart = state.cart.filter(item => item.product.id !== action.payload.product.id);
    },
    updateCartQuantity: (state, action: PayloadAction<CartItem>) => {
      const item = state.cart.find(item => item.product.id === action.payload.product.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, updateCartQuantity, clearCart } = checkout.actions;
export default checkout.reducer;
