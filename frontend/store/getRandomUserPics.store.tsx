/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRandomUserPics } from '../services/apiService';

export const getUserPicsRandomly = createAsyncThunk('randomUserPics/getUserPicsRandomly', async ({ id, jwtToken }:{ id: number, jwtToken:string }) => {
  const { data } = await getRandomUserPics(id, jwtToken);
  return data;
});

interface RandomUserPicsState {
  pictures: Pictures[]
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialRandomUserPicsState = {
  pictures: [],
  loading: 'idle',
} as RandomUserPicsState;

const randomUserPicsSlice = createSlice({
  name: 'randomUserPics',
  initialState: initialRandomUserPicsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserPicsRandomly.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getUserPicsRandomly.fulfilled, (state, action) => {
      state.pictures = action.payload;
      state.loading = 'succeeded';
    });
    builder.addCase(getUserPicsRandomly.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

export default randomUserPicsSlice.reducer;
