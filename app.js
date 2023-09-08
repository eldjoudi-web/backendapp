const express = require("express");
const app = express();
//const cloudinary = require("cloudinary").v2;
const bodyParser = require('body-parser');
require('dotenv').config()

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});





module.exports = app;