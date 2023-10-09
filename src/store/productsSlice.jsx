import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// `https://reqres.in/api/users?page=${page}`
export const fetchProducts = createAsyncThunk (
  'products/fetchProducts',
  async function () {
    const response = await fetch('http://127.0.0.1:8000/api/shop/', {
      mode: 'no-cors'
      
    });
    console.log(response);
      if (!response.ok) {
        throw new Error('Server error!');
      }
      const data = await response.json();
      return data;
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    status: null,
    error: null,
    products: [],
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = true;
      state.error = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = false;
      // const newProducts = action.payload.data?.products.filter(product => !state.products.some(item => item.id === product.id));
      // state.products.push(...newProducts);
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = false;
    });
  },
});

export default productsSlice.reducer;