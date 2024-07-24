const Restaurant = require("../models/Restaurant");
const User = require("../models/User");

const resolvers = {
  Query: {
    searchRestaurants: async (_, { term, location, limit, offset }) => {
      try {
        const restaurants = await Restaurant.find({
          name: { $regex: term, $options: "i" },
          location: { $regex: location, $options: "i" },
        })
          .limit(limit || 10)
          .skip(offset || 0);
        return restaurants;
      } catch (error) {
        throw new Error("Failed to fetch restaurants");
      }
    },
    getRestaurantDetails: async (_, { id }) => {
      try {
        const restaurant = await Restaurant.findById(id);
        return restaurant;
      } catch (error) {
        throw new Error("Failed to fetch restaurant details");
      }
    },
  },
  Mutation: {
    createReview: async (_, { restaurantId, review }) => {
      try {
        const user = await User.findById(review.userId);
        if (!user) throw new Error("User not found");

        const restaurant = await Restaurant.findById(restaurantId);
        if (!restaurant) throw new Error("Restaurant not found");

        const newReview = {
          rating: review.rating,
          text: review.text,
          timeCreated: new Date().toISOString(),
          user: user._id,
        };

        restaurant.reviews.push(newReview);
        await restaurant.save();

        return newReview;
      } catch (error) {
        throw new Error("Failed to create review");
      }
    },
    updateReview: async (_, { reviewId, review }) => {
      try {
        const restaurant = await Restaurant.findOneAndUpdate(
          { "reviews._id": reviewId },
          {
            $set: {
              "reviews.$.rating": review.rating,
              "reviews.$.text": review.text,
            },
          },
          { new: true }
        );

        if (!restaurant) throw new Error("Review not found");

        const updatedReview = restaurant.reviews.find(
          (r) => r._id.toString() === reviewId
        );
        return updatedReview;
      } catch (error) {
        throw new Error("Failed to update review");
      }
    },
  },
  Restaurant: {
    // Resolver function for nested field 'location'
    location: (parent) => {
      // Assuming location is directly available in the parent object
      return parent.location;
    },
    // Resolver function for nested field 'reviews'
    reviews: async (parent) => {
      try {
        const restaurant = await Restaurant.findById(parent.id);
        if (!restaurant) throw new Error("Restaurant not found");
        return restaurant.reviews;
      } catch (error) {
        throw new Error("Failed to fetch reviews");
      }
    },
  },
  Review: {
    // Resolver function for nested field 'user'
    user: async (parent) => {
      try {
        const user = await User.findById(parent.user);
        if (!user) throw new Error("User not found");
        return user;
      } catch (error) {
        throw new Error("Failed to fetch user");
      }
    },
  },
};

module.exports = resolvers;
