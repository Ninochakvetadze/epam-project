import { fetchEducationData } from './educationAction';
import { createSlice } from '@reduxjs/toolkit';

const educationSlice = createSlice({
  name: 'education',
  initialState: {
    data: [],
    loading: 'pending', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducationData.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchEducationData.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchEducationData.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export default educationSlice.reducer;