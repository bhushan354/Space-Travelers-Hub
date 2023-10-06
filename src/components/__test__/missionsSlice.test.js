import {
  getMissionsData,
  missionsHandler,
} from '../Redux/Missions/missionsSlice';
import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from '../Redux/Missions/missionsSlice';

describe('missions reducer', () => {
  const initialState = {
    missions: [],
    isLoading: false,
    hasError: false,
  };

  let store = configureStore({ reducer: { missions: missionsReducer } });

  it('should handle initial state', () => {
    expect(missionsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle getMissionsData.pending', () => {
    expect(missionsReducer(initialState, getMissionsData.pending())).toEqual({
      missions: [],
      isLoading: true,
      hasError: false,
    });
  });

  it('should handle getMissionsData.fulfilled', async () => {
    const dummyMissions = [
      {
        id: '1',
        name: 'Mission 1',
        description: 'Description 1',
        reserved: false,
      },
    ];

    expect(
      missionsReducer(initialState, getMissionsData.fulfilled(dummyMissions))
    ).toEqual({
      missions: dummyMissions,
      isLoading: false,
      hasError: false,
    });
  });

  it('should handle getMissionsData.rejected', () => {
    expect(missionsReducer(initialState, getMissionsData.rejected())).toEqual({
      missions: [],
      isLoading: false,
      hasError: true,
    });
  });

  it('should handle missionsHandler', () => {
    const state = {
      missions: [
        {
          id: '1',
          name: 'Mission 1',
          description: 'Description 1',
          reserved: false,
        },
      ],
      isLoading: false,
      hasError: false,
    };

    const updatedState = {
      missions: [
        {
          id: '1',
          name: 'Mission 1',
          description: 'Description 1',
          reserved: true,
        },
      ],
      isLoading: false,
      hasError: false,
    };

    expect(missionsReducer(state, missionsHandler('1'))).toEqual(updatedState);
  });
});
