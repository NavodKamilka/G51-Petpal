const express = require("express");
const app = express();

const ViewTimeslot = require("./ViewTimeslotsController");

app.use("/",ViewTimeslot);



module.exports = app;