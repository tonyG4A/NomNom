import { combineReducers } from 'redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';

// Define your initial state for restaurants
const initialRestaurantState = {
  restaurants: [],
  restaurantDetails: null,
  loading: false,
  error: null
};

// Define your reducer for restaurants
const restaurantReducer = (state = initialRestaurantState, action) => {
  switch (action.type) {
    case 'FETCH_RESTAURANTS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_RESTAURANTS_SUCCESS':
      return {
        ...state,
        loading: false,
        restaurants: action.payload,
        error: null
      };
    case 'FETCH_RESTAURANTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'FETCH_RESTAURANT_DETAILS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_RESTAURANT_DETAILS_SUCCESS':
      return {
        ...state,
        loading: false,
        restaurantDetails: action.payload,
        error: null
      };
    case 'FETCH_RESTAURANT_DETAILS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

// Define your initial state for users
const initialUserState = {
  loading: false,
  error: null,
  user: null,
  token: null,
};

// Define your reducer for users
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload,
        token: action.payload.token,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

// Combine both reducers into a single reducer
const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  user: userReducer
});

export default rootReducer;
