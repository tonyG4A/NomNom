const mongoose = require("mongoose");

const { Schema } = mongoose;

const CoordinatesSchema = new Schema({
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
});

const LocationSchema = new Schema({
  address1: String,
  address2: String,
  address3: String,
  city: String,
  state: String,
  postalCode: String,
  country: String,
  displayAddress: [String],
});

const CategorySchema = new Schema({
  alias: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const ReviewSchema = new Schema({
  id: String,
  rating: {
    type: Number,
    required: true,
  },
  text: String,
  timeCreated: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: String,
  displayPhone: String,
  rating: Number,
  price: String,
  location: LocationSchema,
  coordinates: CoordinatesSchema,
  categories: [CategorySchema],
  photos: [String],
  url: String,
  reviewCount: Number,
  reviews: [ReviewSchema],
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;
