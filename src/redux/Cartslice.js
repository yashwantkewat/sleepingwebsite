// redux/Cartslice.js
import { createSlice } from "@reduxjs/toolkit";

// 1️⃣ Load from localStorage
const getInitialCart = () => {
  const storedCart = localStorage.getItem('cartItems');
  return storedCart ? JSON.parse(storedCart) : [];
};

const initialState = {
  cartItems: getInitialCart() // ✅ load on start
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);

      // 2️⃣ Save to localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);

      // 2️⃣ Save to localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// ✅ Selector to get cart items from state
export const selectCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
