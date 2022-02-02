import React from 'react';

export default function Images({ foodId, drinkId, sideId }) {
  return <div>
    <img src={`food-${foodId}.jpeg`}></img>
    <img src={`drink-${drinkId}.jpeg`}></img>
    <img src={`side-${sideId}.jpeg`}></img>
  </div>;
}
