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
    quit (state) {
      state.loggedIn = false
    }
  },
  extraReducers: {

  },
});
export const {quit} = authSlice.actions;
export default authSlice.reducer;
