const express = require("express");
const app = express();
console.log("called roter");

const AddTimeslot = require("./AddTimeslotController");

app.use("/",AddTimeslot);

module.exports = app;
