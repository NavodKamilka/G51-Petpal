const express = require("express");
const app = express();

const AccountManagement = require("./AccountManagementController");

app.use("/",AccountManagement);

module.exports = app;