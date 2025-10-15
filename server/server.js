const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/index");
const setServerConfiguration = require("./config");
const app = express();
setServerConfiguration(app);
mongoose.connect(
  "mongodb+srv://liors-database:lior.ah980@cluster0.iybrzvm.mongodb.net/orna_realtor?retryWrites=true&w=majority"
);
app.use("/", userRoute);
app.listen(4000);
