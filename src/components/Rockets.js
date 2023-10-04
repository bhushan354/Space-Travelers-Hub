/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getRocketsApi } from './Redux/Rockets/rocketSlice';

const RocketCard = ({
  id, name, image, description,
}) => (
  <div key={id}>
    <div>
      <img src={image} alt="" />
    </div>
    <div>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  </div>
);

RocketCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const Rockets = () => {
  const dispatch = useDispatch();
  const { rocketsData, isLoading, hasError } = useSelector((store) => store);
  console.log(rocketsData);

  useEffect(() => {
    dispatch(getRocketsApi());
  }, [dispatch]);

  let content;

  if (!isLoading && !hasError && Array.isArray(rocketsData)) {
    content = (
      <div className="rockets">
        {rocketsData.map((rocket) => (
          <RocketCard
            key={rocket.id}
            id={rocket.id}
            name={rocket.name}
            image={rocket.image}
            description={rocket.description}
          />
        ))}
      </div>
    );
  }

  if (isLoading) {
    content = <h1>Loading Rockets ...</h1>;
  }
  if (hasError) {
    content = <h2>Something went wrong while Loading Rockets</h2>;
  }

  return <div className="rocket-section">{content}</div>;
};

export default Rockets;
