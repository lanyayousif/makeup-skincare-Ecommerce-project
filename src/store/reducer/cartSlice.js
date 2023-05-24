import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      carts:{
      cartItems: [],
      totalQuantity: 0,
      totalPrice: 0,
      // userId:"64410d9cbec84f65377bca67"
    } 
}

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
      console.log(item)
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
        console.log("productItem.quantity  " + productItem.quantity);
        // console.log(state.carts.cartItems );
        
      }
    },

    calculateTotals:(state)=>{
       const totals = state.carts.cartItems.reduce((total, item) => {
        return total + item.productId.ProductPrice * item.quantity;
      }, 0);
      // console.log("totals",totals)
      state.carts.totalPrice=totals

      // total quantity
      let quantity=0
      state.carts.cartItems.forEach(item=>{
        quantity+=item.quantity
      })
      state.carts.totalQuantity=quantity
      // console.log("quantity",quantity)
    }

  },
});

export const { addToCart, remove, increment, decrement ,calculateTotals} = cartSlice.actions;
export default cartSlice.reducer;
