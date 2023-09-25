import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAuth = createAsyncThunk ('auth/fetchAuth',

)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedIn: false,
    status: null,
    error: null,
  },
  reducers: {

  },
  extraReducers: {

  },
});

export default authSlice.reducer;
