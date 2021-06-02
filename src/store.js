import { configureStore } from '@reduxjs/toolkit';
import pantoneReducer from './reducer';

export default configureStore({
  reducer: {
    pantoneColors: pantoneReducer,
  },
});