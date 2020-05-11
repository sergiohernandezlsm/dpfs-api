const express = require("express");

var app = express();

app.use(function (req, res, next) {
  console.log("Year:", new Date().getFullYear());
  next();
});

module.exports = app;
