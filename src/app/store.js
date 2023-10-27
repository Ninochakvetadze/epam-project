import { configureStore } from '@reduxjs/toolkit';
import educationReducer from '../features/education/educationReducer';
import { fetchEducationData } from '../features/education/educationAction';

const store = configureStore({
  reducer: {
    education: educationReducer,
  },
});

store.dispatch(fetchEducationData());

export {store};