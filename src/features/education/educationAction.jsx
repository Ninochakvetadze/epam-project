import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEducationData = createAsyncThunk(
  'education/fetchData',
  async () => {
    const response = await fetch('/api/education');
    if (!response.ok) {
      throw new Error('Failed to fetch education data');
    }
    return response.json();
  }
);