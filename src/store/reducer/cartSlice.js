import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      carts:{
      cartItems: [],
      totalQuantity: 0,
      totalPrice: 0,
      userId: "", 
    } 
}

console.log(initialState.carts.cartItems)
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const productItem = state.carts.cartItems.find(
        (product) => product.productId._id === item.productId._id
      );
      if (productItem) {
        // exsistingIndex.quantity +=1
        console.log("product item added befor");
      } else {
        state.carts.cartItems = [...state.carts.cartItems, item];
        // console.log(state.cartItems);
      }
    },
    remove: (state, action) => {
      const item = action.payload;
      state.carts.cartItems = state.carts.cartItems.filter(
        (product) => product.productId._id !== item.productId._id
      );
    },
    increment: (state, action) => {
      const item = action.payload;
      let productItem = state.carts.cartItems.find(
        (product) => product.productId._id === item.productId._id
      );
      if (productItem) {
        productItem.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const item = action.payload;
      let productItem = state.carts.cartItems.find(
        (product) => product.productId._id === item.productId._id
      );
      if (productItem.quantity > 1) {
        productItem.quantity -= 1;
      } else if (productItem.quantity === 1) {
        state.carts.cartItems = state.carts.cartItems.filter(
          (product) => product.productId._id !== productItem._id
        );
      }
      console.log("productItem.quantity  " + productItem.quantity);
    },
  },
});

export const { addToCart, remove, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
