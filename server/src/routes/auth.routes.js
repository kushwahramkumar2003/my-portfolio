const express = require("express");
const { Signup, Login } = require("../controllers/auth.controllers");
const route = express.Router();

route.use("/signup", Signup);
route.use("/login", Login);

module.exports = route;
