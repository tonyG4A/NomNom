import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ term, location });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Search for restaurants..." 
        value={term} 
        onChange={(e) => setTerm(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Location..." 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;