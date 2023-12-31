const express = require("express");
const authRoutes = require("./auth.routes");
const adminRoutes = require("./admin.routes");
const dataRoutes = require("./data.routes");
const routes = express.Router();

routes.use("/auth", authRoutes);
routes.use("/admin", adminRoutes);
routes.use("/data", dataRoutes);

module.exports = routes;
