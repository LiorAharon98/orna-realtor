const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/index");
const setServerConfiguration = require("./config");
const app = express();

const dbUrl = process.env.NODE_ENV == "production" ? process.env.DB_PRODUCTION : process.env.DB_LOCAL;
setServerConfiguration(app);
mongoose.connect(dbUrl);
app.get("/", (req, res) => {
  res.send("Api is working!");
});
app.use("/", userRoute);
app.listen(process.env.PORT || 4000);
