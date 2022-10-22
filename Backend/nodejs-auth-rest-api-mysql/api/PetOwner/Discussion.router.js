const express = require("express");
const app = express();

const StartDiscussion = require("./Discussion/StartDiscussion/StartDiscussion.router");

app.use("/",StartDiscussion)



module.exports = app;