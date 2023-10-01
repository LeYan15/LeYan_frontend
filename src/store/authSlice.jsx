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
      state.loggedIn = false;
    },
    authentication (state) {
      state.loggedIn = true;
    },
  },
  extraReducers: {

  },
});
export const {quit, authentication} = authSlice.actions;
export default authSlice.reducer;
