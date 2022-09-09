const express = require("express");
const app = express();

const MakeApointment = require("./Appointment/MakeAppointment/MakeAppointment.router");

app.use("/",MakeApointment)



module.exports = app;

