import { configureStore } from "@reduxjs/toolkit";
import cartOper from '../Features/Cart/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartOper
  }
});

export default store;