const express = require("express");
const authRoutes = require("./auth.routes");
const routes = express.Router();

routes.use("/auth", authRoutes);

module.exports = routes;
