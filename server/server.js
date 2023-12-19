const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/index");
const setServerConfiguration = require("./config");
const app = express();
const dbUrl =
process.env.NODE_ENV == "production"
? "mongodb+srv://liors-database:lior.ah980@cluster0.iybrzvm.mongodb.net/orna_realtor?retryWrites=true&w=majority"
: "mongodb://localhost:27017/orna-realtor";
setServerConfiguration(app);
mongoose.connect(dbUrl);
app.use("/", userRoute);
app.listen(process.env.PORT || 4000);
