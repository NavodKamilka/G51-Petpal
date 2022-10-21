const express = require("express");
const app = express();

const AccountRequest = require("./AccountRequestController");

app.use("/",AccountRequest);



module.exports = app;