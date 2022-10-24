const express = require("express");
const app = express();

const AddTimeslot = require("./AddTimeslotController");

app.use("/",AddTimeslot);

module.exports = app;
