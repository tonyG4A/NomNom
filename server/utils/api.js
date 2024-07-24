const fetch = require("node-fetch");
const dotenv = require("dotenv");

dotenv.config();

const apiKey = process.env.VITE_YELP_API_KEY;
const apiUrl = "https://api.yelp.com/v3/businesses";

const searchRestaurants = async (term, location, limit = 10, offset = 0) => {
  const url = `${apiUrl}/search?term=${term}&location=${location}&limit=${limit}&offset=${offset}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  const data = await response.json();
  return data.businesses;
};

const getRestaurantDetails = async (id) => {
  const url = `${apiUrl}/${id}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  const data = await response.json();
  return data;
};

module.exports = { searchRestaurants, getRestaurantDetails };
