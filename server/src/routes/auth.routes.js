const express = require("express");
const { Signup, Login } = require("../controllers/auth.controllers");
const route = express.Router();

route.post("/signup", Signup);
route.post("/login", Login);

module.exports = route;
