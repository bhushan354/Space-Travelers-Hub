import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  // filter reserved rockets
  const { rocketsData } = useSelector((state) => state.rocketsData);
  const reservedRockets = rocketsData.filter((rocket) => rocket.isReserved === true);

  return (
    <div className="mainContainer">
      <div className="rocketsContainer">
        <h2>My Reserved Rockets</h2>
        <ol className="allReservedContainer">
          {reservedRockets.map((rocket) => (
            <li className="reservedRocketLi" key={rocket.id}>{rocket.name}</li>
          ))}
        </ol>
      </div>
      {/* fidlis add your joined missions here */}
    </div>
  );
}

export default MyProfile;
