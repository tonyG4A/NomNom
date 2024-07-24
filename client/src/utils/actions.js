export const SEARCH_RESTAURANTS_REQUEST = 'SEARCH_RESTAURANTS_REQUEST';
export const SEARCH_RESTAURANTS_SUCCESS = 'SEARCH_RESTAURANTS_SUCCESS';
export const SEARCH_RESTAURANTS_FAILURE = 'SEARCH_RESTAURANTS_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const searchRestaurantsRequest = () => ({ type: SEARCH_RESTAURANTS_REQUEST });
export const searchRestaurantsSuccess = (data) => ({ type: SEARCH_RESTAURANTS_SUCCESS, payload: data });
export const searchRestaurantsFailure = (error) => ({ type: SEARCH_RESTAURANTS_FAILURE, payload: error });

export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const signupRequest = () => ({ type: SIGNUP_REQUEST });
export const signupSuccess = () => ({ type: SIGNUP_SUCCESS });
export const signupFailure = (error) => ({ type: SIGNUP_FAILURE, payload: error });
