import React from 'react';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <h3>{restaurant.name}</h3>
      <p>Rating: {restaurant.rating}</p>
      <p>Address: {restaurant.location.address1}, {restaurant.location.city}</p>
      <img src={restaurant.photos[0]} alt={restaurant.name} />
    </div>
  );
};

export default RestaurantCard;
