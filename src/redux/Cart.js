import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, actions) => {
      state.products.push(actions.payload);
      console.log(state.products.length);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
