const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  visited: Date,
  available: Date,
  rentOrSell: String,
  type: String,
  condition: String,
  city: String,
  neighborhood: String,
  street: String,
  squareMeter: Number,
  rooms: Number,
  floor: Number,
  maxFloor: Number,
  balcony: Number,
  serviceBalcony: Number,
  parking: Number,
  warehouse: Number,
  bathrooms: Number,
  bathtub: String,
  showerStall: String,
  elevator: Number,
  airConditioner: String,
  furniture: String,
  airDirections: String,
  Extended: Array,
  propertyTax: Number,
  committee: Number,
  price: Number,
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
