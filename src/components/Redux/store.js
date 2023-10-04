import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Missions/missionsSlice';
import rocketsReducer from './Rockets/rocketSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rocketsData: rocketsReducer,
  },
});
export default store;
