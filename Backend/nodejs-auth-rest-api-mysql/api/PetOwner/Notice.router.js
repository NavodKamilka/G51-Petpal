const express = require("express");
const app = express();

const PostNotice = require("./Notice/PostNotice/PostNotice.router");

app.use("/",PostNotice)



module.exports = app;

