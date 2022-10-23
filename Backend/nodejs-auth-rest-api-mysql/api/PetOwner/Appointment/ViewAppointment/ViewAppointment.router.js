const express = require("express");
const app = express();

const ViewAppointment = require("../ViewAppointment/ViewAppointment.controller");

app.use("/",ViewAppointment);

module.exports = app;