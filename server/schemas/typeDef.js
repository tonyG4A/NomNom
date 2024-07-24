const { gql } = require('apollo-server-express');
const typeDefs = gql`

 type Coordinates {
    latitude: Float
    longitude: Float
  }
  
  type Location {
    address1: String
    address2: String
    address3: String
    city: String
    state: String
    postalCode: String
    country: String
    displayAddress: [String]
  }
  
  type Category {
    alias: String
    title: String
  }
  
  type Review {
    id: String
    rating: Float
    text: String
    timeCreated: String
    user: User
  }
  
  type User {
    id: String
    email: String
    password: String
    firstName: String
    lastName: string
  }
  
  type Restaurant {
    id: String
    name: String
    phone: String
    displayPhone: String
    rating: Float
    price: String
    location: Location
    coordinates: Coordinates
    categories: [Category]
    photos: [String]
    url: String
    reviewCount: Int
    reviews: [Review]
  }
  
  type Query {
    searchRestaurants(term: String!, location: String!, limit: Int, offset: Int): [Restaurant]
    getRestaurantDetails(id: String!): Restaurant
  }
  
  input ReviewInput {
    rating: Float
    text: String
    userId: String
  }
  
  type Mutation {
    createReview(restaurantId: String!, review: ReviewInput!): Review
    updateReview(reviewId: String!, review: ReviewInput!): Review
  };
  `
