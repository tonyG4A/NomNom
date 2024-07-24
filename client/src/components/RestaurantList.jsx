import React from 'react';

const RestaurantList = ({ restaurants }) => {
  return (
    <div>
      <h2>Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <p>Rating: {restaurant.rating}</p>
            <p>Address: {restaurant.location.address1}, {restaurant.location.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
