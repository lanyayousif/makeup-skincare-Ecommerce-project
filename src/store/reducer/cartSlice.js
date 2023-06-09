import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carts: {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
    // userId:"64410d9cbec84f65377bca67"
  },
};
let incrementNumberBeforeAdd = { productId: {}, quantity: 0 };
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const productItem = state.carts.cartItems.find(
        (product) => product.productId._id === item.productId._id
      );
      if (productItem) {
        console.log('product item added befor');
      } else {
        incrementNumberBeforeAdd.productId?._id
          ? (state.carts.cartItems = [
              ...state.carts.cartItems,
              incrementNumberBeforeAdd,
            ])
          : (state.carts.cartItems = [...state.carts.cartItems, item]);
        // state.carts.cartItems = [...state.carts.cartItems, incrementNumberBeforeAdd]
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
      } else {
        incrementNumberBeforeAdd.quantity += 1;
        incrementNumberBeforeAdd.productId = item.productId;
      }
    },
    decrement: (state, action) => {
      const item = action.payload;
      let productItem = state.carts.cartItems.find((product) => {
        return product.productId._id === item.productId._id;
      });

      if (productItem?.quantity > 1) {
        productItem.quantity -= 1;
      } else if (productItem?.quantity === 1) {
        productItem.quantity -= 1;
        state.carts.cartItems = state.carts.cartItems.filter(
          (product) => product.productId._id !== item.productId._id
        );
      } else if (incrementNumberBeforeAdd.quantity > 1) {
        incrementNumberBeforeAdd.quantity -= 1;
      } else if (incrementNumberBeforeAdd.quantity === 1) {
        incrementNumberBeforeAdd.quantity -= 1;
        state.carts.cartItems = state.carts.cartItems.filter(
          (product) => product.productId._id !== item.productId._id
        );
      }
    },

    calculateTotals: (state) => {
      const totals = state.carts.cartItems.reduce((total, item) => {
        return total + item.productId.ProductPrice * item.quantity;
      }, 0);
      state.carts.totalPrice = totals;
      // total quantity
      let quantity = 0;
      state.carts.cartItems.forEach((item) => {
        quantity += item.quantity;
      });
      state.carts.totalQuantity = quantity;
    },
  },
});

export const { addToCart, remove, increment, decrement, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
