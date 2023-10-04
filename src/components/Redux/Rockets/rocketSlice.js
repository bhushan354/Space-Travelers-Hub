import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ApiLink = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rocketsData: [],
  isLoading: false,
  hasError: false,
};

export const getRocketsApi = createAsyncThunk(
  'RocketUser/fetchRocketsById',
  async () => {
    const reqData = axios.get(ApiLink);
    const { data } = await reqData;
    const ApiResponse = data.map((rocket) => ({
      id: rocket.id,
      name: rocket.name,
      description: rocket.description,
      image: rocket.flickr_images[0],
    }));
    return ApiResponse;
  },
);

const rocketSlice = createSlice({
  name: 'RocketUser',
  initialState,
  reducers: {
    // reducer for reserved button will have to use later
    setRocket: (state, { payload }) => ({
      ...state,
      rocketsData: state.rocketsData.map((rocket) => (rocket.id === payload
        ? { ...rocket, reserved: !rocket.reserved }
        : { ...rocket })),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRocketsApi.fulfilled, (state, { payload }) => {
        state.rocketsData = payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getRocketsApi.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getRocketsApi.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default rocketSlice.reducer;
export const { setRocket } = rocketSlice.actions;
