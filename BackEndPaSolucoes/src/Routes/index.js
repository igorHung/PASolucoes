const express = require("express");
const Routes = express.Router()
const userRoutes = require("./Users")

Routes.use(userRoutes)

module.exports = Routes
