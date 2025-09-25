const express = require("express")
const register = require("./userController")

const Router = express.Router()

Router.post("/register", register)

module.exports = Router