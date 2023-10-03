import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rocketsData: [],
  isLoading: false,
  hasError: false,
};

const rocketSlice = createSlice({
  name: 'allRockets',
  initialState,
  reducers: {

  },
});

export default rocketSlice.reducer;
