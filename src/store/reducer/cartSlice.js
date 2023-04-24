import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const productItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (productItem) {
        // exsistingIndex.quantity +=1
        console.log("product item added befor");
      } else {
        state.cartItems = [...state.cartItems, item];
        console.log(state.cartItems);
      }
    },
    remove: (state, action) => {
      const item = action.payload;
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== item.id
      );
    },
    increment: (state, action) => {
      const item = action.payload;
      let productItem = state.cartItems.find(
        (product) => product.id === item.id
      );
      if (productItem) {
        productItem.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const item = action.payload;
      let productItem = state.cartItems.find(
        (product) => product.id === item.id
      );
      if (productItem.quantity > 1) {
        productItem.quantity -= 1;
      } else if (productItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (product) => product.id !== productItem.id
        );
      }
      console.log("productItem.quantity  " + productItem.quantity);
    },
  },
});

export const { addToCart, remove, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
