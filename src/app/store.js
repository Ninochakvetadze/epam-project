import { configureStore } from '@reduxjs/toolkit';
import educationReducer from '../features/education/educationReducer';
import SkillForm from '../features/skills/skillsForm';
import thunk from 'redux-thunk'; 

const localStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === SkillForm.type) {
    const skillsData = store.getState().skills.skills;
    localStorage.setItem('skills', JSON.stringify(skillsData));
  }
  return next(action);
};

const store = configureStore({
  reducer: {
    education: educationReducer,
  },
  middleware: [thunk, localStorageMiddleware], 
});

export { store };
