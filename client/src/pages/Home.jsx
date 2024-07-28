import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import RestaurantList from '../components/RestaurantList';
import { searchRestaurants } from '../utils/api';
const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchData) => {
    try {
      // Call the API to search for restaurants
      const data = await searchRestaurants(searchData.term, searchData.location);
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching for restaurants:', error);
    }
  };

  return (
    <div class='searchbar'>
      <h1 id='search'>Find New Apetites</h1>
      <SearchBar onSearch={handleSearch} />
      {/* Display search results */}
      <RestaurantList restaurants={searchResults} />
    </div>
  );
};

export default Home;
