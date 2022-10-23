const express = require("express");
const app = express();

const ViewAppointments = require("./ViewAppointmentsController");

app.use("/", ViewAppointments);
app.use("/todayAppointments", ViewAppointments/Today);

module.exports = app;



