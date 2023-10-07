import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../Missions';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

describe('Missions Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: [
          {
            id: '1',
            name: 'Mission 1',
            description: 'Description 1',
            reserved: false,
          },
          {
            id: '2',
            name: 'Mission 2',
            description: 'Description 2',
            reserved: true,
          },
        ],
        pending: false,
        error: null,
      },
    });
  });

  test('renders Missions component without crashing', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
  });

  test('displays the correct content when missions are fetched', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.getByText('Mission')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Mission 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Mission 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });

  test('displays the correct buttons based on mission reservation status', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.getByText('Join Mission')).toBeInTheDocument();
    expect(screen.getByText('Leave Mission')).toBeInTheDocument();
  });

  test('missions are not pending', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(store.getState().missions.pending).toBe(false);
  });

  test('no error when fetching missions', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(store.getState().missions.error).toBeNull();
  });

  test('correct number of missions are fetched', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(store.getState().missions.missions.length).toBe(2);
  });
});
