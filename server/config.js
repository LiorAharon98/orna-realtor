const express = require("express");
const cors = require("cors");
require("dotenv").config();
const setServerConfiguration = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());
};
module.exports = setServerConfiguration;