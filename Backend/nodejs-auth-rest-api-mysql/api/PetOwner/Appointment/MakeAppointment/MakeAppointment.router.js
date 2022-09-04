const express = require("express");
const app = express();

const MakeAppointment = require("../MakeAppointment/MakeAppointment.controller");

app.use("/",MakeAppointment);

module.exports = app;