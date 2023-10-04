import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/rocketSlice';

const store = configureStore({
  reducer: {
    rocketsData: rocketsReducer,
    // add Your Mission reducer here
  },
});

export default store;
