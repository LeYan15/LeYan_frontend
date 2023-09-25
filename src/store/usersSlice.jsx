import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk (

)

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    status: null,
    error: null,
  },
  reducers: {

  },
  extraReducers: {

  },
});

export default usersSlice.reducer;