import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    products: [],
    isIt: false,
  },
  reducers: {
    addToCart: (state, actions) => {
      state.products.push(actions.payload);
      console.log(state.products.length);
    },
    active: (state, action) => {
      state.isIt = !state.isIt;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
