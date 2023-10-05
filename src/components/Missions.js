import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchMissionsData } from './Redux/Missions/missionsSlice';

const LoadingView = () => <div>Loading...</div>;
const ErrorView = () => <div>Error: Unable to fetch data for the missions</div>;

const MissionTable = () => {
  const missionsData = useSelector((state) => state.missions.missionsData);
  const missionsStatus = useSelector((state) => state.missions.missionsStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionsData());
  }, [dispatch]);

  if (missionsStatus === 'loading') {
    return <LoadingView />;
  }

  if (missionsStatus === 'failed') {
    return <ErrorView />;
  }

  const renderMissionRow = (mission) => (
    <tr key={mission.mission_id}>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>Upcoming</td>
      <td>
        <button type="button">Join Mission</button>
      </td>
    </tr>
  );

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        <th> </th>
      </thead>
      <tbody>{missionsData && missionsData.map(renderMissionRow)}</tbody>
    </Table>
  );
};

export default MissionTable;
