import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantDetails from '../components/RestaurantDetails';
import { getRestaurantDetails } from '../utils/api'; // Assuming you have an api.js file with utility functions

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      const data = await getRestaurantDetails(id);
      setRestaurant(data);
    };

    fetchRestaurantDetails();
  }, [id]);

  return (
    <div>
      <h1>Restaurant Details</h1>
      {restaurant && <RestaurantDetails restaurant={restaurant} />}
    </div>
  );
};

export default RestaurantDetailsPage;
