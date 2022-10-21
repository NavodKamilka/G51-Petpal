const express = require("express");
const app = express();

const dashboardUsers = require("./DashboardUsersController");
const dashboardUsersTable = require("./DashboardUsersTableController");

app.use("/", dashboardUsers);
app.use("/", dashboardUsersTable);

module.exports = app;