import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    // add Your Mission reducer here
  },
});

export default store;
