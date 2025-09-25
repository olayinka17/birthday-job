const path = require('path')
const express = require("express");
const Router = require("./route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/api/v1/user", Router);
module.exports = app;
