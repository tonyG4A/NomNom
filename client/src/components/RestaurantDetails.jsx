import React from 'react';

const RestaurantDetails = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <p>Rating: {restaurant.rating}</p>
      <p>Address: {restaurant.location.address1}, {restaurant.location.city}</p>
      <p>Phone: {restaurant.phone}</p>
      <p>Price: {restaurant.price}</p>
      <p>Categories: {restaurant.categories.map(category => category.title).join(', ')}</p>
      <img src={restaurant.photos[0]} alt={restaurant.name} />
    </div>
  );
};

export default RestaurantDetails;
