const express = require("express");
const { Signup, Login } = require("../controllers/auth.controllers");
const { addProject } = require("../controllers/project.controller");
const { isLogin } = require("../middlewares/admin");
const route = express.Router();

route.post("/addProject", addProject);
route.post("/updateProject", isLogin, (req, res) => {});
route.delete("/deleteProject", isLogin, (req, res) => {});

module.exports = route;
