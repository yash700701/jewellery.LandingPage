import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;
      const indexItemId = state.items.findIndex(
        (item) => item.productId == productId
      );
      if (indexItemId >= 0) {
        state.items[indexItemId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    },
    addPrice(state, action) {
      const price = action?.payload;
      if (!isNaN(price)) {
        state.totalPrice += price;
      }
      console.log(Number(state?.totalPrice));
    },
  },
});

export const { addToCart, addPrice } = cartSlice.actions;
export default cartSlice.reducer;
