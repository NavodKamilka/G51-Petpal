const express = require("express");
const app = express();

const StartDiscussion = require("../StartDiscussion/StartDiscussion.controller");

app.use("/",StartDiscussion);

module.exports = app;