import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getMissionsData = createAsyncThunk('missions/getMissionsData', async () => {
  const apiFetch = await fetch('https://api.spacexdata.com/v3/missions');
  const jsonFormatData = await apiFetch.json();

  return jsonFormatData.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
});

const initialState = {
  missions: [],
  isLoading: false,
  hasError: false,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    missionsHandler: (state, action) => {
      const getMisId = action.payload;
      state.missions = state.missions.map((mission) => (mission.id === getMisId
        ? { ...mission, reserved: !mission.reserved }
        : mission));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissionsData.fulfilled, (state, action) => ({
        ...state,
        missions: action.payload,
        isLoading: false,
        hasError: false,
      }))
      .addCase(getMissionsData.pending, (state) => ({
        ...state,
        isLoading: true,
        hasError: false,
      }))
      .addCase(getMissionsData.rejected, (state) => ({
        ...state,
        isLoading: false,
        hasError: true,
      }));
  },
});

export default missionsSlice.reducer;
export const { missionsHandler } = missionsSlice.actions;
