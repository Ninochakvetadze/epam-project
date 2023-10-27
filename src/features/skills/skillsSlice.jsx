import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  skills: [],
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
  },
});

export const { addSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
