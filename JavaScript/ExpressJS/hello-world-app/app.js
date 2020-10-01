//Import dependencies
const express = require("express");
const path = require("path");
//Configure environmental variables
require("dotenv").config();

//Initialise Express Application
const app = express();

//Set EJS as rendering engine
app.set("view engine", "ejs");
app.set("views", "views");

//Declare routes
app.get("/hello", (req, res, next) => {
  res.render("hello");
});

app.listen(process.env.PORT, () => {
  console.log(`Express Server on Port ${process.env.PORT}`);
});
