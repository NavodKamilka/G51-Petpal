const express = require("express");
const app = express();

const PostNotice = require("../PostNotice/PostNotice.controller");

app.use("/",PostNotice);

module.exports = app;