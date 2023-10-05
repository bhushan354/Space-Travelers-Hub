/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getRocketsApi, addReserved, removeReserved } from './Redux/Rockets/rocketSlice';
import '../App.css';

const RocketItem = ({
  id, name, image, description, isReserved, dispatch,
}) => (
  <div key={id} className="eachRocket">
    <div className="eachRocketImg">
      <img src={image} alt="rocketImage" />
    </div>
    <div className="eachRocketInfo">
      <h2>{name}</h2>
      <div className="badge">
        {isReserved && <span className="reserved-badge">Reserved</span>}
        <p>{description}</p>
      </div>
      {isReserved ? (
        <button
          type="button"
          onClick={() => {
            if (isReserved) {
              dispatch(removeReserved(id));
            } else {
              dispatch(addReserved(id));
            }
          }}
        >
          Cancel Reservation
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            if (isReserved) {
              dispatch(removeReserved(id));
            } else {
              dispatch(addReserved(id));
            }
          }}
        >
          Reserve Rocket
        </button>
      )}
    </div>
  </div>
);

RocketItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isReserved: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const Rockets = () => {
  const dispatch = useDispatch();
  const { rocketsData, isLoading, hasError } = useSelector((store) => store.rocketsData);
  useEffect(() => {
    dispatch(getRocketsApi());
  }, [dispatch]);

  let allRockets;

  if (!isLoading && !hasError) {
    allRockets = (
      <div className="rockets">
        {rocketsData.map((rocket) => (
          <RocketItem
            key={rocket.id}
            id={rocket.id}
            name={rocket.name}
            image={rocket.image}
            description={rocket.description}
            isReserved={rocket.isReserved}
            dispatch={dispatch}
          />
        ))}
      </div>
    );
  }

  if (isLoading) {
    allRockets = <p>Loading Rockets ...</p>;
  }
  if (hasError) {
    allRockets = <p>Something went wrong while Loading Rockets</p>;
  }

  return <div className="rocket-section">{allRockets}</div>;
};

export default Rockets;
