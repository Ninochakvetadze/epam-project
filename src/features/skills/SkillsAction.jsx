import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSkillsData = createAsyncThunk('skills/fetchData', async () => {
  try {
    const response = await fetch('/api/skills');
    if (!response.ok) {
      throw new Error('Failed to fetch skills data');
    }
    const data = await response.json();
    return data.skills; 
  } catch (error) {
    throw error;
  }
});
