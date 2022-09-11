const express = require("express");
const app = express();

const MakeApointment = require("./Appointment/MakeAppointment/MakeAppointment.router");
const ViewApointment = require("./Appointment/ViewAppointment/ViewAppointment.router");

app.use("/",MakeApointment)
app.use("/",ViewApointment)



module.exports = app;

