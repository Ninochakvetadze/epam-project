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
    removeSkill: (state, action) => {
      state.skills = state.skills.filter(skill => skill.id !== action.payload.id);
    },
    initializeSkillsFromLocalStorage: (state, action) => {
      state.skills = action.payload;
    },
  },
});

export const { addSkill, removeSkill, initializeSkillsFromLocalStorage } = skillsSlice.actions;
export default skillsSlice.reducer;
