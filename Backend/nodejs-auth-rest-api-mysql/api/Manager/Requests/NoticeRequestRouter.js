const express = require("express");
const app = express();

const NoticeRequest = require("./NoticeRequestController");

app.use("/",NoticeRequest);



module.exports = app;