const express = require("express");
const app = express();

const ViewArticleList = require("./ArticleController");

app.use("/",ViewArticleList);



module.exports = app;