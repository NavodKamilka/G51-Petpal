const express = require("express");
const app = express();

const ViewAppointments = require("./ViewAppointmentsController");

app.use("/", ViewAppointments);

module.exports = app;



