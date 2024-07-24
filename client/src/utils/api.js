import axios from 'axios';

// Load environment variables
const apiKey = import.meta.env.VITE_YELP_API_KEY;

// Base URL for Yelp API
const baseURL = 'https://api.yelp.com/v3';

// Create an instance of axios with base URL and default headers
const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-type': 'application/json',
  },
});

// Define your Yelp API functions
export const searchRestaurants = async (term, location) => {
  try {
    const response = await axiosInstance.get('/businesses/search', {
      params: {
        term,
        location,
      },
    });
    return response.data.businesses;
  } catch (error) {
    console.error('Error searching for restaurants:', error);
    throw error;
  }
};

export const getRestaurantDetails = async (id) => {
  try {
    const response = await axiosInstance.get(`/businesses/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting restaurant details:', error);
    throw error;
  }
};

export const searchReviews = async (id) => {
  try {
    const response = await axiosInstance.get(`/businesses/${id}/reviews`);
    return response.data.reviews;
  } catch (error) {
    console.error('Error searching for reviews:', error);
    throw error;
  }
};

// Add more Yelp API functions as needed
