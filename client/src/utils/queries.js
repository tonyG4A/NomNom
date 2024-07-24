import { gql } from '@apollo/client';


export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

export const SEARCH_RESTAURANTS = gql`
  query SearchRestaurants($term: String!, $location: String!, $limit: Int, $offset: Int) {
    searchRestaurants(term: $term, location: $location, limit: $limit, offset: $offset) {
      id
      name
      rating
      location {
        address1
        city
      }
    }
  }
`;

export const GET_RESTAURANT_DETAILS = gql`
  query GetRestaurantDetails($id: String!) {
    getRestaurantDetails(id: $id) {
      id
      name
      rating
      location {
        address1
        city
        country
      }
      reviews {
        id
        rating
        text
        user {
          id
          name
        }
      }
    }
  }
`;