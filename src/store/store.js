import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import productsReducer from './productsSlice'
export default configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
  },
})