import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  missionsHandler,
  getMissionsData,
} from './Redux/Missions/missionsSlice';

function MissionButton({ id, reserved }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(missionsHandler(id));
  };

  return (
    <button
      className={`${reserved ? 'leave-mission-btn' : 'join-mission-btn'}`}
      type="button"
      onClick={handleClick}
    >
      {reserved ? 'Leave Mission' : 'Join Mission'}
    </button>
  );
}

MissionButton.propTypes = {
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

function MissionItem({
  id, name, description, reserved,
}) {
  return (
    <>
      <td className="mission-name">{name}</td>
      <td className="mission-description">{description}</td>
      <td className="table-badges">
        {reserved ? (
          <span className="active-member-badge">Active Member</span>
        ) : (
          <span className="not-member-badge">Not a member</span>
        )}
      </td>
      <td className="table-btns">
        <MissionButton id={id} reserved={reserved} />
      </td>
    </>
  );
}

MissionItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

function Missions() {
  const dispatch = useDispatch();
  const { missions, pending, error } = useSelector((store) => store.missions);

  useEffect(() => {
    if (missions.length < 1) {
      dispatch(getMissionsData());
    }
  }, [dispatch, missions.length]);

  let content;

  if (!pending && !error) {
    content = (
      <table className="missions-table">
        <tbody>
          <tr key="missions">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <MissionItem
                id={mission.id}
                name={mission.name}
                description={mission.description}
                reserved={mission.reserved}
              />
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  if (pending) {
    content = <h1>Fetching Missions</h1>;
  }
  if (error) {
    content = <h1>An Error occurred while fetching missions</h1>;
  }

  return <section className="missions">{content}</section>;
}

export default Missions;
