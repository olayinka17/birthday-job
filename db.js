const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const connectToDB = () => {
  mongoose.connect(MONGO_URI);
  mongoose.connection.on("connected", () => {
    console.log("connection to DB was successfully");
  });
  mongoose.connection.on("error", () => {
    console.log("an error occured while connecting to db")
  })
};

module.exports = connectToDB
