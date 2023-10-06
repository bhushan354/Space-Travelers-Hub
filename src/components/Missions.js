import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { missionsHandler, getMissionsData } from './Redux/Missions/missionsSlice';

function MisionItem({
  id, name, description, reserved,
}) {
  const dispatch = useDispatch();

  const getButton = (reserved, btn) => {
    let button;
    if (btn === 'member') {
      button = reserved ? (
        <span className="active-member-badge">Active Member</span>
      ) : (
        <span className="not-member-badge">Not a member</span>
      );
    }
    if (btn === 'mission') {
      button = reserved ? (
        <button className="leave-mission-btn" type="button" onClick={() => dispatch(missionsHandler(id))}>Leave Mission</button>
      ) : (
        <button className="join-mission-btn" type="button" onClick={() => dispatch(missionsHandler(id))}>Join Mission</button>
      );
    }
    return button;
  };

  return (
    <>
      <td className="mission-name">{name}</td>
      <td className="mission-description">{description}</td>
      <td className="table-badges">{getButton(reserved, 'member')}</td>
      <td className="table-btns">{getButton(reserved, 'mission')}</td>
    </>
  );
}

MisionItem.propTypes = {
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
            <th>{' '}</th>
          </tr>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <MisionItem
                name={mission.name}
                description={mission.description}
                reserved={mission.reserved}
                id={mission.id}
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
    content = <h1>Error occurred while fetching missions</h1>;
  }

  return <section className="missions">{content}</section>;
}

export default Missions;
