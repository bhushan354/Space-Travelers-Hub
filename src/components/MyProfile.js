import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  // reserved rockets
  const { rocketsData } = useSelector((state) => state.rocketsData);
  const reservedRockets = rocketsData.filter((rocket) => rocket.isReserved === true);

  const { missions } = useSelector((state) => state.missions);
  const activeMissions = missions.filter((rocket) => rocket.reserved === true);

  return (
    <div className="mainContainer">
      <div className="rocketsContainer">
        <h2>My Rockets</h2>
        <ul className="allReservedContainer">
          {reservedRockets.map((rocket) => (
            <li className="reservedRocketLi" key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
      {/* your joined missions here */}
      <div className="missionsContainer">
        <h2>My Missions</h2>
        <ul className="allActiveContainer">
          {activeMissions.map((rocket) => (
            <li className="reservedMissionsLi" key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyProfile;
